import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { StorePage } from "./pages/StorePage"
import Shopping from './pages/Shopping'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<StorePage/>}/>
          <Route path="/shopping" element={<Shopping/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
