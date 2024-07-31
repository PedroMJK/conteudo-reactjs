import React, { useState } from 'react';

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    
    function handleAddFood(){
        
        const newFood = document.getElementById("foodInput").value; 
        document.getElementById("foodInput").value = "";

        setFoods(f => [... f, newFood])
    }

    function handleRemoveFood(index){  // _ = o parâmetro será ignorado
        setFoods(foods.filter((_, i) => i !== index)) // i será para diferenciar do index passado como parâmetro da função handleRemoveFood
    };

    return( <div>
                <h2>List of Food</h2>
                <ul>
                    {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)} >
                        {food}
                    </li>)}
                </ul>
                <input type="text" id='foodInput' placeholder='Enter food name' />
                <button onClick={handleAddFood}>Add Food</button>
            </div>)
};

export default MyComponent;