import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

import Card from '../components/Card'

const Team = ()=> {
    const { team } = useContext(GlobalContext)

    return (
        <main className="container">
            { team.length === 0  && <h3>No hay Pokémons en el Team</h3> }

            <div className="gallery">
                {
                    team.map((pokemon)=> {
                        return(
                            <Card key={pokemon.number} pokemon={pokemon} />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Team