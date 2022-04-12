import { Paragraph, Box, MainButton } from 'UI/ui-kit';
import { BsBank2 } from 'react-icons/bs';
import { WrapperEmpty } from './BankSettings.style';

export const EmptyBankSettings = ({ onButtonClick }) => {
  return (
    <WrapperEmpty>
      <Paragraph>There are no added banks in your list</Paragraph>
      <Paragraph>Please add the bank</Paragraph>

      <Box marginTop={'30px'} marginBottom={'30px'}>
        <BsBank2
          style={{
            width: '200px',
            height: '200px',
            color: 'rgba(0, 0, 0, 0.2)',
          }}
        />
      </Box>

      <MainButton onClick={onButtonClick}>Create a new bank</MainButton>
    </WrapperEmpty>
  );
};
