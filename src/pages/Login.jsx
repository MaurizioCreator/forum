import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login  = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true');
        console.log("{'login':'user2','password':'123456'}");
    }

    return (
        <div>
            <h1>Authorization</h1>
            <form onSubmit={login}>
                <MyInput
                    type="text"
                    placeholder="Input login"
                />
                <MyInput
                    type="password"
                    placeholder="Input password"
                />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;