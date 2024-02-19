import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Stack, Breadcrumbs, Typography, Paper, Button } from "@mui/material/";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { getItemByID } from '../../redux/actions/items';
import NotExist from "../layout/NotExist";

import { useParams } from "react-router";

const ProductDetails = () => {

  const dispatch = useDispatch();

  const { id } = useParams();
  
  const currentItem = useSelector(state => state.items.currentItem);
  
  useEffect(() => {
    dispatch(getItemByID(id));
  }, []);

  const breadcrumbs = [
    <Typography key="1" color="text.primary">
      Producto
    </Typography>,     
    <Typography key="2" color="text.primary">
     { currentItem?.category.name}
    </Typography>,
  ];

  return currentItem ? (
    <Box sx={{ p: 5, flexGrow: 1}}>
      <Grid container justifyContent="center">
        <Stack spacing={2}>
          <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <Box>
            <Paper elevation={0} sx={{ width: '65rem', height: '45rem'}}>
              <Grid container justifyContent="center">
                <Grid xs={8} sx={{p: 3}}>
                  <Stack spacing={2}>
                    <Box >
                      <img
                        src={currentItem.item.picture}
                        alt="ML"
                        style={{ height: "30rem", width: "35rem" }}            
                      />
                    </Box>
                    <Box justifyContent="center">
                      <Typography variant="h6" gutterBottom>
                        Descripción del producto
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {currentItem.item.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
                <Grid xs={4} sx={{p:3}}>
                  <Stack spacing={2}>
                    <Box>
                      <Typography key="1" color="text.primary">
                        <strong>{ currentItem.item.condition } - { currentItem.item.sold_quantity} Vendidos</strong>
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h5" gutterBottom>
                        <strong>{ currentItem.item.title }</strong>
                      </Typography>
                    </Box>
                    <Box sx={{my: 4}}>
                      <Typography variant="h4" gutterBottom>
                        $ { currentItem.item.price.amount } { currentItem.item.price.currency }
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 15 }}>
                      <Button sx={{ width: '18rem'}} variant="contained" color="primary">Comprar</Button>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Stack>
      </Grid>
    </Box>
  ) : (
    <NotExist />
  )

}

export default ProductDetails