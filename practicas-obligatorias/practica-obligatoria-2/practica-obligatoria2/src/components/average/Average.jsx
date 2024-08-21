import "./average.css"
const Average=({income})=>{
    let AverageReduced=income.reduce((acu,item)=>acu+item/income.length,0)
    
    return <p class="average">El promedio es: ${AverageReduced}</p>
}

export default Average