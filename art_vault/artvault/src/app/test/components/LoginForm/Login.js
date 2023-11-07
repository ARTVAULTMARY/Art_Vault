'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, removeUser } from '@/app/redux/slices/sessionSlice' //Reducer actions
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
        <div className="flex h-screen w-full justify-center items-center">
            <div className="flex flex-col w-11/12 sm:w-9/12 md:w-9/12 xl:w-3/6 max-w-screen-sm m-20 bg-stone-100 rounded">
                <form className="flex flex-col items-center m-8">
                    <LoginInputs props={{ setEmail, setPassword }} />
                    <div className="flex flex-row justify-between w-11/12 mt-3">
                        <button
                            onClick={handleLogin}
                            className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 border border-red-500 hover:border-transparent rounded"
                        >
                            Login
                        </button>
                        <button
                            onClick={handleClick}
                            className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 border border-red-500 hover:border-transparent rounded"
                        >
                            User Info
                        </button>
                        <button
                            onClick={handleLogout}
                            className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 border border-red-500 hover:border-transparent rounded"
                        >
                            Logout
                        </button>
                    </div>
                </form>
                {!isRevealed ? (
                    <div className="flex flex-column justify-center w-full">
                        <div className="flex flex-col mb-8 items-center">
                            <h1 className="text-black mb-2 font-bold">
                                User Information:
                            </h1>
                            <p className="text-black">Email: {user?.email}</p>
                            <p className="text-black">
                                Password: {user?.password}
                            </p>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}
