import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectSearchParams,
  selectPagination,
  selectIsLoading,
} from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';
import { setPage } from '../../redux/slice';
import { Loader } from '../Loader/Loader';
import { CarItem } from './CarItem/CarItem';
import css from './CarList.module.css';

export const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const { brand, price, mileage } = useSelector(selectSearchParams);
  const { page, totalPages } = useSelector(selectPagination);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCars({ page, brand, price, mileage }));
  }, [dispatch, page]);

  const handleMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : Array.isArray(cars) && cars.length === 0 ? (
        <p className={css.notFound}>No cars available</p>
      ) : (
        <ul className={css.carList}>
          {(Array.isArray(cars) ? cars : []).map((car) => (
            <CarItem key={car.id} {...car} />
          ))}
        </ul>
      )}
      {totalPages > page && (
        <button onClick={handleMore} className={css.loadMore}>
          Load More
        </button>
      )}
    </>
  );
};
