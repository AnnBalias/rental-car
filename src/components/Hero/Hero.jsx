import { Link } from 'react-router-dom';
import css from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={css.hero}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <h2 className={css.subtitle}>
        Reliable and budget-friendly rentals for any journey
      </h2>
      <Link to="/catalog" className={css.heroLink}>
        View Catalog
      </Link>
    </div>
  );
};
