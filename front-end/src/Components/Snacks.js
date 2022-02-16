import {useEffect, useState} from "react"
import axios from 'axios';
import Snack from "./Snack"

function Snacks() {
    const URL = process.env.REACT_APP_API_URL;
    const [snacks, setSnacks] = useState({ payload:[] });

    useEffect(() => {
        axios
        .get(`${URL}/snacks`)
        .then((response) => {
            setSnacks(response.data)
        })
        .catch((e) => console.log("catch", e))
}, [URL]);

    console.log(snacks)
    
    return (

        <div>
            { snacks.payload.map((snack) => {
                return (
                <Snack 
                    snack={snack}
                    id={snack.id}
                    key={snack.id}
                />
            )
            })
    }
        </div>
    )
}

export default Snacks;