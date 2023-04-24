import Nav from "../Nav";

export default function Character(props) {
    return(
        <>
            <Nav />
            <h3 className="detail">{props.name}</h3>
            <img src={props.img} className="por-full" alt={props.name} />
            <p>{props.desc}</p>
        </>
    )
}