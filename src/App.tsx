// App.js (updated)
import React, { ReactElement } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import * as paths from "./constants/routerPaths";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path={paths.HOME} element={<Home />} />
          <Route path={paths.ALL} element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
