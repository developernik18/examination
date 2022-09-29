import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import AllExams from "./pages/exams/AllExams";
import Exams from "./pages/exams/Exams";


function App() {
  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path="/" element=<Dashboard /> />
          <Route path="/allExams" element=<AllExams /> />
          <Route path="/exams" element=<Exams /> />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
