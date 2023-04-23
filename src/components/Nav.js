import { Link } from "react-router-dom"
import '../index.css'

export default function Nav() {
    return (
        <ul className="nav">
            <li className="nav"><Link to="/">Home</Link></li>
            <li className="nav"><Link to="/characters">Characters</Link></li>
            <li className="nav"><Link to="/places">Places</Link></li>
            <li className="nav"><Link to="/films">Films</Link></li>
        </ul>
    )
}