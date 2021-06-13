import './style.css';

export default function RecipeInfo({selectedRecipe}) {
    const recipe=selectedRecipe['recipe']
    return (
        <div className="RecipeInfo">
           <div>
               <h1>{recipe['label']}</h1>
                <div className="RecipeInfo__labelcontainer">{recipe['healthLabels'].map((d)=><p className="RecipeInfo__HealthTags">{d.replace('-',' ')}</p>)}</div>
                <div>
                    <h1>Ingredients :</h1>
                    {recipe['ingredients'].map((d)=><p><span style={{fontWeight:'600'}}>{d['foodCategory']} </span>{d['text']}</p>)}
                    <p>calories : {recipe['calories']} </p>
                    {/* <p>calories: {recipe['mealType'][0].map((d)=><span>{d}</span>)} </p> */}
                    <a href={recipe['shareAs']} target="_blank">For more</a>

                </div>
            </div>
           {/* <div>
           <img src={recipe['image']} alt={recipe['label']} />
           </div> */}
        </div>
    )
}
