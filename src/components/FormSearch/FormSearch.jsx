import Select from 'react-select';
import css from './FormSearch.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { api } from '../../constants';
import {
  setBrand,
  setMileageFrom,
  setMileageTo,
  setPage,
  setPrice,
} from '../../redux/slice';
import { selectPagination, selectSearchParams } from '../../redux/selectors';
import { fetchCars } from '../../redux/operations';
import { selectStyle } from '../../assets/selectStyle';

export const FormSearch = () => {
  const [brands, setbrands] = useState([]);
  const dispatch = useDispatch();
  const { brand, price, mileage } = useSelector(selectSearchParams);
  const { page } = useSelector(selectPagination);

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
    dispatch(setPage(1));
    dispatch(fetchCars({ page, brand, price, mileage }));
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          Car brand
          <Select
            options={brandOptions}
            value={brandOptions.find((option) => option.value === brand)}
            onChange={(selected) => dispatch(setBrand(selected.value))}
            placeholder="Select brand"
            styles={selectStyle}
          />
        </label>
        <label>
          Price/ 1 hour
          <Select
            options={priceOptions}
            value={priceOptions.find((option) => option.value === price)}
            onChange={(selected) => dispatch(setPrice(selected.value))}
            placeholder="Select price"
            styles={selectStyle}
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
