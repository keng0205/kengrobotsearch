import {  ROBOT_FAILED, ROBOT_REQUEST, ROBOT_SUCCESS } from "../constants/robotConstants"

export const robotsListReducer=(state={},action)=>{
    switch(action.type)
    {
        case ROBOT_REQUEST:
            return {loading:true}
        case ROBOT_SUCCESS:
            return{loading:false,robots:action.payload}
        case ROBOT_FAILED:
            return{loading:false,error:action.payload}
    
        default:
            return state
    }

}
