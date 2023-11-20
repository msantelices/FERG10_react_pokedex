import { useState, useEffect, useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

import Loader from "../components/Loader"
import Search from "../components/Search"
import Gallery from "../components/Gallery"

const Home = ()=> {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const { pokemons, setPokemons } = useContext(GlobalContext)

    const getData = async(signal)=> {
        try {
            const res = await fetch('/data.json', { signal })
            const json = await res.json()

            setError(false)
            setPokemons(json)

        } catch(error) {
            console.log(error)
            setError(true)
        }

        setTimeout(()=> {
            setLoading(false)
        }, 2000)
    }

    useEffect(()=> {
        if(pokemons.length > 0) {
            setLoading(false)
            return
        }

        const controller = new AbortController()
        const signal = controller.signal

        getData(signal)

        return ()=> {
            controller.abort()
        }
    }, [])


    return (
        <main className={`container ${!loading ? 'loaded' : ''}`}>
            <Loader />

            { error && !loading && <h3 className="error">Ha ocurrido un error. Intente de nuevo más tarde</h3> }

            <div className="main-area">
                <Search />
                <Gallery />
            </div>
        </main>
    )
}

export default Home