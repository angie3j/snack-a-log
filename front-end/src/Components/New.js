import {useState, useEffect} from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"

const NewSnack = () => {
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    
    const[snack, setSnack] = useState({
        name: "",
        image: "",
        fiber: 0,
        protein: 0,
        added_sugar: 0
    })

    const handleTextChange = (event) => {
        console.log(snack)
        setSnack({...snack, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`${URL}/snacks`, snack).then(() =>{
         navigate('/snacks')
        })
    }
    }

    const addSnack = [newSnack] => {
        axios.post(`${URL}/snacks`, newSnack)
        .then(() => {
            navigate(`/snack`)
        })
    }
    
}