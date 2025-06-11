import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { api } from '../../constants';
import { useEffect, useState } from 'react';
import css from './DetailsPage.module.css';
import { FormBooking } from '../../components/FormBooking/FormBooking';
import { CarInfo } from '../../components/CarInfo/CarInfo';

export const DetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await api.get(`/cars/${id}`);
        setCar(response.data);
      } catch (err) {
        setError('Не вдалося завантажити авто');
        console.error(err);
      }
    }

    fetchCar();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!car) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className={css.wrapper}>
        <div className={css.formBox}>
          <img
            src={car.img}
            alt={`${car.brand} ${car.model}, ${car.year}`}
            className={css.carImg}
          />
          <FormBooking />
        </div>
        <CarInfo />
      </div>
    </>
  );
};
