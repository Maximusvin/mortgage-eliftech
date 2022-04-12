const STATUS = [
  {
    id: 0,
    status: 'No banks in the system',
    message:
      'There is no bank in the following list. Please add your first bank to the system.',
  },
  {
    id: 1,
    status: 'Data pending',
    message:
      'Enter the data in the form to calculate the possibility of issuing a loan. To do this, select the bank you need from the list and specify the loan amount, as well as the initial advance payment',
  },
  {
    id: 1_2,
    status: 'Data pending',
    message: 'Bank selected. Now enter the loan amount and down payment.',
  },
  {
    id: 1_3,
    status: 'Data pending',
    message:
      'Bank and loan amount selected. Specify the amount of the advance payment.',
  },
  {
    id: 4,
    status: 'Rejected',
    message:
      'The amount of the requested loan exceeds the maximum possible loan amount at the bank.',
  },
  {
    id: 5,
    status: 'Rejected',
    message:
      'The minimum down payment is less than the required bank down payment threshold. Increase the amount of the advance payment.',
  },
  {
    id: 6,
    status: 'Rejected',
    message:
      'The amount of the advance payment exceeds the loan itself. Increase the loan amount or reduce the down payment amount.',
  },
  {
    id: 6_7,
    status: 'Rejected',
    message:
      "The loan amount and the minimum amount of the advance payment do not meet the bank's requirements.",
  },
  {
    id: 8,
    status: 'Approved',
    message:
      'Fine! All data meet the requirements of the bank. You can take out a loan.',
  },
];

export const validateData = (
  activeBank,
  initialLoan,
  downPayment,
  isEmptyBanksList,
) => {
  const isValidateInitialLoan =
    activeBank && initialLoan && +activeBank.maxLoan >= +initialLoan;

  const isValidateDownPayment =
    activeBank && downPayment && +activeBank.minPayment <= +downPayment;

  const isValidPayment = +initialLoan > +downPayment;

  let activeStatus = '';

  if (isEmptyBanksList) {
    activeStatus = STATUS[0];
  }

  if (!activeBank && !isEmptyBanksList && !initialLoan && !downPayment) {
    activeStatus = STATUS[1];
  }

  if (activeBank && !isEmptyBanksList && !initialLoan && !downPayment) {
    activeStatus = STATUS[2];
  }

  if (
    activeBank &&
    !isEmptyBanksList &&
    initialLoan &&
    !downPayment &&
    isValidateInitialLoan &&
    !isValidateDownPayment
  ) {
    activeStatus = STATUS[3];
  }

  if (
    activeBank &&
    !isEmptyBanksList &&
    initialLoan &&
    !isValidateInitialLoan
  ) {
    activeStatus = STATUS[4];
  }

  if (
    activeBank &&
    !isEmptyBanksList &&
    initialLoan &&
    downPayment &&
    isValidateInitialLoan &&
    !isValidateDownPayment
  ) {
    activeStatus = STATUS[5];
  }

  if (
    activeBank &&
    !isEmptyBanksList &&
    initialLoan &&
    downPayment &&
    isValidateInitialLoan &&
    isValidateDownPayment &&
    !isValidPayment
  ) {
    activeStatus = STATUS[6];
  }

  if (
    activeBank &&
    !isEmptyBanksList &&
    initialLoan &&
    downPayment &&
    !isValidateInitialLoan &&
    !isValidateDownPayment &&
    isValidPayment
  ) {
    activeStatus = STATUS[7];
  }

  if (
    activeBank &&
    !isEmptyBanksList &&
    initialLoan &&
    downPayment &&
    isValidateInitialLoan &&
    isValidateDownPayment &&
    isValidPayment
  ) {
    activeStatus = STATUS[8];
  }

  return activeStatus;
};
