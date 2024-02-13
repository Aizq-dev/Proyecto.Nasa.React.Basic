import "./Header.css"
import SelectAPI from "../SelectAPI/SelectAPI";

const Header = () => {

  return (
    <header className="header">
      <div className="welcome">
        <img src="NASA_logo.svg.png" className="nasa-icon" />
        <h1>Bienvenido a la foto diaria de la Nasa</h1>
        <SelectAPI/>
      </div>
    </header>
  );
};

export default Header;
