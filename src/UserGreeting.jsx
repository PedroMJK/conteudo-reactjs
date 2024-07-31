// Conditional Rending = Perminte controlar o que será renderizado na aplicação comm base em certas condições, Podendo ocultar ou alterar componentes.

import PropTypes from "prop-types";

function UserGreeting(props) {
  
    if(props.isLoggedIn) {
        return <h2 className="welcome-message">Welcome {props.username}</h2>
    }
    else {
        return <h2 className="login-prompt">Please log in to continue</h2>
    }
}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting;


        // Operador Ternário    =   "  ? :  "
// function UserGreeting(props) {

//      const welcomeMessage = <h2>Welcome {props.username}</h2> 

//      const loginPropmt = <h2>Please log in to continue</h2>

//     if(props.isLoggedIn ? welcomeMessage : loginPropmt)
//                            
// 
// }
