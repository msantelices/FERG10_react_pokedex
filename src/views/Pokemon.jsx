import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

import DetailCard from "../components/DetailCard"

const Pokemon = ()=> {
    const { name } = useParams()

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [pokemon, setPokemon] = useState({
        number: '',
        name: '',
        sprite: '',
        types: [],
        stats: []
    })


    const getData = async (signal)=> {
        const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        
        try {
            const res = await fetch(url, { signal })
            const json = await res.json()

            setError(false)

            const pkmn = {
                number: json.id.toString().padStart(3, '0'),
                name: name,
                sprite: json.sprites.front_default,
                types: json.types,
                stats: json.stats
            }
            
            setPokemon(pkmn)
        } catch(error) {
            console.log(error)
            setError(true)
        }

        setLoading(false)
    }

    useEffect(()=> {
        const controller = new AbortController()
        const signal = controller.signal

        getData(signal)

        return ()=> {
            controller.abort()
        }
    }, [])


    return (
        <main className="container">
            { error && !loading && <h3 className="error">Ha ocurrido un error. Intente de nuevo más tarde</h3> }

            <DetailCard pokemon={pokemon} />
        </main>
    )
}

export default Pokemon