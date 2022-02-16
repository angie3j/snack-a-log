
import NewForm from "../Components/New"; 

function Form() {

    return (
        <div className="Form">
            <p
                style={{ color: "#ff00ff" }}
             >
                Create a New Item</p>
            <NewForm />
        </div>

    )
}

export default Form;