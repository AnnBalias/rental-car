import { Link } from 'react-router-dom';
import css from './CarItem.module.css';

export const CarItem = (car) => {
  const addressStr = car.address;
  const addressArr = addressStr.split(', ');

  const carTypeUpp = car.type;
  const carTypeLow =
    carTypeUpp.charAt(0).toUpperCase() + carTypeUpp.slice(1).toLowerCase();

  const mileageNum = car.mileage;
  const mileageFormat = mileageNum.toLocaleString('uk-UA');

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
          <p className={css.subtitle}>{`${carTypeLow}`}</p>
          <p className={css.subtitle}>{`${mileageFormat} km`}</p>
        </div>
      </div>
      <Link to={`/catalog/${car.id}`} className={css.readMore}>
        Read more
      </Link>
    </div>
  );
};
