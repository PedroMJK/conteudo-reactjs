import MyComponent from "../App15/MyComponent.jsx";

function App(){
    return( 
        <MyComponent/>
        )
};

export default App;

// useState() = Re-reders the component when state value changes.

// useRef() = "use Reference" Does not cause re-renders when it value changes.
//             When you want a component to "remember" some information..
//             but you don´t want that infomation to trigger new renders.

//             1. Accesing/Interacting with DOM elements
//             2. Handling Focus, Animations, and Transitions
//             3. Managing Timers and Intervals.    