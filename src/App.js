//import { ErrorBoundary } from 'react-error-boundaries';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./Component/User";

import MoreInfo from "./Component/MoreInfo";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/user/:email/:phone" element={<MoreInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
