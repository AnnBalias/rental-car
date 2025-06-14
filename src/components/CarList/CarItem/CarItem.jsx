import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addressFormat,
  carTypeFormat,
  mileageFormat,
} from '../../../utils/formatData';
import { selectIsFavorite } from '../../../redux/selectors';
import { toggleFavorite } from '../../../redux/slice';
import heartDefaultSvg from '../../../assets/icons/heart-default.svg';
import heartActiveSvg from '../../../assets/icons/heart-active.svg';
import css from './CarItem.module.css';

export const CarItem = (car) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFavorite = useSelector(selectIsFavorite);
  const addressArr = addressFormat(car.address);
  const carType = carTypeFormat(car.type);
  const mileage = mileageFormat(car.mileage);
  const FavoriteСheck = isFavorite.includes(car.id);

  const handLike = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={css.carItem}>
      <button onClick={() => handLike(car.id)} className={css.heartBtn}>
        {FavoriteСheck ? (
          <img src={heartActiveSvg} alt="select" className={css.heartSvg} />
        ) : (
          <img src={heartDefaultSvg} alt="select" className={css.heartSvg} />
        )}
      </button>
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
      <button
        onClick={() => navigate(`/catalog/${car.id}`)}
        className={css.readMore}
      >
        Read more
      </button>
    </div>
  );
};
