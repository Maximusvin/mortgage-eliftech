import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBanks, getAllBanks } from 'redux/banks';
import { Calculator } from 'components';
import { SectionWrap } from '../UI/SectionWrap';

export const CalculatorView = () => {
  const isLoading = useSelector(state => state.banks.loading);
  const dispatch = useDispatch();
  const allBanks = useSelector(getAllBanks);

  const isEmptyBanksList = !allBanks.length > 0;

  useEffect(() => {
    if (!isEmptyBanksList) {
      return;
    }

    dispatch(fetchBanks());
  }, [dispatch, isEmptyBanksList]);

  return (
    <SectionWrap title="Calculator">
      <Calculator
        banksList={allBanks}
        isEmptyBanksList={isEmptyBanksList}
        isLoading={isLoading}
      />
    </SectionWrap>
  );
};
