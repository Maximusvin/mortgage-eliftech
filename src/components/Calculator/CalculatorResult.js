import { Paragraph, Title, Box } from 'UI/ui-kit';
import { formatCurrency } from 'functions';
import { WrapResult, Span } from './Calculator.style';

export const CalculatorResult = ({ activeBank, initialLoan, downPayment }) => {
  const { interest, loanTerm, maxLoan, minPayment, name } = activeBank;

  const calculatePayment = (initialLoan, loanTerm, interestRate) => {
    const interestMonthly = interestRate / 100 / 12;
    const numerator = interestMonthly * (1 + interestMonthly) ** loanTerm;
    const denominator = (1 + interestMonthly) ** loanTerm - 1;
    const monthPayment = (initialLoan * numerator) / denominator;

    return monthPayment;
  };

  const monthPayment = calculatePayment(
    Number(initialLoan) - Number(downPayment),
    Number(loanTerm),
    Number(interest),
  );

  const totalMortgagePaid = monthPayment * loanTerm;

  return (
    <WrapResult>
      <Title marginBottom={'30px'}>Loan Information</Title>
      <Box marginBottom={'30px'}>
        <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
          Bank: <Span>{name}</Span>
        </Paragraph>
        <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
          Mortgage Size, $: <Span>{formatCurrency(maxLoan)}</Span>
        </Paragraph>
        <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
          Minimum down payment, $: <Span>{formatCurrency(minPayment)}</Span>
        </Paragraph>
        <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
          Loan period, month: <Span>{loanTerm}</Span>
        </Paragraph>
        <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
          Interest rate, %: <Span>{interest}</Span>
        </Paragraph>
      </Box>

      <Box marginBottom={'30px'}>
        <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
          Initial loan, $: <Span>{formatCurrency(+initialLoan)}</Span>
        </Paragraph>
        <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
          Down payment, $: <Span>{formatCurrency(+downPayment)}</Span>
        </Paragraph>
      </Box>

      <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
        Monthly payment, $: <Span>{formatCurrency(monthPayment)}$</Span>
      </Paragraph>
      <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
        Mortgage Interest, $:{' '}
        <Span>
          {formatCurrency(totalMortgagePaid - (initialLoan - downPayment))}
        </Span>
      </Paragraph>
      <Paragraph borderBottom={'1px solid #E8E8E8'} display={'flex'}>
        Total Mortgage Paid, $: <Span>{formatCurrency(totalMortgagePaid)}</Span>
      </Paragraph>
    </WrapResult>
  );
};
