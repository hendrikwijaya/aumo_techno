import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import dynamic from "next/dynamic";

import SpeedIcon from "@mui/icons-material/Speed";
import Speedometer1 from "./Speedometer1";
// import IndustrialProcessChart from "./IndustrialProcessChart";

const drawerWidth = 240;

function DashboardHeader(props) {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const IndustrialProcessChart = dynamic(
      () => import("./IndustrialProcessChart"),
      {
         ssr: false,
      }
   );

   const drawer = (
      <div>
         <Box
            sx={{
               width: "100%",
               height: 120,
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <Avatar
               alt="aumo_techno"
               src="/aumo_tekno_5_light_background.png"
               variant="rounded"
               sx={{
                  width: 120,
                  height: 120,
                  mr: 2,
               }}
            />
         </Box>
         <Divider />
         <List>
            <ListItem disablePadding>
               <ListItemButton>
                  <ListItemIcon>
                     <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Gauge Meter" />
               </ListItemButton>
            </ListItem>
         </List>
      </div>
   );

   const container =
      window !== undefined ? () => window().document.body : undefined;

   return (
      <Box sx={{ display: "flex" }}>
         <CssBaseline />
         <AppBar
            position="fixed"
            sx={{
               width: { sm: `calc(100% - ${drawerWidth}px)` },
               ml: { sm: `${drawerWidth}px` },
            }}
         >
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography
                  variant="h6"
                  noWrap
                  component="div"
               >
                  Charts Example
               </Typography>
            </Toolbar>
         </AppBar>
         <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
         >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
               container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                     boxSizing: "border-box",
                     width: drawerWidth,
                  },
               }}
            >
               {drawer}
            </Drawer>
            <Drawer
               variant="permanent"
               sx={{
                  display: { xs: "none", sm: "block" },
                  "& .MuiDrawer-paper": {
                     boxSizing: "border-box",
                     width: drawerWidth,
                  },
               }}
               open
            >
               {drawer}
            </Drawer>
         </Box>
         <Box
            component="main"
            sx={{
               flexGrow: 1,
               p: 3,
               width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
         >
            <Toolbar />
            <Grid container>
               <Grid
                  item
                  xs={12}
                  md={6}
               >
                  <Box sx={{ width: 290, height: 180 }}>
                     <Speedometer1 interval={5000} />
                  </Box>
                  <Button variant="contained">click me</Button>
               </Grid>
               <Grid
                  item
                  xs={12}
                  md={6}
               >
                  <Box sx={{ width: 350, height: 300 }}>
                     <Speedometer1
                        segments={5}
                        ringWidth={40}
                        maxValue={150}
                        needleHeightRatio={0.8}
                        customSegmentLabels={[
                           {
                              text: "Very Bad",
                              position: "INSIDE",
                              color: "#555",
                           },
                           {
                              text: "Bad",
                              position: "INSIDE",
                              color: "#555",
                           },
                           {
                              text: "Ok",
                              position: "INSIDE",
                              color: "#555",
                              fontSize: "19px",
                           },
                           {
                              text: "Good",
                              position: "INSIDE",
                              color: "#555",
                           },
                           {
                              text: "Very Good",
                              position: "INSIDE",
                              color: "#555",
                           },
                        ]}
                     />
                  </Box>
               </Grid>
               <Grid
                  item
                  xs={12}
                  sx={{ border: "1px solid black" }}
               >
                  <IndustrialProcessChart />
               </Grid>
            </Grid>
         </Box>
      </Box>
   );
}

export default DashboardHeader;
