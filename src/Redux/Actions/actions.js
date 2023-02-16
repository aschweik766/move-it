import {AUTH} from "../Constants/actionTypes.js"
import * as api from "../../api/index"


export const loadUser = () => async (dispatch)=>{
    const localUser = JSON.parse(localStorage.getItem("user_info"))
    console.log(localUser + ' localuser');
    if(localUser){
        dispatch({type: AUTH, data: localUser})
    }
}

export const signin = (data2, navigate) => async (dispatch) =>{
    try{
        const {data} = await api.signIn(data2)

        dispatch({type: AUTH, data})
        navigate("/")
    }catch(err){
        console.log(err);
    }
}

export const signinGoogle = (accessToken, navigate) => async (dispatch)=>{
    try{
        // login user
        const {data} = await api.signInGoogle(accessToken)

        dispatch({type : AUTH, data})
        navigate("/")
    }catch(err){
        console.log(err)
    }
}

export const signup = (formData, navigate) => async (dispatch)=>{
    try{
        // signup user
        const {data} = await api.signUp(formData)

        dispatch({type : AUTH, data})
        navigate("/")
    }catch(err){
        console.log(err)
    }
}

export const signupGoogle = (accessToken, navigate) => async (dispatch)=>{
    try{
        // signup user

        const {data} = await api.signUpGoogle(accessToken)

        dispatch({type : AUTH, data})
        navigate("/")
    }catch(err){
        console.log(err)
    }
}