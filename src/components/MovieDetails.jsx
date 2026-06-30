import { useParams, useNavigate } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="details-box">
      <h2>Tanlangan kino</h2>
      <p>ID raqami: {id}</p>
      <button onClick={() => navigate(-1)}>Orqaga qaytish</button>
    </div>
  )
}

export default MovieDetails
