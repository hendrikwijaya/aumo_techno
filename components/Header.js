import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Icon from "@mui/material/Icon";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useRouter } from "next/router";

import Image from "next/image";
import AumoTechnoIcon from "./AumoTechnoIcon";

import { withContext } from "../context";

const pages = [{ title: "About Us", link: "/aboutus" }];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = (props) => {
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [anchorElUser, setAnchorElUser] = React.useState(null);
   const [drawerState, setDrawerState] = React.useState(false);
   const router = useRouter();

   //* OPEN NAV MENU //
   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };
   //* OPEN NAV MENU //

   //* START : OPEN NAV DRAWER //

   const toggleDrawer = (open) => (event) => {
      if (
         event.type === "keydown" &&
         (event.key === "Tab" || event.key === "Shift")
      ) {
         return;
      }

      setDrawerState(open);
   };

   const list = () => (
      <Box
         onClick={toggleDrawer(false)}
         onKeyDown={toggleDrawer(false)}
         sx={{ width: 250 }}
      >
         <List>
            {pages.map((item, index) => (
               <ListItem
                  disablePadding
                  key={index}
               >
                  <ListItemButton
                     onClick={() => {
                        router.push(item.link);
                     }}
                  >
                     <ListItemIcon>
                        <InboxIcon />
                     </ListItemIcon>
                     <ListItemText primary={item.title} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   );

   //* END : OPEN NAV DRAWER //

   return (
      <AppBar position="static">
         <Container maxWidth="xl">
            <Drawer
               anchor="left"
               open={drawerState}
               onClose={toggleDrawer(false)}
            >
               {list()}
            </Drawer>
            <Toolbar disableGutters>
               {/* <AumoTechnoIcon
            sx={{ display: { xs: "none", sm: "flex" }, mr: 1, fontSize: 200 }}
          /> */}
               <Avatar
                  alt="aumo_techno"
                  src="/aumo_tekno_5_light_background.png"
                  variant="rounded"
                  sx={{
                     width: 120,
                     height: 120,
                     display: { xs: "none", sm: "flex" },
                     mr: 2,
                  }}
               />
               <Box
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
               ></Box>
               <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={toggleDrawer(true)}
                     color="inherit"
                  >
                     <MenuIcon />
                  </IconButton>
                  {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
               </Box>
               {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AUMO TECHNO
          </Typography> */}
               <Avatar
                  alt="aumo_techno"
                  src="/aumo_tekno_5_light_background.png"
                  variant="square"
                  sx={{
                     width: 100,
                     height: 100,
                     display: { xs: "flex", sm: "none" },
                  }}
               />
               {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}></Box> */}
               {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AUMO TECHNO
          </Typography> */}
               <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                  {pages.map((item, index) => (
                     <Button
                        key={index}
                        onClick={() => {
                           router.push(item.link);
                        }}
                        sx={{ my: 2, display: "block" }}
                        variant="contained"
                        color="secondary"
                     >
                        {item.title}
                     </Button>
                  ))}
               </Box>

               {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
            </Toolbar>
         </Container>
      </AppBar>
   );
};
export default withContext(ResponsiveAppBar);
