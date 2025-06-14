import { useDispatch, useSelector } from 'react-redux';
import { selectSearchParams, selectPagination } from '../../redux/selectors';
import { useState, useEffect } from 'react';
import { api } from '../../constants';
import { fetchCars } from '../../redux/operations';
import {
  setBrand,
  setMileageFrom,
  setMileageTo,
  setPage,
  setPrice,
} from '../../redux/slice';
import Select from 'react-select';
import { selectStyle } from '../../assets/selectStyle';
import { ToPriceOptions } from './PriceOptions/PriceOptions';
import css from './FormSearch.module.css';

export const FormSearch = () => {
  const dispatch = useDispatch();
  const { brand, price, mileage } = useSelector(selectSearchParams);
  const { page } = useSelector(selectPagination);
  const [brands, setbrands] = useState([]);

  useEffect(() => {
    async function fetchBrands() {
      const response = await api.get('/brands');
      setbrands(response.data);
    }

    fetchBrands();
  }, []);

  const brandOptionsArr = brands.map((brand) => ({
    value: brand,
    label: brand,
  }));
  const brandOptions = [
    ...brandOptionsArr,
    {
      value: 'reset',
      label: 'All brands',
    },
  ];

  const priceOptions = Array.from({ length: 6 }, (_, i) => {
    const value = 30 + i * 10;
    return { value: value.toString(), label: `${value}`, prefix: 'To $' };
  });

  const mileageValue = (event, type) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      if (type === 'from') {
        dispatch(setMileageFrom(value));
      } else if (type === 'to') {
        dispatch(setMileageTo(value));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPage(1));
    dispatch(fetchCars({ page, brand, price, mileage }));
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.formLabel}>
          Car brand
          <Select
            options={brandOptions}
            value={brandOptions.find((option) => option.value === brand)}
            onChange={(selected) => dispatch(setBrand(selected.value))}
            placeholder="Choose a brand"
            styles={selectStyle}
          />
        </label>
        <label className={css.formLabel}>
          Price/ 1 hour
          <Select
            options={priceOptions}
            value={priceOptions.find((option) => option.value === price)}
            onChange={(selected) => dispatch(setPrice(selected.value))}
            placeholder="Choose a price"
            styles={selectStyle}
            components={{ SingleValue: ToPriceOptions }}
          />
        </label>
        <fieldset className={css.mileageGroup}>
          <legend className={css.formLabel}>Car mileage / km</legend>
          <div className={css.inputBoxFrom}>
            <p className={css.inputText}>From </p>
            <input
              className={css.definput}
              type="text"
              name="mileageFrom"
              value={mileage.from}
              inputMode="numeric"
              pattern="[0-9]*"
              onChange={(e) => mileageValue(e, 'from')}
            />
          </div>
          <div className={css.inputBoxTo}>
            <p className={css.inputText}>To </p>
            <input
              className={css.definput}
              type="number"
              name="mileageTo"
              value={mileage.to}
              inputMode="numeric"
              pattern="[0-9]*"
              onChange={(e) => mileageValue(e, 'to')}
            />
          </div>
        </fieldset>
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
    </>
  );
};
