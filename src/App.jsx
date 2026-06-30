import { Routes, Route, NavLink } from "react-router-dom"
import Home from "./components/Home"
import Movies from "./components/Movies"
import MovieDetails from "./components/MovieDetails"
import About from "./components/About"
import NotFound from "./components/NotFound"
import './App.css'

const App = () => {
  return (
    <div className="app">
      <nav className="site-nav">
        <span className="logo">KinoSayt</span>
        <div className="nav-links">
          <NavLink to="/">Bosh sahifa</NavLink>
          <NavLink to="/Movies">Kinolar</NavLink>
          <NavLink to="/About">Biz haqimizda</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/About" element={<About />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="site-footer"> 2026 KinoSayt</footer>
    </div>
  )
}

export default App
