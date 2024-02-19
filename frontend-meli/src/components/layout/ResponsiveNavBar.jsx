import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  FormControl,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// icons
import SearchIcon from '@mui/icons-material/Search';

import ML from "../../images/mercado-libre-logo.png";


const ResponsiveNavBar = () => {

  let navigate = useNavigate();

  const [text, setText] = useState("");

  const handleClickSearch = () => {
    navigate("/items?search=" + text);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar disableGutters sx={{ pr: 3 }}>
        <Box sx={{ flexGrow: 1 }}>
        </Box>
        <Box sx={{ flexGrow: 0, p: '2px 4px', display: 'flex', alignItems: 'center'}} component="form" >
          <Box sx={{pt: 1, mr: 4}}>
            <NavLink to="/">
              <img
                src={ML}
                alt="ML"
                style={{ height: "3rem", width: "11rem" }}            
              />
            </NavLink>
          </Box>
          <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
            <OutlinedInput
              sx={{ backgroundColor: 'rgba(255, 255, 255, 1)'}}
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="outlined-adornment-search"
              type={'text'}
              placeholder="Nunca dejes de buscar"
              endAdornment={
                <Box>
                  {/* <Divider sx={{ height: 28, m: 0.8 }} orientation="vertical" /> */}
                  <InputAdornment>
                    <IconButton color="primary" sx={{ backgroundColor: '#ededed' }} aria-label="Search"
                      onClick={handleClickSearch}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                </Box>
              }
            />
          </FormControl>
        </Box>
        <Box sx={{ flexGrow: 1 }}>          
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveNavBar;