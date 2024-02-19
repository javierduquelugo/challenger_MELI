import React from 'react';
import { Grid, Box } from "@mui/material/";

import NE from "../../images/NotResults.png";

const NotResults = () => {
  return (
    <Box sx={{ pt: 10, flexGrow: 1}}>
      <Grid container justifyContent="center">
          <Box>
            <img
              src={NE}
              alt="Error 404"
              style={{ height: "20rem", width: "60rem" }}            
            />
          </Box>
      </Grid>
    </Box>
  )
}

export default NotResults