import Select from 'react-select';
import css from './FormSearch.module.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { api } from '../../constants';
import {
  setBrand,
  setMileageFrom,
  setMileageTo,
  setPrice,
} from '../../redux/slice';

export const FormSearch = () => {
  const [brands, setbrands] = useState([]);
  const dispatch = useDispatch();
  // const brands = useSelector(selectBrands);

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
  };

  return (
    <>
      <p className={css.p}>FormSearch</p>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="brand">
          Car brand
          <Select
            options={brandOptions}
            onChange={(selected) => dispatch(setBrand(selected.value))}
            placeholder="Select brand"
            isSearchable
          />
        </label>

        <label htmlFor="price">
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
            type="text"
            name="mileageFrom"
            placeholder="From"
            value={brands.langth || ''}
            onChange={(event) => dispatch(setMileageFrom(event.target.value))}
            setMileageTo
          />
          <input
            type="text"
            name="mileageTo"
            placeholder="To"
            value={brands.langth || ''}
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
