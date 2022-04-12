import { BankAddForm } from 'components/BankSettings';
import { Modal } from 'UI';
import { TitleModal } from './ModalOfBanks.style';

export const ModalOfBanks = ({
  onCloseModal,
  activeItem = null,
  setActiveItem,
}) => {
  return (
    <Modal onCloseModal={onCloseModal} padding={'30px'}>
      <div>
        <TitleModal>
          {activeItem
            ? `Editing a "${activeItem.name}" bank`
            : 'Creation of a new bank'}
        </TitleModal>
        <BankAddForm
          onCloseModal={onCloseModal}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>
    </Modal>
  );
};
