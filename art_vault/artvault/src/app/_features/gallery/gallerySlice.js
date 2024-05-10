import { createSlice } from '@reduxjs/toolkit'

const initialState = { user: null }

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setUser(state, action) {
            return { user: action.payload }
        },
        removeUser() {
            return initialState
        },
    },
})

//-----Thunks-----//
export const signUp = (username, email, password) => async (dispatch) => {
    const response = await fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(setUser(data))
        return null
    } else if (response.status < 500) {
        const data = await response.json()
        if (data.errors) {
            return data.errors
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const logIn = (email, password) => async (dispatch) => {
    const response = await fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(setUser(data))
        return null
    } else if (response.status < 500) {
        const data = await response.json()
        if (data.errors) {
            return data.errors
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const logOut = () => async (dispatch) => {
    const response = await fetch('', {
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (response.ok) {
        dispatch(removeUser())
    }
}

export const authenticate = () => async (dispatch) => {
    const response = await fetch('', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    if (response.ok) {
        const data = await response.json()
        if (data.errors) {
            return
        }

        dispatch(setUser(data))
    }
}

export const { setUser, removeUser } = sessionSlice.actions
export default sessionSlice.reducer
