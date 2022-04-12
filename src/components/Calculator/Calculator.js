import { useState } from 'react';
import { CalculatorForm } from './CalculatorForm';
import { CalculatorResult } from './CalculatorResult';
import { CalculatorOffer } from './CalculatorOffer';
import { EmptyCalculatorForm } from './EmptyCalculatorForm';
import { EmptyCalculatorResult } from './EmptyCalculatorResult';

import { Wrapper } from './Calculator.style';

export const Calculator = ({ banksList, isEmptyBanksList, isLoading }) => {
  const [activeBank, setActiveBank] = useState(
    JSON.parse(localStorage.getItem('activeBank')) || null,
  );
  const [initialLoan, setInItialLoan] = useState(null);
  const [downPayment, setDownPayment] = useState(null);

  const isValidateData = activeBank && initialLoan && downPayment;

  return (
    <Wrapper>
      {isEmptyBanksList ? (
        <EmptyCalculatorForm isLoading={isLoading} />
      ) : (
        <CalculatorForm
          banksList={banksList}
          setActiveBank={setActiveBank}
          activeBank={activeBank}
          setInItialLoan={setInItialLoan}
          setDownPayment={setDownPayment}
        />
      )}

      {!!isValidateData ? (
        <CalculatorResult
          activeBank={activeBank}
          initialLoan={initialLoan}
          downPayment={downPayment}
        />
      ) : (
        <EmptyCalculatorResult
          activeBank={activeBank}
          initialLoan={initialLoan}
          downPayment={downPayment}
        />
      )}
      <CalculatorOffer
        activeBank={activeBank}
        initialLoan={initialLoan}
        downPayment={downPayment}
        isEmptyBanksList={isEmptyBanksList}
      />
    </Wrapper>
  );
};
