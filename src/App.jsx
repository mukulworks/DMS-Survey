import React from "react";
import "../src/Component/css/style.css";
import "../src/Component/css/mobilestyle.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "../src/Component/utiles/routes.index";
function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.routeId}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
