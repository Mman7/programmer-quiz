export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="dropdown">
          <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
            O
          </label>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Programmer Quiz</a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
