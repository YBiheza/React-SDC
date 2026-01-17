import React from "react";
import styles from './LoginSection.module.css'
import { LoginCard } from "../LoginCard/LoginCard";
import { useState } from 'react';


function LoginSection () {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <p className={styles.title}>
                    {isLogin ? "Log In" : "Register"}
                </p>
                <LoginCard isLogin={isLogin}/>
                <p onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Create an account" : "Already have an account?"}
                </p>
            </div>
        </main>
    )
}
export default LoginSection