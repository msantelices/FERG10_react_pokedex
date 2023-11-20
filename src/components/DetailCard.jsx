import { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useNavigate } from 'react-router-dom'

import TypeBadge from './TypeBadge'
import StatChart from './StatChart'

const DetailCard = ({ pokemon })=> {
    const navigate = useNavigate()

    const { team, togglePokemonTeam } = useContext(GlobalContext)

    const [series, setSeries] = useState([
        { name: 'Stats', data: [] }
    ])

    const isOnTeam = ()=> {
        const pkmn = team.find((pkmn)=> pkmn.number === pokemon.number)
        if(pkmn) {
            return true
        }

        return false
    }

    const goBack = (e)=> {
        e.preventDefault()
        navigate(-1)
    }

    useEffect(()=> {
        const data = pokemon.stats.map((stat)=> stat.base_stat)
        const seriesObject = { name: 'Stats', data }

        setSeries([seriesObject])
    }, [pokemon])

    return (
        <div className="card detail-card">
            <div className='go-back'>
                <a href='#' onClick={(e)=> goBack(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z"/></svg>
                    Volver
                </a>
            </div>

            <div className='pokemon-info'>
                <img src={pokemon.sprite} alt={pokemon.name} />
                <h3>{pokemon.number} - {pokemon.name}</h3>
                <div className='types'>
                    {
                        pokemon.types.map((type, index)=> {
                            return (
                                <TypeBadge key={index} type={type.type.name} />
                            )
                        })
                    }
                </div>
                <div className='add-to-team'>
                    <button onClick={()=> togglePokemonTeam(pokemon)}>{ isOnTeam() ? "Eliminar del equipo" : "Agregar al equipo" }</button>
                </div>
            </div>
            <div className='pokemon-stats'>
                <StatChart series={series} />
            </div>
        </div>
    )
}

export default DetailCard