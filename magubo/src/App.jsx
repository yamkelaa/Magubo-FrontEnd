import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Website from "./Pages/Website";
import Layout from "./Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import ServicesPage from "./Pages/Services/ServicesPage";
import { Switch } from "@mantine/core";
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<Website></Website>}></Route>
    <Route path="/services" element={<ServicesPage/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
  <ToastContainer/>
  </>
  
  );
}

export default App;
