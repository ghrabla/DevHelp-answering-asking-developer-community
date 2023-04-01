import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/layouts/error";
import { ToastContainer } from "react-toastify";
import Home from "./pages/layouts/Home";
import Login from "./pages/users/login";
import Register from "./pages/users/register";
import Question from "./pages/questions/question";
import Listquestions from "./pages/questions/listquestions";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/question" element={<Question/>}/>
        <Route path="/listquestions" element={<Listquestions/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}