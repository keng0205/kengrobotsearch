
import { Component,useEffect,useState } from "react"
import CardList from "../components/CardList"
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { requestRobots} from "../actions/robotActions"



const App = () => {
    const [searchField,setSearchField] =useState('')
    const dispatch = useDispatch()
    const robotsList = useSelector((state) => state.robotsList)
    const { loading, error, robots } = robotsList

    useEffect(() => {
     dispatch(requestRobots())}, 
     [dispatch])

    const onSearchChange =(event)=>{
        setSearchField(event.target.value)
    }

    return (
        
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                { loading 
                ? <h1>Loading</h1> 
                :<CardList robots={robots.filter(robot => {return robot.name.toLowerCase().includes(searchField.toLowerCase());})} />    
                }
                </Scroll>
         </div>)
}

export default App
