import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

const Search = () => {
    const { search, setSearch } = useContext(GlobalContext)

    return (
        <section className="search-bar">
            <input
                type="text"
                placeholder="Buscar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
        </section>
    )
}

export default Search