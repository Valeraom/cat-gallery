import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';

import { Paths } from '../../enums';

const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return cn('link', { 'text-accent': isActive });
};

export const Header = () => {
  return (
    <div className="flex items-center justify-evenly border-b-2 py-3 bg-secondary">
      <Link className="flex items-center space-x-4" to={Paths.HOME}>
        <img
          className="w-20 md:w-24"
          src="src/assets/images/logo.png"
          alt="Cat Gallery Logo"
        />

        <p className="hidden sm:block sm:text-lg xl:text-2xl font-medium">
          Cat Gallery
        </p>
      </Link>

      <ul className="flex space-x-6 text-xl">
        <li>
          <NavLink className={getLinkClass} to={Paths.GALLERY}>
            Gallery
          </NavLink>
        </li>

        <li>
          <NavLink className={getLinkClass} to={Paths.FAVOURITES}>
            Favourites
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
