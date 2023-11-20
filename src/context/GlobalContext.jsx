import { createContext, useState } from "react"

export const GlobalContext = createContext()

const GlobalProvider = ({ children })=> {
    const [pokemons, setPokemons] = useState([])
    const [search, setSearch] = useState("")
    const [team, setTeam] = useState([])

    const togglePokemonTeam = (pokemon)=> {
        const isFavorite = team.findIndex((pkmn)=> pkmn.number === pokemon.number)
        console.log(isFavorite)

        if(isFavorite !== -1) {
            const updateTeam = team.filter((pkmn)=> pkmn.number !== pokemon.number)
            setTeam(updateTeam)
        } else {
            const updateTeam = [...team, pokemon]
            setTeam(updateTeam)
        }
    }

    const state = { pokemons, setPokemons, search, setSearch, team, togglePokemonTeam }

    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider