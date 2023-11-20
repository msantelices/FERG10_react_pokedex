import { useNavigate } from "react-router-dom"

const Card = ({ pokemon })=> {
    const navigate = useNavigate()

    const viewPokemon = (name)=> {
        const path = `/pokemon/${name}`
        navigate(path)
    }

    return (
        <div className="card" onClick={()=> viewPokemon(pokemon.name)}>
            <img src={pokemon.sprite} alt={pokemon.name} />
            <h3>{pokemon.number} - {pokemon.name}</h3>
        </div>
    )
}

export default Card