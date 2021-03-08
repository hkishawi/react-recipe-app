import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ calories, title, image, ingredients, key }) => {
    return(
        <div className={style.recipe}>
            <img className={style.image} src={image} alt='' />
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><b>Calories:</b> {calories}</p>
            
        </div>
    )
}

export default Recipe;