import "./inputDate.css"
 

export const InputDate = ({setDate,value}) => {
    
    const handleInput = (e) => {
       
        const newDate = e.target.value;
        setDate(newDate);
      };
     
  return (
    
    <input type="date" defaultValue={value} onChange={handleInput} />
  )
}

