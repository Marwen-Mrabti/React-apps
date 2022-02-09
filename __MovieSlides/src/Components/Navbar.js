//styling
import './Navbar.css';

// MUI components
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

//local components

const Navbar = ({ movies, parentCallback }) => {
  const moviesNames = movies.map((movie) => movie.name);

  return (
    <div className="mainNavbar">

      <div className="nav">
        <button className="nav-btn">
          <i className="fa fa-bars"></i>
        </button>
        <h1 className="main-logo">movie4U</h1>
      </div>

      <Autocomplete
        onChange={(event, value) => {
          event.preventDefault();
          parentCallback(value);
        }} // prints the selected value
        disablePortal
        id="combo-box-demo"
        options={moviesNames}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
};

export default Navbar;
