import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function ShowDetails() {
    const URL = process.env.REACT_APP_API_URL;
    const [snack, setSnack] = useState({});
    const navigate = useNavigate();
    let { id } = useParams();
  
    useEffect(() => {
        axios
        .get(`${URL}/snacks${id}`)
        .then((response) =>
        setSnack(response.data)
        )
        .catch((error) =>
            console.warn(error));
    }, [URL, id]);

    const handleDelete = () => {
        axios
          .delete(`${URL}/snacks/${id}`)
          .then(() => navigate(`/snacks`))
          .catch((error) => console.warn(error));
      };
    

    return (

        <div className="showNavigation">

<h4>{snack.image}</h4>

<h4>{snack.name} </h4>

<h3>{snack.is_healthy}</h3>

        <div>
          {" "}
          <Link to={`/snacks`}>
            <button 
            style={{ 
                color: "white",
                 }}>Back</button>
          </Link>
        </div>
        <br />

        <div>
          <div>
            {" "}
            <button
              style={{ color: "white" }}
              type="button"
              className="button"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
          <br />

        </div>
        <div>
          <div>
            {" "}
            <Link to={`/snacks/${id}/edit`}>
              <button
                style={{ 
                    color: "white"
                }}
                type="button"
                className="button"
              >
                Edit
              </button>
            </Link>
          </div>
          </div>
          </div>
    );
}

export default ShowDetails;