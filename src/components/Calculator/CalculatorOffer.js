import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { Paragraph, Title, MainButton, Box } from 'UI/ui-kit';
import { Modal } from 'UI';
import { validateData } from 'functions';
import { WrapOffer, Span } from './Calculator.style';

const PATHNAME_BANK_SETTING = '/contacts';

export const CalculatorOffer = ({
  activeBank,
  initialLoan,
  downPayment,
  isEmptyBanksList,
}) => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const currentUrl = location.pathname;

  const statusValidate = validateData(
    activeBank,
    initialLoan,
    downPayment,
    isEmptyBanksList,
  );

  const onOpenModal = () => {
    setVisible(true);
  };

  const onCloseModal = () => {
    localStorage.removeItem('activeBank');
    localStorage.removeItem('initialLoan');
    localStorage.removeItem('downPayment');
    setVisible(false);
    if (currentUrl !== PATHNAME_BANK_SETTING) {
      history.push(PATHNAME_BANK_SETTING);
    }
  };

  return (
    <WrapOffer status={statusValidate.status}>
      <Title marginBottom={'30px'}>Bank Status</Title>
      <Paragraph marginBottom={'20px'}>
        <Span>Status:</Span> {statusValidate.status}
      </Paragraph>
      <Paragraph>
        <Span>Message:</Span> {statusValidate.message}
      </Paragraph>
      {statusValidate.status === 'Approved' && (
        <MainButton
          marginTop={'50px'}
          marginLeft={'auto'}
          marginRight={'auto'}
          onClick={onOpenModal}
        >
          Apply for a loan
        </MainButton>
      )}

      {visible && (
        <Modal onCloseModal={onCloseModal} padding={'40px'}>
          <Box>
            <Title marginBottom={'40px'}>Congratulations</Title>
            <Paragraph>
              You have been approved for a loan in the amount of {initialLoan}{' '}
              USD from {activeBank.name} Bank for a period of{' '}
              {activeBank.loanTerm} months at {activeBank.interest}%.
            </Paragraph>
            <Paragraph>
              For all questions, please contact your manager:{' '}
              <a href="mailto:Maximusvin@gmail.com">Maximusvin@gmail.com</a>
            </Paragraph>
            <MainButton
              marginTop={'30px'}
              marginLeft={'auto'}
              marginRight={'auto'}
              onClick={() => onCloseModal()}
            >
              Close
            </MainButton>
          </Box>
        </Modal>
      )}
    </WrapOffer>
  );
};
