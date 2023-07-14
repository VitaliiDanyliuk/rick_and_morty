import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Characters from "../../pages/Characters";
import Locations from "../../pages/Locations";
import Episodes from "../../pages/Episodes";
import NotFound from "../../pages/NotFound";
import Layout from "../Layout";
import Page from "../../pages/Page";

import "./app.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="Characters"
              element={<Characters title="Characters" />}
            />
            <Route path="Locations" element={<Locations title="Locations" />} />
            <Route path="Episodes" element={<Episodes title="Episodes" />} />
            <Route path="Page/:id" element={<Page />} />

            <Route
              path="Characters/:id"
              element={
                <Page url="https://rickandmortyapi.com/api/character/" />
              }
            />
            <Route
              path="Locations/:id"
              element={<Page url="https://rickandmortyapi.com/api/location/" />}
            />
            <Route
              path="Episodes/:id"
              element={<Page url="https://rickandmortyapi.com/api/episode/" />}
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
