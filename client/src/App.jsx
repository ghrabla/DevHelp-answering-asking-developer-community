import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/layouts/error";
import { ToastContainer } from "react-toastify";
import Home from "./pages/layouts/Home";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}