'use client'

import { useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { setUser, removeUser } from '@/app/_redux/slices/sessionSlice' //Reducer actions
import LoginInputs from './LoginInputs'

//TODO create error handling functions for input fields
export default function Login() {
    const [isRevealed, setIsRevealed] = useState('false')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const user = useSelector((state) => state.session.user)

    const dispatch = useDispatch()

    const userData = {
        email,
        password,
    }

    const handleLogin = (e) => {
        e.preventDefault()
        //TODO dispatch thunk for endpoint testing instead of reducer actions:
        dispatch(setUser(userData))
    }

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(removeUser())
    }

    const handleClick = (e) => {
        e.preventDefault()
        setIsRevealed(!isRevealed)
    }

    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
                <form className="flex flex-col w-2/3">
                    <LoginInputs props={{ setEmail, setPassword }} />
                    <div className="flex flex-row justify-center my-10">
                        <button
                            onClick={handleLogin}
                            className="bg-teak-200 font-semibold py-2 px-8 rounded hover:bg-teak hover:text-white"
                        >
                            Login
                        </button>
                    </div>
                </form>
        </div>
    )
}
