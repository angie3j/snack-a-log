import {useEffect, useState} from "react"
import axios from 'axios';
import Snack from "./Snack"

function Snacks() {
    const URL = process.env.REACT_APP_API_URL;
    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        axios
        .get(`${URL}/snacks`)
        .then((response) => {
            setTransactions(response.data)
        })
        .catch((e) => console.log("catch", e))
}, [URL]);

    const snacksDisplay = snacks.map((snack, id) => {
        return (
            <Snack 
                snack={snack}
                id={id}
                key={id}
            />
        )
    })

    return (

        <div>
            { snacksDisplay }
        </div>
    )


}