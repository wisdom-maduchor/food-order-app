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
    const [food, setFood] = useState([])

    useEffect(() => {
        const fetchMeal = async() => {
           const response = await fetch('https://foodapp-583ea-default-rtdb.firebaseio.com/meals.json');
            const data = await response.json();

            const loadMeal = [];

            for(const key in data) {
                loadMeal.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }

            setFood(loadMeal)
        };

        fetchMeal();
    }, [])

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