import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/layouts/error";
import { ToastContainer } from "react-toastify";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}