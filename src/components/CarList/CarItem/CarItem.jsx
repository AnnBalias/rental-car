import { Link } from 'react-router-dom';
import css from './CarItem.module.css';
import {
  addressFormat,
  carTypeFormat,
  mileageFormat,
} from '../../../utils/formatData';

export const CarItem = (car) => {
  const addressArr = addressFormat(car.address);
  const carType = carTypeFormat(car.type);
  const mileage = mileageFormat(car.mileage);

  return (
    <div className={css.carItem}>
      <img
        src={car.img}
        alt={`${car.brand} ${car.model}, ${car.year}`}
        className={css.carImg}
      />
      <div className={css.textBox}>
        <div className={css.titleBox}>
          <p className={css.title}>
            {`${car.brand} `}
            <span className={css.titleSpan}>{`${car.model}, `}</span>
            {`${car.year}`}
          </p>
          <p className={css.title}>{`$${car.rentalPrice}`}</p>
        </div>
        <div className={css.subtitleBox}>
          <p className={css.subtitle}>{`${addressArr[1]}`}</p>
          <p className={css.subtitle}>{`${addressArr[2]}`}</p>
          <p className={css.subtitle}>{`${car.rentalCompany}`}</p>
          <p className={css.subtitle}>{`${carType}`}</p>
          <p className={css.subtitle}>{`${mileage} km`}</p>
        </div>
      </div>
      <Link to={`/catalog/${car.id}`} className={css.readMore}>
        Read more
      </Link>
    </div>
  );
};
