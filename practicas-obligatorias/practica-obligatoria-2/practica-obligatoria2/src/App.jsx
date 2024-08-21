
import './App.css'
import Table from './components/table/Table';
import Average from './components/average/Average';
const netIncomes = [{brand: "McDonalds", income: 1291283}, {brand: "Burger King", income: 1927361}, {brand: "KFC", income: 1098463}];

const netIncomesMapped=netIncomes.map(company=><Table brand={company.brand} income={company.income}/>)

function App() {
return (<>
  <table>
      <tr class="cabecera">
        <th>Brand</th>
        <th>Income</th>
      </tr>
    {netIncomesMapped}
  </table>
  <Average income={netIncomes.map(item=>item.income)}/>
    </>
)
}

export default App
