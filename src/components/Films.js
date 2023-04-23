import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Films() {
    return(
        <>
            <Nav />
            <h2>Films</h2>
            <div className="grid">
                <Link to="/films/fellowship">
                    <img src='https://images.bauerhosting.com/legacy/media/61b3/96ab/d603/e8f4/962f/75e5/fellowship.jpg?q=80&auto=format&w=850&ar=16:9&fit=crop&crop=top' className="por" alt="Fellowship of the Ring" />
                    <h3>Fellowship of the Ring</h3>
                </Link>
            </div>
        </>
    )
}