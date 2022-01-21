import React from 'react';

const Foodrecipe = ({title,calories,image,weight,ingredients,mealtype}) => {
  return (
      <div className='recipe-block'>
          <h1>{title}</h1>
          <p><span>Total Calories: </span>{calories}</p>
          <p><span>Total Weight: </span> {weight}</p>
          <p><span>Ingredients:  </span>{ingredients}</p>
          <p><span>Meal Type:  </span>{mealtype}</p>
          <img src={image} alt="images" />
      </div>
  )
};

export default Foodrecipe;
