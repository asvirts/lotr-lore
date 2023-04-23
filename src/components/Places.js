import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Places() {
    return(
        <>
            <Nav />
            <h2>Places</h2>
            <div className="grid">
                <Link to="/places/rohan">
                    <img src='https://tolkiengateway.net/w/images/0/0f/Jef_Murray_-_Edoras.jpg' className="por" alt="Rohan" />
                    <h3>Rohan</h3>
                </Link>
            </div>
        </>
    )
}