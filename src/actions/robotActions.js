import { ROBOT_FAILED, ROBOT_REQUEST, ROBOT_SUCCESS } from "../constants/robotConstants"
import axios from 'axios'

export const requestRobots = () => async (dispatch) => {
    try {
        dispatch({ type: ROBOT_REQUEST })
        const  {data}  = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({
            type: ROBOT_SUCCESS,
            payload: data,
          })
    } catch (error) {
        const message =
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message

        dispatch({
            type: ROBOT_FAILED,
            payload: message,
          })
    }
          
  }


  