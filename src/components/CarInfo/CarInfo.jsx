import { AccessoriesFunctionalities } from './AccessoriesFunctionalities/AccessoriesFunctionalities';
import css from './CarInfo.module.css';
import { CarSpecifications } from './CarSpecifications/CarSpecifications';
import { RentalConditions } from './RentalConditions/RentalConditions';

export const CarInfo = () => {
  return (
    <div className={css.p}>
      <p className={css.p}>CarInfo</p>
      <RentalConditions />
      <CarSpecifications />
      <AccessoriesFunctionalities />
    </div>
  );
};
