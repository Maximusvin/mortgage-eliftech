import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dropdown } from 'components';

import { Title } from 'UI/ui-kit';
import {
  FormWrap,
  InputForm,
  InputWrap,
  ErrorMessage,
  InputSpan,
  DropdownSpan,
} from './Calculator.style';

const schema = yup.object().shape({
  initialLoan: yup
    .number()
    .typeError('Max loan must be a number and required')
    .positive('Max loan must be greater than zero')
    .required('Is a required field')
    .min(5000, 'Minimum value 5000$')
    .max(50000000000, 'Maximum 50.000.000.000'),
  payment: yup
    .number()
    .typeError('Min payment must be a number and required')
    .min(0, 'Minimum down payment - 0$')
    .required('Is a required field')
    .max(50000000000, 'Maximum 50.000.000.000'),
});

const Input = ({
  label,
  type,
  register,
  errors,
  placeholder,
  errorName,
  onChange,
  disabled,
}) => (
  <InputWrap>
    <InputForm
      type={type}
      placeholder={placeholder}
      {...register(label)}
      onChange={onChange}
      disabled={disabled}
    />
    <ErrorMessage>
      {errorName ? errorName : errors[label]?.message}
    </ErrorMessage>
  </InputWrap>
);

export const CalculatorForm = ({
  banksList,
  activeBank,
  setActiveBank,
  setInItialLoan,
  setDownPayment,
}) => {
  const defaultValues = activeBank
    ? {
        initialLoan: localStorage.getItem('initialLoan'),
        payment: localStorage.getItem('downPayment'),
      }
    : null;

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
  });

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'initialLoan':
        if (value <= 50000000000) {
          localStorage.setItem('initialLoan', value);
          setInItialLoan(value);
        }
        break;
      case 'payment':
        if (value <= 50000000000) {
          localStorage.setItem('downPayment', value);
          setDownPayment(value);
        }
        break;
      default:
        return null;
    }
  };

  return (
    <FormWrap>
      <Title marginBottom={'30px'}> Enter your data for calculation</Title>
      <DropdownSpan>
        Choose a bank from the list
        <Dropdown
          banksList={banksList}
          getActiveBank={setActiveBank}
          activeBank={activeBank}
        />
      </DropdownSpan>
      <InputSpan active={activeBank}>
        Initial loan, (example: 280.000 $)
        <Input
          type="number"
          label="initialLoan"
          placeholder="Initial loan, (280.000 $)"
          register={register}
          errors={errors}
          onChange={handleInputChange}
          disabled={activeBank ? false : true}
        />
      </InputSpan>

      <InputSpan active={activeBank}>
        Down payment, (example: 20.000 $)
        <Input
          type="number"
          label="payment"
          placeholder="Down payment, (20.000 $)"
          register={register}
          errors={errors}
          onChange={handleInputChange}
          disabled={activeBank ? false : true}
        />
      </InputSpan>
    </FormWrap>
  );
};
