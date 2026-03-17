export const checkMsrp = (price?: string, msrp?: string): boolean => {
  if (!msrp || !price) return false;
  const priceNum = parseFloat(price);
  const msrpNum = parseFloat(msrp);
  return !isNaN(priceNum) && !isNaN(msrpNum) && msrpNum > priceNum;
};
