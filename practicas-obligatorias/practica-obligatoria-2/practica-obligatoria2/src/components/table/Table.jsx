import './table.css'
const Table=({brand,income})=>{
return(
    <tr>
        <th class="elemento-fila">{brand}</th>
        <th class="elemento-fila">${income}</th>
    </tr>
)
}

export default Table