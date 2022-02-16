import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewForm = () => {
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();

    const [snack, setSnack] = useState({
        name: '',
        image: '',
        fiber: 0,
        protein: 0,
        added_sugar: 0,
    })    

    const handleTextChange = (event) => {
          setSnack({ ...snack, [event.target.id]: event.target.value });
        } 

    const addSnack = (newSnack) => {
        axios
          .post(`${URL}/snacks`, newSnack)
          .then(() => {
            navigate(`/snacks`);
          })
          .catch((error) => console.warn(error));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        addSnack(snack);
    //     axios.post(`${URL}/snacks`, snack)
    //     .then(()=>{
    //         navigate('/snacks')
    //     })
      }

    return (
        <div className="NewSnack">
            <h2>Snacks</h2>
            <form 
            action=''
            onSubmit={ handleSubmit }
            onChange={ handleTextChange }>
                <label htmlFor='name'>Name:</label>
                <input id='name' type='text'></input>
                <label htmlFor='image'>Image:</label>
                <input id='image' type='text'></input>
                <label htmlFor='fiber'>Fiber:</label>
                <input id='fiber' type='number'></input>
                <label htmlFor='protein'>Protein:</label>
                <input id='protein' type='number'></input>
                <label htmlFor='added_sugar'>Added Sugar:</label>
                <input id='added_sugar' type='number'></input>
                <input 
                type='submit'
                />
            </form>
        </div>
    );
}

export default NewForm;