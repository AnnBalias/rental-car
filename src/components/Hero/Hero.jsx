import { useNavigate } from 'react-router-dom';
import css from './Hero.module.css';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className={css.hero}>
      <div className={css.textBox}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <h2 className={css.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <button onClick={() => navigate('/catalog')} className={css.heroBtn}>
          View Catalog
        </button>
      </div>
    </div>
  );
};
