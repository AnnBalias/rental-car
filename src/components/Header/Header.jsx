import { Navigation } from '../Navigation/Navigation.jsx';
import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.header}>
      <p className={css.logo}>
        Rental<span className={css.logoSpan}>Car</span>
      </p>
      <Navigation />
    </div>
  );
};
