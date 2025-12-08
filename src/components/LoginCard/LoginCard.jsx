import React from 'react';
import styles from './LoginCard.module.css'
import { Button } from '../Button'
import { useState } from 'react';
import { login, register } from './authentication'

export function LoginCard (isLogin){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    
    console.log(isLogin)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if(isLogin) {
                await login(email, password);
                alert('Successfully logged in');
            } else {
                await register(email, password);
                alert('Successfully registered')
            }
        } 
        catch (err) {
            console.error("Firebase error:", err);
            alert(err.message);
        }
    }
 



    return(
        <div className={styles.card}>
            <form className={styles.content} onSubmit={handleSubmit}>
                <label className={`${styles.userNameRow} ${styles.row}`}>
                   User name
                    <input type="email" className={styles.field} placeholder='Username' onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label className={`${styles.passwordRow} ${styles.row}`}>
                    Password
                    <input type="password" className={styles.field} placeholder='Password'onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <div className={styles.buttonRow}>
                    <button type="submit">Submit</button>
                    <Button label='Cancel'/>
                </div>
            </form>
        </div>
    )
}

export default LoginCard