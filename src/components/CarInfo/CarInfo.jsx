import { AccessoriesFunctionalities } from './AccessoriesFunctionalities/AccessoriesFunctionalities';
import css from './CarInfo.module.css';

export const CarInfo = () => {
  return (
    <>
      <p className={css.p}>CarInfo</p>
      <RentalConditions />
      <CarSpecifications />
      <AccessoriesFunctionalities />
    </>
  );
};
