import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (
    <div className="wrapper">
      <div className="card">
        <div>
          <p>
            <img src={snack.image} alt="Snack" />
          </p>

          <p>
            <Link style={{ color: "#66A3A3" }} to={`/snacks/${snack.id}`}>
              {snack.name}
            </Link>
          </p>
          <p className="favorite">
            {snack.is_healthy ? <span>♥</span> : <span>♡</span>}
          </p>
        </div>
      </div>
    </div>
    //   <tr>

    //     <td>
    //       <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
    //     </td>

    //   </tr>
  );
}

export default Snack;
