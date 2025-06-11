import { useDispatch, useSelector } from 'react-redux';
import css from './CarList.module.css';
import {
  selectCars,
  selectPagination,
  selectSearchParams,
} from '../../redux/selectors';
import { CarItem } from './CarItem/CarItem';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';
import { setPage } from '../../redux/slice';

export const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const { page, totalPages } = useSelector(selectPagination);
  const { brand, price, mileage } = useSelector(selectSearchParams);

  useEffect(() => {
    dispatch(fetchCars({ page, brand, price, mileage }));
  }, [dispatch, page, brand, price, mileage]);

  console.log(cars);

  const handleMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <>
      {Array.isArray(cars) && cars.length === 0 ? (
        <p className={css.notFound}>No cars available</p>
      ) : (
        <ul className={css.carList}>
          {(Array.isArray(cars) ? cars : []).map((car) => (
            <CarItem key={car.id} {...car} />
          ))}
        </ul>
      )}
      {totalPages > page && <button onClick={handleMore}>Load More</button>}
    </>
  );
};
