import { Toaster } from "react-hot-toast"
import WhiteTable from "./WhiteAmsTableProject/components/WhiteTable"
import BasicTable from "./components/BasicTable"
import ColumnHiding from "./components/ColumnHiding"
import ColumnOrder from "./components/ColumnOrder"
import FilteringTable from "./components/FilteringTable"
import PaginationTable from "./components/PaginationTable"
import RowSelection from "./components/Row Selection/RowSelection"
import SortingTable from "./components/SortingTable"

function App() {

  return (
    <>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      {/* <ColumnOrder /> */}
      {/* <ColumnHiding /> */}
      <WhiteTable />


      <Toaster />
    </>
  )
}

export default App

