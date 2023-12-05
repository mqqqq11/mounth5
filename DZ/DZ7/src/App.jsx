import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { StorePage } from "./pages/StorePage"
import { BasketPage } from "./pages/BasketPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<StorePage/>}/>
          <Route path="/basket" element={<BasketPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
