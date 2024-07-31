import PropTypes from "prop-types"

function Student(props) { // Props será um objeto javascript
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>IsFather: {props.isFather ?  "Yes" : "No"}</p>
        </div>
    );
}

// PropTypes -Define o tipo de variável que será inserido
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isFather: PropTypes.bool,
}

// DefaultProps
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isFather: false
}
export default Student;