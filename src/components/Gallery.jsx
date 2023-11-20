import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

import Card from '../components/Card.jsx'

const Gallery = ()=> {
    const { pokemons, search } = useContext(GlobalContext)

    const filteredPokemons = pokemons.filter((pokemon)=> pokemon.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <section className="gallery">
            {
                filteredPokemons.map((pokemon)=> <Card key={pokemon.number} pokemon={pokemon} />)
            }

            {
                filteredPokemons.length === 0 &&
                <h3>No hay resultados</h3>
            }
        </section>
    )
}

export default Gallery