import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Logo from './images/logo.png';
function Navbar(){
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor:"#d62311", height: "50px", width: "100%"}}>
          <Toolbar variant="dense">
            <img src={Logo} alt="Logo" style={{width: "40px"}}/>
            <Typography variant="h6" color="inherit" component="div">
              <Link to='/' style={{textDecoration: "none", color: "white"}}>
                GetInsured
                </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    )
}
export default Navbar