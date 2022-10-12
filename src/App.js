import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import AllExams from "./pages/exams/AllExams";
import Exams from "./pages/exams/Exams";
import MyPerformance from "./pages/myPerformance/MyPerformance";


function App() {
  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path="/" element=<Dashboard /> />
          <Route path="/allExams" element=<AllExams /> />
          <Route path="/exams/:id" element=<Exams /> />
          <Route path="/my-performance" element=<MyPerformance /> />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
