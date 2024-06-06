/* React */
import React from "react";

/* Libraries */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Application Module */
import { HOME_ENTRY } from "./config/AppConfig";
import Home from "./views/Home/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={HOME_ENTRY}
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
