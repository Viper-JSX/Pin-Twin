import "./css/main.css";

import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

import { useDispatch, useSelector } from 'react-redux';
import { changeConversationsSearchTerm, changePinsSearchTerm, changePinsSortCriteria, changeUserPinsSearchTerm, changeUserPinsSortCriteria, closeAuthorizationWindow, createPin, deletePin, editPin, login, logout, openLoginWindow, openSignUpWindow, register } from "./redux/action_creators";

import { users } from "./various_things/users";

function App(){
    const dispatch = useDispatch();

    /*---User---*/
    function handleLogin({ event, loginData }){
        event.preventDefault();
        console.log(loginData)
        dispatch(login(loginData))
    }

    function handleSignUp({ event, signUpData }){
        event.preventDefault();
        console.log(signUpData)
        dispatch(register(signUpData));
    }

    function handleLogout(){
        dispatch(logout());
    }

    function handlePinCreate(newPin){
        dispatch(createPin({ newPin }));
    }

    function handlePinEdit(newPinData){
        dispatch(editPin({ newPinData } ));
    }

    function handlePinDelete(pinId){
        dispatch(deletePin({ pinId }));
    }


    /*---Search Term Handling---*/
    function handlePinsSearchTermChange(event){
        dispatch(changePinsSearchTerm({term: event.target.value}));
    }

    function handleUserPinsSearchTermChange(event){
        dispatch(changeUserPinsSearchTerm({ term: event.target.value }));
    }

    function handleConversationsSearchTermChange(event){
        dispatch(changeConversationsSearchTerm({ term: event.target.value }));
    }

    /*---Sort criteria handling*/
    function handlePinsSortCriteriaChange(criteria){
        dispatch(changePinsSortCriteria({ criteria }));
    }

    function handleUserPinsSortCriteriaChange(criteria){
        dispatch(changeUserPinsSortCriteria({ criteria }));
    }


    /*---Authorization windows---*/
    function handleLoginWindowOpen(){
        dispatch(openLoginWindow());
    }

    function handleSignUpWindowOpen(){
        dispatch(openSignUpWindow());
    }

    function handleAuthorizationWindowClose(){
        dispatch(closeAuthorizationWindow());
    }
handleSignUpWindowOpen();
    return(
        <div className="App">
            <Layout
                handlePinsSearchTermChange={handlePinsSearchTermChange}


                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
                handleAuthorizationWindowClose={handleAuthorizationWindowClose}
            />
        </div>
    );
}

export default App;