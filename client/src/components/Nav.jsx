import Search from './Search.jsx';

var Nav = ({handleSearchInputChange}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleSearchInputChange={handleSearchInputChange}/>
    </div>
  </nav>
);

export default Nav;
// window.Nav = Nav;
// export {Nav};