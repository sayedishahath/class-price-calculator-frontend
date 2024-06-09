import axios from 'axios'
export const startGetUsers = ()=>{
    return async(dispatch)=>{
        try{
            const response = await axios.get('http://3.27.30.107:3007/api/user/users-list',{
                headers:{
                    "Authorization":localStorage.getItem('token')
                }
            })

            dispatch(getUsers(response.data));
        }catch(err){
            console.log(err);
        }
    }
}
const getUsers = (users)=>{
    return{
        type:"GET_USERS",
        payload:users
    }
}