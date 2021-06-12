import './style.css';

export default function RecipeTile({data}) {
  return (
    <div className="RecipeTile" >
      <a href={data['recipe']['shareAs']}>
      <img src={data['recipe']['image']} alt={data['recipe']['label']} />
      <hr></hr>
      <p className="RecipeTile__label">{data['recipe']['label']}</p>
      </a>
    </div>
  )
}
