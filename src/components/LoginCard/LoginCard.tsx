import React from 'react';
import styles from './LoginCard.module.css'
import { Button } from '../Button/Button'
import { useState } from 'react';
import { login, register } from './authentication'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogIn, LoginFail } from '../../store/authSlice';
import type { TLoginCard } from './TLoginCard';
import { useAppDispatch } from '../../store/hooks';

export function LoginCard (isLogin: TLoginCard){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement> ) => {
        e.preventDefault();

        try {
            if(isLogin) {
                await login(email, password);
                dispatch(LogIn())
                navigate("/OrderPage");            
            } else {
                await register(email, password);
                alert('Successfully registered');
                navigate("/OrderPage/");  
            }
        } 
        catch (err) {
            dispatch(LoginFail('err'))
        }
    }
 



    return(
        <div className={styles.card}>
            <form className={styles.content} >
                <label className={`${styles.userNameRow} ${styles.row}`}>
                   User name
                    <input type="email" className={styles.field} placeholder='Username' onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label className={`${styles.passwordRow} ${styles.row}`}>
                    Password
                    <input type="password" className={styles.field} placeholder='Password'onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <div className={styles.buttonRow}>
                    <Button label="Submit" onClick={handleSubmit} type={'button'} disabled={false}/>
                    <Button label='Cancel' type={'button'} disabled={false}/>
                </div>
            </form>
        </div>
    )
}

export default LoginCard