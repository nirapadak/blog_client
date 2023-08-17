import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import {Toaster} from "react-hot-toast";
import Menu from "./components/nav/Menu.jsx";
import BlogCreate from "./pages/BlogCreate.jsx";
import Update from "./components/Update.jsx";


const PageNotFound =()=>{
  return(
      <div>
        404 | Page not Found
      </div>
  )
}
function App() {


  return (
    <BrowserRouter>
      <Menu/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
          <Route path="/blog" element={<BlogCreate/>}/>
          <Route path="/update/:blogId" element={<Update/>}/>

        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
