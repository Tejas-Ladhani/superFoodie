/*
    TEJAS LADHANI
    13-06-2021
    HACKATHON
*/

import './style.css';

export default function RecipeInfo({ selectedRecipe, setselectedRecipe }) {
    const recipe = selectedRecipe['recipe']
    const handleClick = (e) => {
        // when click on backdrop (ONLY), the popup should get close, that is by setting the selected values as null, [check the /container/recipe/index]
        if (e.target.classList.contains('backdrop'))
            setselectedRecipe(null)
    }
    return (
        <div className="backdrop" onClick={handleClick}>
            <div className="RecipeInfo">
                <div>
                   <div className="RecipeInfo_Heading"> <h1>{recipe['label']}</h1> </div>
                   <hr />
                    <div className="RecipeInfo__labelcontainer">{recipe['healthLabels'].map((d) => <p className="RecipeInfo__HealthTags">{d.replace('-', ' ')}</p>)}</div>
                    <div className="RecipeInfo__ImageInstruction">
                        <img src={recipe['image']} alt={recipe['label']} />

                        <div>
                            <h1>Ingredients :</h1>
                            {recipe['ingredients'].map((d) => <p><span style={{ fontWeight: '600' }}>{d['foodCategory']} </span>{d['text']}</p>)}
                            <p>calories : {recipe['calories']} </p>
                            {/* <p>calories: {recipe['mealType'][0].map((d)=><span>{d}</span>)} </p> */}
                           <div className="For_More"><a href={recipe['shareAs']} className="For_More_link" target="_blank">For more</a></div>

                        </div>
                    </div>
                    <hr></hr>
                </div>

            </div>
        </div>
    )
}
