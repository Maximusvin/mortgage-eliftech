import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { getAllBanks, addBank, changeBank } from 'redux/banks';

import { Box, MainButton } from 'UI/ui-kit';
import {
  FormWrap,
  InputForm,
  InputWrap,
  ErrorMessage,
} from './BankAddForm.style';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Is a required field')
    .min(3, 'Must be at least 3 characters'),
  interest: yup
    .number()
    .typeError('Interest rate must be a number and required')
    .positive('Interest rate must be greater than zero')
    .required('Is a required field')
    .max(100, 'Maximum percentage - 100'),
  maxLoan: yup
    .number()
    .typeError('Max loan must be a number and required')
    .positive('Max loan must be greater than zero')
    .required('Is a required field')
    .min(5000, 'Minimum value 5000$')
    .max(5000000, 'Maximum 5.000.000'),
  minPayment: yup
    .number()
    .typeError('Min payment must be a number and required')
    .required('Is a required field')
    .min(0, 'Minimum down payment - 0$')
    .max(5000000, 'Maximum 5.000.000'),
  loanTerm: yup
    .number()
    .typeError('Loan term must be a number and required')
    .positive('Loan term must be greater than zero')
    .required('Is a required field')
    .min(12, 'Must be at least 12 months'),
  notes: yup.string().trim().max(30, 'Max number of characters - 30'),
});

const Input = ({ label, type, register, errors, placeholder, errorName }) => (
  <InputWrap>
    <InputForm type={type} placeholder={placeholder} {...register(label)} />
    <ErrorMessage>
      {errorName ? errorName : errors[label]?.message}
    </ErrorMessage>
  </InputWrap>
);

export const BankAddForm = ({ onCloseModal, activeItem, setActiveItem }) => {
  const [errorName, setErrorName] = useState(null);
  const allBanks = useSelector(getAllBanks);
  const dispatch = useDispatch();

  const defaultValues = activeItem
    ? {
        name: activeItem.name || '',
        interest: activeItem.interest || null,
        maxLoan: activeItem.maxLoan || null,
        minPayment: activeItem.minPayment || null,
        loanTerm: activeItem.loanTerm || null,
        notes: activeItem.notes || '',
      }
    : null;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = data => {
    setErrorName(null);

    const isDuplicateBank = allBanks.filter(
      item => item.name === data.name,
    ).length;

    if (!activeItem && isDuplicateBank) {
      setErrorName('Such a bank already exists. Add a new bank');
      return;
    }

    const bankID = uuidv4();

    if (activeItem) {
      dispatch(changeBank({ ...data, id: activeItem.id }));
      setActiveItem(null);
    } else {
      dispatch(addBank({ ...data, id: bankID, status: 'created' }));
    }

    onReset();
    onCloseModal();
  };

  const onReset = () => {
    reset({});
  };

  return (
    <FormWrap onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="name"
        placeholder="Bank name"
        register={register}
        errors={errors}
        errorName={errorName}
      />

      <Input
        type="number"
        label="interest"
        placeholder="Annual interest rate, %"
        register={register}
        errors={errors}
      />

      <Input
        type="number"
        label="maxLoan"
        placeholder="Maximum loan, $"
        register={register}
        errors={errors}
      />

      <Input
        type="number"
        label="minPayment"
        placeholder="Minimum down payment, $"
        register={register}
        errors={errors}
      />

      <Input
        type="number"
        label="loanTerm"
        placeholder="Loan term. Min 12 month"
        register={register}
        errors={errors}
      />

      <Input
        type="text"
        label="notes"
        placeholder="Your notes (optional)"
        register={register}
        errors={errors}
      />

      <Box
        width={'100%'}
        marginTop={'30px'}
        display={'flex'}
        justifyContent={'center'}
      >
        <MainButton type="submit" marginRight={'40px'} width={'25%'}>
          {activeItem ? 'Edit' : 'Create'}
        </MainButton>
        <MainButton type="button" width={'25%'} onClick={() => onCloseModal()}>
          Сlose
        </MainButton>
      </Box>
    </FormWrap>
  );
};
