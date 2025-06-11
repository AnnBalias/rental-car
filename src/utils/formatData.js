export const addressFormat = (str) => {
  const addressStr = str;
  const addressArr = addressStr.split(', ');
  return addressArr;
};

export const carTypeFormat = (str) => {
  const carTypeUpp = str;
  const carTypeLow =
    carTypeUpp.charAt(0).toUpperCase() + carTypeUpp.slice(1).toLowerCase();
  return carTypeLow;
};

export const mileageFormat = (num) => {
  const mileageNum = num;
  const mileageFormat = mileageNum.toLocaleString('uk-UA');
  return mileageFormat;
};
