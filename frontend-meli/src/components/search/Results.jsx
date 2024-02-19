import React, { useEffect, useState, useLayoutEffect } from "react";
import { Grid, Box, Stack, Breadcrumbs, Typography, Paper, Pagination } from "@mui/material/";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { asyncSearchItems } from '../../redux/actions/items';

import ResultItem from "./ResultItem";
import NotResults from "./NotResults";

const Results = () => {

  const dispatch = useDispatch();

  const {items, offset, total} = useSelector(state => state.items);

  const location = useLocation();
  let texto = new URLSearchParams(location.search).get('search');

  const handleChange = (event, value) => {
    dispatch(asyncSearchItems(texto, value));
  };

  useEffect(() => {
    dispatch(asyncSearchItems(texto));
  }, [texto]);
  
  const breadcrumbs = [
    <Typography key="1" color="text.primary">
      Buscar
    </Typography>,
    <Typography key="2" color="text.primary">
     Resultado
    </Typography>,
  ];

  return items?.length > 0 ? (
    <Box sx={{ p: 4, flexGrow: 1}}>
      <Grid container justifyContent="center">
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <Box>
            <Paper elevation={0} sx={{ width: '65rem', height: '45rem', p: 3}}>
              <Stack spacing={0}>
                {
                  items?.map((i, index) => (
                    <ResultItem
                      key={index}
                      item={i}
                    />
                  ))
                }
              </Stack>
            </Paper>
          </Box>
          <Pagination count={total} color="primary" page={offset} onChange={handleChange}/>
        </Stack>
      </Grid>
    </Box>
  ) : (
    (texto != null) ? (
      <NotResults />
    ) : (
      <div />
    )
  )
}

export default Results