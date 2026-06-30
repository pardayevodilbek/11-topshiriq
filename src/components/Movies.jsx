import { Link } from 'react-router-dom'

const filmlar = [
  { id: 1, nomi: "Kino 1", yil: 2021 },
  { id: 2, nomi: "Kino 2", yil: 2022 },
  { id: 3, nomi: "Kino 3", yil: 2023 },
  { id: 4, nomi: "Kino 4", yil: 2024 },
]

const Movies = () => {
  return (
    <div className="movies-list">
      <h2>Kinolar ro'yxati</h2>
      <ul>
        {filmlar.map((f) => (
          <li key={f.id}>
            <Link to={`/movies/${f.id}`}>
              <span>{f.nomi}</span>
              <span className="film-yil">{f.yil}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Movies
