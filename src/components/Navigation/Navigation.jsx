import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.navActive);
};

export const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" end className={buildLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
};
