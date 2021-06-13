import { useState } from 'react';
import { Recipe, RecipeInfo, } from '../../containers';

export default function RecipePage() {
    const [selectedRecipe, setselectedRecipe] = useState(null);
    return (
        <>
        <Recipe setselectedRecipe={setselectedRecipe}/>
        {selectedRecipe!==null?<RecipeInfo selectedRecipe={selectedRecipe} setselectedRecipe={setselectedRecipe}/>:<></>}
        </>
    )
}
