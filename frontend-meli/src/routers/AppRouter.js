import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Rutas
import { RutaPublica } from "./RutaPublica";
import { RutaPrivada } from "./RutaPrivada";

//Paginas generales
import NotExist from "../components/layout/NotExist";

// Components
import Results from "../components/search/Results";
import ProductDetails from "../components/product/ProductDetails";


export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <RutaPrivada>
              <Results />
            </RutaPrivada>
          }
        />

        <Route
          path="/items/:id"
          element={
            <RutaPrivada>
              <ProductDetails />
            </RutaPrivada>
          }
        />

        <Route
          path="/items?"
          element={
            <RutaPrivada>
              <Results />
            </RutaPrivada>
          }
        />

        {/* <Route
          path="/login"
          element={
            <RutaPublica>
              <LoginScreen />
            </RutaPublica>
          }
        /> */}

        <Route
          path="*"
          element={
            <RutaPrivada>
              <NotExist/>
            </RutaPrivada>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};
