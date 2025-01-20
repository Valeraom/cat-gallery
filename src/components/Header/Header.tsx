export const Header = () => {
  return (
    <div className="flex items-center justify-evenly border-b-2 py-3">
      <a href="" className="flex items-center space-x-4">
        <img
          className="w-24"
          src="src/assets/images/logo.png"
          alt="Cat Gallery Logo"
        />

        <p className="text-2xl font-medium">Cat Gallery</p>
      </a>

      <ul className="flex space-x-6 text-xl">
        <li>
          <a className="link" href="">
            Gallery
          </a>
        </li>

        <li>
          <a className="link" href="">
            Favorites
          </a>
        </li>
      </ul>
    </div>
  );
};
