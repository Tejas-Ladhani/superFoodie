import Axios from 'axios';
import {Button} from '@chakra-ui/react';
import './style.css';
import { useState } from 'react';

const YOUR_APP_ID=''
const YOUR_APP_KEY=''

export default function Recipe() {
    const [query, setQuery] = useState('')

    const api=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

    const GetRecipe=async ()=>{
        const result= await Axios.get(api)
        console.log(result)
    }

    const onSubmit=(e)=>{
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
                    onChange={(e)=>setQuery(e.target.value)}
                    />
                    <input type="submit"
                    className="Recipe__submitBtn"
                    value="search" />
                </form>
            

      </div>
    )
}
