import locationSvg from '../../assets/icons/location-sign.svg';
import checkCircleSvg from '../../assets/icons/check-circle.svg';
import calendarSvg from '../../assets/icons/calendar.svg';
import carSvg from '../../assets/icons/car.svg';
import fuelPumpSvg from '../../assets/icons/fuel-pump.svg';
import gearSvg from '../../assets/icons/gear.svg';
import css from './CarDetails.module.css';
import {
  addressFormat,
  // carTypeFormat,
  mileageFormat,
} from '../../utils/formatData';

export const CarDetails = ({ car }) => {
  const addressArr = addressFormat(car.address);
  // const carType = carTypeFormat(car.type);
  const mileage = mileageFormat(car.mileage);
  console.log(car);

  return (
    <div className={css.detailsBox}>
      <div className={css.mainInfo}>
        <h2 className={css.title}>
          {`${car.brand} ${car.model}, ${car.year}`}
          <span className={css.titleSpan}>{`id: ${car.id}`}</span>
        </h2>
        <div className={css.subtitleBox}>
          <div className={css.locationBox}>
            <img src={locationSvg} alt="location" className={css.locationSvg} />{' '}
            <p
              className={css.subtitle}
            >{`${addressArr[1]}, ${addressArr[2]}`}</p>
          </div>
          <p className={css.subtitle}>Mileage: {`${mileage}`}</p>
        </div>
        <p className={css.price}>{`$${car.rentalPrice}`}</p>
        <p className={css.description}>{`${car.description}`}</p>
      </div>

      <div className={css.listsInfo}>
        <img src={checkCircleSvg} alt="select" />
        <img src={calendarSvg} alt="calendar" />
        <img src={carSvg} alt="car" />
        <img src={fuelPumpSvg} alt="fuel pump" />
        <img src={gearSvg} alt="gear" />
      </div>
    </div>
  );
};
