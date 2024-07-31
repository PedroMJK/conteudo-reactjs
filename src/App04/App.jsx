import Counter from "../App04/Counter.jsx"

function App() {
    return(<>
            <Counter/>
    </>)
};

export default App;

// Reatc Hook = É uma função especial que permite os componentes funcionnais
//              usarem os recursos do  react sem escrever class components (react v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback and more...)
//
// useState() = É um react hook que permite a criação de uma variável com estado e um 
//              setter function para atualizar sem valor em um DOM virtual.
            // Usando o useState() podemos criar não apenas uma variável mas uma variável com 
            /// estado, quando você atualiza essa variável que muda, será refletido no DOM.
