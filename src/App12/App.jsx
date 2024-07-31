import MyComponent from "../App12/MyComponent.jsx"
import SizeChange from "../App12/SizeChange.jsx"

function App(){
    return( <>
        <MyComponent/>
        <SizeChange/>
            </>
        )
};

export default App;

// useEffect() = React Hook que diz para o React 
//  fazer algum código quanddo alguma coisa acontecer.

//  useEffect(function, [dependencies]) - O Array é opcional

// 1. useEffect(() => {})             = Runs depois de cada renderização
// 2. useEffect(() => {}, [])         = Runs apenas na montagens e não durante cada renderização 
// 3. useEffect(() => {}, [value])    = Runs na montagem + quando o valor mudar.

// USES
// #1 Event Listeners
// #2 Manipulação de DOM 
// #3 Subscrições (em tempo real)
// #4 Buscando dados de uma API
// #5 Limpar quando um componente é desmontado.