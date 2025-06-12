import locationSvg from '../../assets/icons/location-sign.svg';
import checkCircleSvg from '../../assets/icons/check-circle.svg';
import calendarSvg from '../../assets/icons/calendar.svg';
import carSvg from '../../assets/icons/car.svg';
import fuelPumpSvg from '../../assets/icons/fuel-pump.svg';
import gearSvg from '../../assets/icons/gear.svg';
import css from './CarDetails.module.css';
import {
  addressFormat,
  carTypeFormat,
  mileageFormat,
} from '../../utils/formatData';

const listRender = (items) => {
  return items.map((item, index) => (
    <li key={index} className={css.listItem}>
      <img src={checkCircleSvg} alt="select" className={css.detailsSvg} />
      <p className={css.itemText}>{item}</p>
    </li>
  ));
};

export const CarDetails = ({ car }) => {
  const addressArr = addressFormat(car.address);
  const carType = carTypeFormat(car.type);
  const mileage = mileageFormat(car.mileage);
  const AccesFunctionalArr = [...car.accessories, ...car.functionalities];

  return (
    <div className={css.detailsBox}>
      <div className={css.mainInfo}>
        <h2 className={css.title}>
          {`${car.brand} ${car.model}, ${car.year}`}
          <span
            className={css.titleSpan}
          >{`id: ${car.img.split('/').pop().split('-')[0]}`}</span>
        </h2>
        <div className={css.subtitleBox}>
          <div className={css.locationBox}>
            <img src={locationSvg} alt="location" className={css.detailsSvg} />
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
        <div className={css.listBox}>
          <h3 className={css.listTitle}>Rental Conditions:</h3>
          <ul className={css.list}>{listRender(car.rentalConditions)}</ul>
        </div>

        <div className={css.listBox}>
          <h3 className={css.listTitle}>Rental Conditions:</h3>
          <ul className={css.list}>
            <li className={css.listItem}>
              <img
                src={calendarSvg}
                alt="calendar"
                className={css.detailsSvg}
              />
              <p className={css.itemText}>Year: {car.year}</p>
            </li>
            <li className={css.listItem}>
              <img src={carSvg} alt="car" className={css.detailsSvg} />
              <p className={css.itemText}>Type: {carType}</p>
            </li>
            <li className={css.listItem}>
              <img
                src={fuelPumpSvg}
                alt="fuel pump"
                className={css.detailsSvg}
              />
              <p className={css.itemText}>
                Fuel Consumption: {car.fuelConsumption}
              </p>
            </li>
            <li className={css.listItem}>
              <img src={gearSvg} alt="gear" className={css.detailsSvg} />
              <p className={css.itemText}>Engine Size: {car.engineSize}</p>
            </li>
          </ul>
        </div>

        <div className={css.listBox}>
          <h3 className={css.listTitle}>Accessories and functionalities:</h3>
          <ul className={css.list}>{listRender(AccesFunctionalArr)}</ul>
        </div>
      </div>
    </div>
  );
};
