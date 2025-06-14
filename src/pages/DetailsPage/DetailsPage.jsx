import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../constants';
import { Loader } from '../../components/Loader/Loader';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { Header } from '../../components/Header/Header';
import { FormBooking } from '../../components/FormBooking/FormBooking';
import { CarDetails } from '../../components/CarDetails/CarDetails';
import css from './DetailsPage.module.css';

const DetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await api.get(`/cars/${id}`);
        setCar(response.data);
      } catch (err) {
        setError(err);
      }
    }

    fetchCar();
  }, [id]);

  if (!car) return <Loader />;
  if (error) return <NotFoundPage />;

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
        <CarDetails car={car} />
      </div>
    </>
  );
};

export default DetailsPage;
