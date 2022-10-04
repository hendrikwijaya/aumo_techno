import { Fragment, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

//* CUSTOM COMPONENT //
import Header from "/components/Header";
import GoogleMapLocation from "/components/GoogleMapLocation";
//* CUSTOM COMPONENT //

export default function MainPage() {
   const [settings, setSettings] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [aboutUs, setAboutUs] = useState("");

   useEffect(() => {
      fetch("https://api.npoint.io/d31e78310907a6fcb077", {
         method: "GET",
         header: { "Content-Type": "application/json" },
      })
         .then((res) => res.json())
         .then((data) => {
            setSettings(data.settings);
            setIsLoading(false);

            data.settings.forEach((item) => {
               if (item.name == "about_us") {
                  setAboutUs(item.value);
               }
            });
         });
   }, []);

   return (
      <Fragment>
         <Header />
         <Container maxWidth="lg">
            <Breadcrumbs sx={{ m: 3 }}>
               <Link href="/">
                  <a>Home</a>
               </Link>
               <Typography color="text.primary">About Us</Typography>
            </Breadcrumbs>
            <Paper
               elevation={12}
               sx={{ minHeight: 450 }}
            >
               <Grid
                  container
                  spacing={3}
                  sx={{ p: 3 }}
               >
                  <Grid lg={4}>
                     <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                           <Typography
                              variant="h5"
                              color="text.primary"
                              gutterBottom
                           >
                              About Us
                           </Typography>
                           <Typography
                              variant="body1"
                              color="text.secondary"
                           >
                              {aboutUs}
                           </Typography>
                        </CardContent>
                     </Card>
                  </Grid>
                  {/* <Grid lg={4}>
                     <GoogleMapLocation />
                  </Grid> */}
               </Grid>
            </Paper>
         </Container>
      </Fragment>
   );
}
