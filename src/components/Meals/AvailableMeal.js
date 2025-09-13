import classes from "./AvailableMeal.module.css"
import MealItem from "./MealItem/MealItem"
import Card from "../UI/Card"
import { useEffect, useState } from "react"

const DUMMY_MEALS = [
        {
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99,
        },
        {
            id: 'm2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.5,
        },
        {
            id: 'm3',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99,
        },
        {
            id: 'm4',
            name: 'Green Bowl',
            description: 'Healthy...and green...',
            price: 18.99,
        },
]

const AvailableMeal = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [food, setFood] = useState([]);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeal = async() => {
            const response = await fetch('https://foodapp-583ea-default-rtdb.firebaseio.com/meals');

            if(!response.ok){
                throw new Error('something went wrong');
            };

            const data = await response.json();

            const loadMeal = [];

            for(const key in data) {
                loadMeal.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                });
            }

            setFood(loadMeal);
            setIsLoading(false);
        };

        // try{
        //     fetchMeal();
        // }catch(error){
        //     setIsLoading(false);
        //     setHttpError(error.message);
        // };

        // instead of using try catch block we can use .catch method.This is because we cannot use async await with try catch block directly in useEffect function
        fetchMeal().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, []);

    if(isLoading) {
        return <section className={classes.mealLoading}>
            <p>Loading...</p>
        </section>
    }

    if(httpError) {
        return <section className={classes.mealError}>
            <p>Error Detected</p>
        </section>
    }
    
    const mealsList = food.map(meal => 
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    )

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeal;