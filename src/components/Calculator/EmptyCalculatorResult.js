import { Paragraph, Title, Box } from 'UI/ui-kit';
import { formatCurrency } from 'functions';
import { WrapResult, Span } from './Calculator.style';

export const EmptyCalculatorResult = ({
  activeBank,
  initialLoan,
  downPayment,
}) => {
  return (
    <WrapResult>
      <Title marginBottom={'30px'}>Loan Information</Title>
      <Box marginBottom={'30px'}>
        <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
          Bank: <Span>{activeBank ? activeBank.name : 'No selected bank'}</Span>
        </Paragraph>
        <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
          Mortgage Size, $:{' '}
          <Span>{activeBank ? formatCurrency(activeBank.maxLoan) : '---'}</Span>
        </Paragraph>
        <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
          Minimum down payment, $:{' '}
          <Span>
            {activeBank ? formatCurrency(activeBank.minPayment) : '---'}
          </Span>
        </Paragraph>
        <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
          Loan period, month:{' '}
          <Span>{activeBank ? activeBank.loanTerm : '---'}</Span>
        </Paragraph>
        <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
          Interest rate, %:{' '}
          <Span>{activeBank ? activeBank.interest : '---'}</Span>
        </Paragraph>
      </Box>

      <Box marginBottom={'30px'}>
        <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
          Initial loan, $:{' '}
          <Span>{initialLoan ? formatCurrency(+initialLoan) : '---'}</Span>
        </Paragraph>
        <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
          Down payment, $:{' '}
          <Span>{downPayment ? formatCurrency(+downPayment) : '---'}</Span>
        </Paragraph>
      </Box>

      <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
        Monthly payment, $: <Span>---</Span>
      </Paragraph>
      <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
        Mortgage Interest, $: <Span>---</Span>
      </Paragraph>
      <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
        Total Mortgage Paid, $: <Span>---</Span>
      </Paragraph>
    </WrapResult>
  );
};
