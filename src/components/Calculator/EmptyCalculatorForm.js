import { useEffect, useState } from 'react';
import { Paragraph, Box, MainButton } from 'UI/ui-kit';
import { LoaderUI } from 'UI/LoaderUI';
import { ModalOfBanks } from 'components';
import { BsBank2 } from 'react-icons/bs';
import { EmptyWrap } from './Calculator.style';

export const EmptyCalculatorForm = ({ isLoading }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <EmptyWrap>
      <Paragraph>There are no added banks in your list</Paragraph>
      <Paragraph>Please add your first bank</Paragraph>

      <Box marginTop={'30px'} marginBottom={'30px'}>
        <BsBank2
          style={{
            width: '200px',
            height: '200px',
            color: 'rgba(0, 0, 0, 0.2)',
          }}
        />
      </Box>

      {isLoading ? (
        <LoaderUI />
      ) : (
        <MainButton
          onClick={onOpenModal}
          marginLeft={'auto'}
          marginRight={'auto'}
        >
          Create a new bank
        </MainButton>
      )}

      {isOpenModal && <ModalOfBanks onCloseModal={onCloseModal} />}
    </EmptyWrap>
  );
};
