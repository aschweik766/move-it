import { createContext } from "react"

const UserContext = createContext({
    authenticated: false,
    user: null,
    exercise: null,
    cardFavorites: null,
    reRender: 0,
    setAuthenticated: (auth) => {},
    setUser: (user) => {},
    setExercise: (exercises) => {},
    setFavorites: (cardFavorites) => {},
    setReRender: (reRender) => {}
})

export default UserContext