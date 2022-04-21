import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals,setMeals] =useState([])

  useEffect(()=>{
     const fetchdata=async ()=>{
     const response= await fetch('https://movies-list-4cd19-default-rtdb.firebaseio.com/meals.json');
      const responsedata= await response.json();
      var loadmeals=[]
      for(const key in responsedata){
        loadmeals.push({
          id : key,
          name : responsedata[key].name,
          description : responsedata[key].description,
          price : responsedata[key].price
        });
      }
      setMeals(loadmeals)
      }
      fetchdata();
  },[meals])


  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;