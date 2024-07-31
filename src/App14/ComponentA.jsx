import React, { useState, createContext } from 'react';
import ComponentB from "../App14/ComponentB.jsx";

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("John Kartin")

    return( <div className="box">
                <h1>ComponentA</h1>
                <h2>{`Hello ${user}`}</h2>
                <UserContext.Provider value={user}children>
                    <ComponentB user={user}/>
                </UserContext.Provider>
            </div>)
};

export default ComponentA;


//       PROVIDER COMPONENT
// 1. import { createContext } from 'react'.
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//        <Child/>
//    </MyContext.Provider>


//       CONSUMER COMPONENTS
// 1. import  React, { useContext } from 'react';
//    import { MyContext } from './ComponentA';
// 2. const value = UseContext(MyContext);



// ComponentA is the porvider component
// ComponentD is the cosumer component, and we can have more than one