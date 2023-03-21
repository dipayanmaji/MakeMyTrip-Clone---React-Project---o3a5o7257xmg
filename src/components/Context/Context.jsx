import React, { createContext, useState } from "react";

const MyContext = createContext();

const ContextProvider= (props)=>{
    const [intoHome, setIntoHome] = useState(false);
    const onHomePage= (value)=>{
        setIntoHome(value);
    }

    const [loggedIn, setLoggedIn] = useState(false);
    const loggedInSetter= (value)=>{
        setLoggedIn(value);
    }

    const [users, setUsers] = useState({
        'dipayan@gmail.com': {
            name: 'Dipayan',
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
        name: '',
        email: '',
        password: '',
    });
    const addCurrUser=(user)=>{
        setCurrUser({
            name: user.name,
            email: user.email,
            password: user.password,
        })
    }

    const [portalView, setPortalView] = useState(false);
    const displayPortal=(value)=>{
        setPortalView(value);
    }

    const [price, putPrice] = useState(0);
    const setPrice=(value)=>{
        putPrice(value);
    }

    const value= {
        intoHome,
        onHomePage,
        loggedIn,
        loggedInSetter,
        users,
        addUsers,
        currUser,
        addCurrUser,
        portalView,
        displayPortal,
        price,
        setPrice,
    }
    return(
        <MyContext.Provider value={{...value}}>
            {props.children}
        </MyContext.Provider>
    )
}
export {ContextProvider, MyContext};