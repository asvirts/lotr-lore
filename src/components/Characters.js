import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Characters() {
    return(
        <>
            <Nav />
            <h2>Characters</h2>
            <div className="grid">
                <Link to="/characters/gandalf">
                    <img src='https://assetsio.reedpopcdn.com/magic-the-gathering-tales-of-middle-earth-gandalf-friend-shire.png?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp' className="por" alt="Gandalf" />
                    <h3>Gandalf</h3>
                </Link>
            </div>
            <div className="grid">
                <Link to="/characters/iluvatar">
                    <img src='https://qph.cf2.quoracdn.net/main-qimg-56237f57454ed132c470978e968cbb82-lq' className="por" alt="Eru Ilúvatar" />
                    <h3>Eru Ilúvatar</h3>
                </Link>
            </div>
            <div className="grid">
                <Link to="/characters/morgoth">
                    <img src='https://tolkiengateway.net/w/images/thumb/e/ea/Joel_Kilpatrick_-_Morgoth_and_Fingolfin.jpg/1200px-Joel_Kilpatrick_-_Morgoth_and_Fingolfin.jpg' className="por" alt="Morgoth" />
                    <h3>Morgoth (Melkor)</h3>
                </Link>
            </div>
            <div className="grid">
                <Link to="/characters/tom-bombadill">
                    <img src='https://austinhgilkeson.files.wordpress.com/2014/12/tom-bombadil.jpg' className="por" alt="Tom Bombadill" />
                    <h3>Tom Bombadill</h3>
                </Link>
            </div>
        </>
    )
}