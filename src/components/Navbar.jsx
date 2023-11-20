import { Link, NavLink } from "react-router-dom"

const Navbar = ()=> {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src="/pokeball.svg" alt="Pokeball" />
                    <h1>Pokedex</h1>
                </Link>
            </div>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/team">My Team</NavLink>
            </nav>
        </header>
    )
}

export default Navbar