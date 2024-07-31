// import Person from "./Test.jsx"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"


function App() {
 
  return (  // "<> </>" Isso perminte retornar mais de um componente 
    <>  
       {/* <Person></Person> */}

       <Header/>
       <Food/>  
       <Card/>  
       <Button/>  
       <>
          <Student name="Cloves" age={32} isFather={true}/>  
          <Student name="Junior" age={26} isFather={true}/>
          <Student name="Cosme" age={57} isFather={true}/>
          <Student/>
       </>

       <>
          <UserGreeting isLoggedIn={true} username="Pedro"/>
       </>



       <Footer/>  
    </>
  )
}


export default App
// Dentro do return é necessário chaves{} 
///  para escrever códigos em JavaScrit,
///  fora, não é necessário. 

/// npm run dev - Para rodar o app