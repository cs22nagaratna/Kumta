import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kumta from "./Components/Kumta";
import Hospital from "./Components/Hospital";

function App(){
  return(
    <Router>
      <main className="p">
        <Routes>
        <Route path="/hospital" element={<Hospital />} />
        </Routes>
      </main>
    </Router>
  )
}
export default App