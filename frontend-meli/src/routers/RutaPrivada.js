import React from "react";
import { Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

// LAYOUT
import ResponsiveNavBar from "../components/layout/ResponsiveNavBar";

export const RutaPrivada = ({ children }) => {
  const isAuthenticated = true;

  // const cargandoDatosAPI = useSelector((state) => state.UI.cargandoDatosAPI);

  return isAuthenticated ? (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ResponsiveNavBar />
      <Box
        component="main"
        sx={{
          backgroundColor: "#ededed",
          flexGrow: 1,
          height: "100vh",
        }}
      >
        <Toolbar />
        {children}
      </Box>

      {/* <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={cargandoDatosAPI}
      >
        <CircularProgress color="inherit" sx={{ mr: 4 }} /> Por favor espere ...
      </Backdrop> */}
    </Box>
  ) : (
    <Navigate to="/login" />
  );
};
