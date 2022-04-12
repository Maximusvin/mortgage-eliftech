export const formatCurrency = value =>
  value.toLocaleString('en-US', { maximumSignificantDigits: 2 });
