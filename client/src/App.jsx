import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/layouts/error";
import { ToastContainer } from "react-toastify";
import Home from "./pages/layouts/Home";
import Login from "./pages/users/login";
import Register from "./pages/users/register";
import Question from "./pages/users/question";
import Read from "./pages/users/Read";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/question" element={<Question/>}/>
        <Route path="/read" element={<Read/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}