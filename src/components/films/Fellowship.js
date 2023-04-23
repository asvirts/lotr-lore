import Nav from "../Nav";

export default function Fellowship() {
    return(
        <>
            <Nav />
            <h3>The Fellowship of the Ring</h3>
            <img src='https://images.bauerhosting.com/legacy/media/61b3/96ab/d603/e8f4/962f/75e5/fellowship.jpg?q=80&auto=format&w=850&ar=16:9&fit=crop&crop=top' className="ch-por" alt="Fellowship of the Ring" />
            <p>The Fellowship of the Ring is a group of nine companions who set out on a quest to destroy the One Ring, an evil artifact created by the Dark Lord Sauron. The Fellowship consists of:</p>
            <ul>
                <li className="list">Frodo Baggins, a hobbit who inherits the One Ring</li>
                <li className="list">Samwise Gamgee, Frodo's loyal companion</li>
                <li className="list">Merry Brandybuck and Pippin Took, Frodo's other hobbit friends</li>
                <li className="list">Aragorn, a ranger who is secretly the heir to the throne of Gondor</li>
                <li className="list">Boromir, a Man from Gondor who is driven by a desire to protect his people</li>
                <li className="list">Legolas, an Elf from Mirkwood</li>
                <li className="list">Gimli, a Dwarf from the Lonely Mountain</li>
                <li className="list">Gandalf, a wizard</li>
            </ul>
            <p>The Fellowship travels through Middle-earth, facing many dangers along the way. They are eventually forced to split up, and Frodo and Sam continue the quest alone. In the end, Frodo succeeds in destroying the One Ring, and Sauron is defeated. The Fellowship of the Ring is a story of courage, friendship, and hope. It is a classic tale of good versus evil that has captured the hearts of readers for generations.</p> 
        </>
    )
}