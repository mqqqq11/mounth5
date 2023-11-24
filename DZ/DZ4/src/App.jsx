import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { UserReducer } from "./pages/userReducer"
import { DataUser } from "./pages/dataUser"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<UserReducer/>}/>
          <Route path="/data" element={<DataUser/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
