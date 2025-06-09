import { Link } from 'react-router-dom';
import css from './Hero.module.css';

export const Hero = () => {
  return (
    <>
      <p className={css.p}>Hero</p>
      <Link to="/">Home</Link>
    </>
  );
};
