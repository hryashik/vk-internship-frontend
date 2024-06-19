import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import { Outlet, useNavigate } from "react-router-dom";

const ApplicationBar = () => {
   const navigate = useNavigate();
   const clickOnFavorites = () => navigate("/favorites");
   const clickOnMain = () => navigate("/");
   return (
      <div>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
               <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     Movie-service
                  </Typography>
                  <Button variant="text" color="inherit" onClick={clickOnMain}>
                     Главная
                  </Button>
                  <Button
                     variant="text"
                     color="inherit"
                     onClick={clickOnFavorites}
                  >
                     Избранное
                  </Button>
               </Toolbar>
            </AppBar>
         </Box>
         <Outlet />
      </div>
   );
};

export default ApplicationBar;
