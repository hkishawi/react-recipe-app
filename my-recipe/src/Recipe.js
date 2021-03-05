import React from 'react';


const Recipe = ({calories, title, image}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <img src={image} alt='' />
        </div>
    )
}

export default Recipe;