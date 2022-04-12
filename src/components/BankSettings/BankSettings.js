import { useState } from 'react';

import { Skeleton, ModalOfBanks } from 'components';
import { EmptyBankSettings } from './EmptyBankSettings';
import { BanksListComponent } from './BanksList';

import { Wrapper } from './BankSettings.style';

export const BankSettings = ({ banksList, isEmptyBanksList, isLoading }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleChangeItem = item => {
    setActiveItem(item);
    setIsOpenModal(true);
  };

  const selectBankComponent = isEmptyBanksList ? (
    <BanksListComponent
      banks={banksList}
      onButtonClick={onOpenModal}
      onChangeItemList={handleChangeItem}
    />
  ) : (
    <EmptyBankSettings onButtonClick={onOpenModal} />
  );

  return (
    <Wrapper>
      {isLoading ? <Skeleton /> : selectBankComponent}

      {isOpenModal && (
        <ModalOfBanks
          onCloseModal={onCloseModal}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      )}
    </Wrapper>
  );
};
