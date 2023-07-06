import { BrowserRouter, Routes , Route, Navigate} from "react-router-dom";
import { EmpleadosPage } from "./pages/EmpleadosPage";
import { EmpleadosFormPage } from "./pages/EmpleadosFormPage";
import {Navigation} from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return(
    <BrowserRouter>
     <div className="container mx-auto">
      <Navigation/>
      <br />
      <Routes>
        <Route path="/" element={<Navigate to="/empleados" />} />
        <Route path="/empleados" element={<EmpleadosPage />} />
        <Route path="/empleados-crear" element={<EmpleadosFormPage />} />
        <Route path="/empleados/:id" element={<EmpleadosFormPage />} />
      </Routes>
      <Toaster />
      <h1 className="text-center">Si desea editar, haga clic en cualquiera de los registros.</h1>
      </div> 
    </BrowserRouter>
  )
}

export default App