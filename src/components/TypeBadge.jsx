import colors from "../utils/types"

const TypeBadge = ({ type })=> {
    return (
        <span 
            className="type-badge"
            style={{background: colors[type] }}>{type}</span>
    )
}

export default TypeBadge