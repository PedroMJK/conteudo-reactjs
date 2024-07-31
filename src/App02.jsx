import List02 from "./List02.jsx"

function App02() {

    const fruits = [ {id: 1, name:"apple", calories: 95}, 
                     {id: 2, name:"orange", calories: 45}, 
                     {id: 3, name:"banana", calories: 105},                        
                     {id: 4, name:"coconut", calories: 159}, 
                     {id: 5, name:"pineapple", calories: 37}];

    const vegetables = [ {id: 6, name:"potatoes", calories: 110}, 
                         {id: 7, name:"celery", calories: 15}, 
                         {id: 8, name:"carrots", calories: 25},                        
                         {id: 9, name:"corn", calories: 63}, 
                         {id: 10, name:"broccoli", calories: 50}];

    return( <>
                {fruits.length > 0 && <List02 items={fruits} category="Fruits"/>}
                {vegetables.length > 0 ? <List02 items={vegetables} category="Vegetables"/> : null}
            </>)
}

export default App02;

// && = Se a primeira condição for verdadeira a segunda acontecerá, do contrário não acontecerá
// && está substituido ? :  - Exemplo abaixo
// {fruits.length > 0 && <List02 items={fruits} category="Fruits"/>}
// {fruits.length > 0 ? <List02 items={fruits : null} category="Fruits"/>}