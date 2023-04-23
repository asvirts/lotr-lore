import { Link } from "react-router-dom"
import '../index.css'

export default function Nav() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/characters">Characters</Link></li>
            <li><Link to="/places">Places</Link></li>
            <li><Link to="/films">Films</Link></li>
        </ul>
    )
}