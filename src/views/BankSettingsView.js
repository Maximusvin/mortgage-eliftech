import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BankSettings } from 'components';
import { SectionWrap } from '../UI/SectionWrap';
import { fetchBanks, getAllBanks } from 'redux/banks';

export const BankSettingsView = () => {
  const isLoading = useSelector(state => state.banks.loading);
  const dispatch = useDispatch();
  const allBanks = useSelector(getAllBanks);

  const isEmptyBanksList = allBanks.length > 0;

  useEffect(() => {
    if (isEmptyBanksList) {
      return;
    }

    dispatch(fetchBanks());
  }, [dispatch, isEmptyBanksList]);

  return (
    <SectionWrap title="Bank Settings">
      <BankSettings
        banksList={allBanks}
        isEmptyBanksList={isEmptyBanksList}
        isLoading={isLoading}
      />
    </SectionWrap>
  );
};
