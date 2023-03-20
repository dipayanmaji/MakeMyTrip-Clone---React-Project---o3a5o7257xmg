import React, { createContext, useState } from "react";

const MyContext = createContext();

const ContextProvider= (props)=>{
    const [loggedIn, setLoggedIn] = useState(false);
    const loggedInSet= (value)=>{
        setLoggedIn(value);
    }

    const [users, setUsers] = useState({
        'dipayan@gmail.com': {
            name: 'Dipayan Maji',
            password: '123',
        }
    });
    const addUsers= (user)=>{
        setUsers({
            ...users,
            [user.email]: {
                name: user.name,
                password: user.password,
            },
        })
    }

    const [currUser, setCurrUser] = useState({
        name: 'Dipayan Maji',
        email: 'dipayan@gmail.com',
        password: '123',
    });
    const addCurrUser=(user)=>{
        setCurrUser({
            name: user.name,
            email: user.email,
            password: user.password,
        })
    }

    return(
        <MyContext.Provider value={{loggedIn, loggedInSet, users, addUsers, currUser, addCurrUser}}>
            {props.children}
        </MyContext.Provider>
    )
}
export {ContextProvider, MyContext};