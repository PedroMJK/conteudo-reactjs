

function Button_03() {

    const handleClick = (e) => e.target.textContent = "OUCH! 😯"
                            // e = event
    return(
        <button onDoubleClick={(e) => handleClick(e)} >Click me 😁</button>
    );
};

export default Button_03;



// // Condições em uma função
// function Button_03() {

//     let count = 0;

//     const handleClick = (name) => {
//         if(count < 3) {
//             count++;
//             console.log(`${name} you clicked me ${count} time/s`)
//         }
//         else {
//             console.log(`${name} stop clicking me
//             `)
//         }
//     };


//     return(
//         <button onClick={() => handleClick("Pedro")} >Click me 😁</button>
//     );
// };

// export default Button_03;




// Enviando argumentos para uma função
// function Button_03() {

//     const handleClick = () => console.log("Ouch!");

//     const handleClick2 = (name) => console.log(`${name} stop clicking me`)

//     return(
//         <button onClick={() => handleClick2("Pedro")} >Click me 😁</button>
//     );
// };

// export default Button_03;