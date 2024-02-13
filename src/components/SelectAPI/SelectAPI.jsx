import { options } from "../../utils/selectionOptions";
import Option from "../Option/Option";
import "./SelectAPI.css";
import { useNavigate } from "react-router-dom";

const SelectAPI = () => {
  const navigate = useNavigate();

  const handleSelectChange = (ev) => {
    navigate(`/${ev.target.value}`);
  };

  return (
    <div className="select">
      <p>Selecciona para ver imagenes de APOD o del Rover de marte</p>
      <select onChange={handleSelectChange}>
        {options.map((option) => <Option key={option} value={option}/>)}
      </select>
    </div>
  );
};

export default SelectAPI;
