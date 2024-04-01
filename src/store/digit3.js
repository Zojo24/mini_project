const cut3Digit = /\B(?=(\d{3})+(?!\d))/g;

export const digit3 = (isNumber) => {
  if (isNumber === undefined) {
    return "-";
  }
  const digit = String(isNumber).replace(/\D/g, "");

  const formatPrice = (value) => {
    return value.replace(cut3Digit, ",");
  };
  const formattedPrice = formatPrice(digit);
  return formattedPrice;
};
