import { Header } from '../../components/Header/Header';
import { FormSearch } from '../../components/FormSearch/FormSearch';
import { CarList } from '../../components/CarList/CarList';
import css from './CatalogPage.module.css';

export const CatalogPage = () => {
  return (
    <>
      <Header />
      <div className={css.wraper}>
        <FormSearch />
        <CarList />
      </div>
    </>
  );
};
