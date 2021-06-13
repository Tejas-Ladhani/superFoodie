import './style.css';

export default function RecipeTile({data,setselectedRecipe}) {
  return (
    <div className="RecipeTile" onClick={()=>setselectedRecipe(data)} >
     
      <img src={data['recipe']['image']} alt={data['recipe']['label']} />
      <hr></hr>
      <p className="RecipeTile__label">{data['recipe']['label']}</p>
      
    </div>
  )
}
