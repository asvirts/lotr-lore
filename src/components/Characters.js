import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Characters() {
    return(
        <>
            <Nav />
            <h2>Characters</h2>
            <Link to="/characters/gandalf">
                <img src='https://assetsio.reedpopcdn.com/magic-the-gathering-tales-of-middle-earth-gandalf-friend-shire.png?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp' className="ch-por" alt="Gandalf the Grey" />
                <h3>Gandalf</h3>
            </Link>
        </>
    )
}