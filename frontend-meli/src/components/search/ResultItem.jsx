import React from 'react';
import { useNavigate } from "react-router-dom";
import { Grid, Divider, Box, Stack, Typography } from "@mui/material/";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const ResultItem = ({id, item}) => {

  let navigate = useNavigate();

  const handleClickItem = () => {
    navigate("/items/" + item.id);
  };
  
  return (
    <Box>
      <Grid container justifyContent="center" >
        <Grid xs={3} >
          <img
            src={item.thumbnail}
            onClick={handleClickItem}
            alt="ML"
            style={{ height: "10rem", width: "10rem" }}            
          />
        </Grid>
        <Grid xs={7} >
          <Stack spacing={0}>
            <Box sx={{my: 2}}>
              <Typography variant="h5" gutterBottom>
                $ { item.price } { item.currency_id } { (item.shipping.free_shipping)?<LocalShippingIcon color="success" />:""}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" gutterBottom>
                <strong>{ item.title }</strong>
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid xs={2}>

        </Grid>
      </Grid>
      <Divider variant="middle" />
    </Box>
  )
}

export default ResultItem