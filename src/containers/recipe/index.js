import Axios from 'axios';
import { Button } from '@chakra-ui/react';
import './style.css';
import { useState } from 'react';
import { RecipeTile } from '../../components';


const HealthLabelsConst=[ "vegan", "vegetarian", "paleo", "dairy-free", "gluten-free", "wheat-free", "fat-free", "low-sugar", "egg-free", "peanut-free", "tree-nut-free", "soy-free", "fish-free", "shellfish-free"]

export default function Recipe() {
    const [query, setQuery] = useState('')
    const [recipeArray, setRecipeArray] = useState([])
    const [healthLabel, sethealthLabel] = useState('')

    const api = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20`
    // const api=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

    const GetRecipe = async () => {
        let result;
        if(healthLabel=='')
            result = await Axios.get(api)
        else
            result = await Axios.get(api+`&health=${healthLabel}`)
        

        setRecipeArray(result.data.hits)
        console.log(result)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        GetRecipe();
    }
    return (
        <div className="Recipe__container">
            <div className="Recipe__Header">
                <h1>Let Search Some recipes 🌮 </h1>
            </div>
            <form className="Recipe__Form" onSubmit={onSubmit}>
                <input type="text"
                    className="Recipe__Form__textfield"
                    placeholder="Enter Ingredients"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <input type="submit"
                    className="Recipe__submitBtn"
                    value="search" />
                    <select className="Recipe__HealthList">
                        {HealthLabelsConst.map((label)=><option onClick={()=>sethealthLabel(label)} key={label}>{label.replace('-',' ')}</option>)}
                    </select>
            </form>
            <div className="Recipe_recipescontainer">
                <div className="Recipe_recipesGrid">
                    {
                        recipeArray.map((data) => <RecipeTile data={data} key={data['recipe']['shareAs']}/>)
                    }
                </div>
            </div>
        </div>
    )
}
