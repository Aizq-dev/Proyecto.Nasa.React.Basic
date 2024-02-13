import "./Input.css"

const Input = ({ funcion, defaultValue }) => {
  return (
    <input type="date" onChange={funcion} defaultValue={defaultValue} />
  )
}

export default Input