
import React from 'react'

const Card=(props)=>{
    const {name,id,email}=props;
    return((
   
    <div className='tc bg-light-pink dib br3 pa3 ma2 grow bw2 shadow5'>
        <img alt='robots' src={`https://robohash.org/${id}12?set=set4`}/>
        <div>
            <h2>
                {name}
            </h2>
            <p>
                {email}
            </p>
        </div>
        
    </div>));

}
export default Card;