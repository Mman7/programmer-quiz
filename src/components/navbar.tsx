import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="dropdown">
          <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
            <FontAwesomeIcon icon={faBars} />
          </label>
        </div>
      </div>
      <div className="navbar-center">
        <h1 className="text-xl font-medium text-black">Programmer Quiz</h1>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
