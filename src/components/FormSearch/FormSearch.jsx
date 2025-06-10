import Select from 'react-select';
import css from './FormSearch.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { api } from '../../constants';
import {
  setBrand,
  setMileageFrom,
  setMileageTo,
  setPrice,
} from '../../redux/slice';
import { selectSearchParams } from '../../redux/selectors';
import { fetchCars } from '../../redux/operations';

export const FormSearch = () => {
  const [brands, setbrands] = useState([]);
  const dispatch = useDispatch();
  const { brand, price, mileage } = useSelector(selectSearchParams);

  useEffect(() => {
    async function fetchBrands() {
      const response = await api.get('/brands');
      setbrands(response.data);
    }

    fetchBrands();
  }, []);

  const brandOptions = brands.map((brand) => ({
    value: brand,
    label: brand,
  }));

  const priceOptions = Array.from({ length: 6 }, (_, i) => {
    const value = 30 + i * 10;
    return { value: value.toString(), label: `$${value}` };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCars({ brand, price, mileage }));
  };

  return (
    <>
      <p className={css.p}>FormSearch</p>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          Car brand
          <Select
            options={brandOptions}
            onChange={(selected) => dispatch(setBrand(selected.value))}
            placeholder="Select brand"
            isSearchable
          />
        </label>
        <label>
          Price/ 1 hour
          <Select
            options={priceOptions}
            onChange={(selected) => dispatch(setPrice(selected.value))}
            placeholder="Select price"
            isSearchable
          />
        </label>
        <fieldset className={css.mileageGroup}>
          <legend>Car mileage / km</legend>
          <input
            type="number"
            name="mileageFrom"
            placeholder="From"
            value={mileage.from}
            onChange={(event) => dispatch(setMileageFrom(event.target.value))}
          />
          <input
            type="number"
            name="mileageTo"
            placeholder="To"
            value={mileage.to}
            onChange={(event) => dispatch(setMileageTo(event.target.value))}
          />
        </fieldset>
        <button type="submit" className={css.submitBtn}>
          Search
        </button>
      </form>
    </>
  );
};
