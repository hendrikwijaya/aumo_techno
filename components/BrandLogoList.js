import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { withContext } from "../context";

const BrandLogoList = (props) => {
   const { useWidth } = props;
   const width = useWidth();

   const itemData = [
      {
         img: "/aumo_techno_images/Airtac.png",
         title: "Airtac",
      },
      {
         img: "/aumo_techno_images/API.png",
         title: "API",
      },
      {
         img: "/aumo_techno_images/Autonics.png",
         title: "Autonics",
      },
      {
         img: "/aumo_techno_images/Beckhoff.png",
         title: "Beckhoff",
      },
      {
         img: "/aumo_techno_images/Belimo.png",
         title: "Belimo",
      },
      {
         img: "/aumo_techno_images/Bray.png",
         title: "Bray",
      },
      {
         img: "/aumo_techno_images/Buschjost.png",
         title: "Buschjost",
      },
      {
         img: "/aumo_techno_images/ClaVal.png",
         title: "Cla-Val",
      },
      {
         img: "/aumo_techno_images/Cummins.png",
         title: "Cummins",
      },
      {
         img: "/aumo_techno_images/Ebro.png",
         title: "Ebro",
      },
      {
         img: "/aumo_techno_images/Endress_Hauser.png",
         title: "Endress Hauser",
      },
      {
         img: "/aumo_techno_images/FESTO.png",
         title: "Festo",
      },
      {
         img: "/aumo_techno_images/FPT.png",
         title: "FPT",
      },
      {
         img: "/aumo_techno_images/GEA.png",
         title: "GEA",
      },
      {
         img: "/aumo_techno_images/Georg_Fischer.png",
         title: "Georg Fisher",
      },
      {
         img: "/aumo_techno_images/Hattersley.png",
         title: "Hattersley",
      },
      {
         img: "/aumo_techno_images/Herion.png",
         title: "Herion",
      },
      {
         img: "/aumo_techno_images/Kitz.png",
         title: "Kitz",
      },
      {
         img: "/aumo_techno_images/KSB.png",
         title: "KSB",
      },
      {
         img: "/aumo_techno_images/Leroy_Somer.png",
         title: "Leroy Somer",
      },
      {
         img: "/aumo_techno_images/Mitsubishi.png",
         title: "Mitsubishi",
      },
      {
         img: "/aumo_techno_images/Norgren.png",
         title: "Norgren",
      },
      {
         img: "/aumo_techno_images/Perkins.png",
         title: "Perkins",
      },
      {
         img: "/aumo_techno_images/SICK.png",
         title: "SICK",
      },
      {
         img: "/aumo_techno_images/Valbia.png",
         title: "Valbia",
      },
      {
         img: "/aumo_techno_images/Valpres.png",
         title: "Valpres",
      },
   ];

   return (
      <Paper
         elevation={12}
         sx={{ m: 2 }}
      >
         <Divider sx={{ pt: 1 }}>
            <Chip
               size="medium"
               variant="filled"
               color="primary"
               label="OUR BRANDS"
            />
         </Divider>
         <Box
            sx={{
               width: "100%",
               height: 450,
               overflowY: "scroll",
               p: 1,
               "&::-webkit-scrollbar": {
                  width: "10px",
               },
               "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
               },
               "&::-webkit-scrollbar-thumb": {
                  background: "#888",
                  borderRadius: "10px",
               },
               "&::-webkit-scrollbar-thumb:hover": {
                  background: "#555",
               },
            }}
         >
            <ImageList
               variant="standard"
               cols={
                  width == "xs" ? 2 : width == "sm" ? 3 : width == "md" ? 4 : 6
               }
               gap={8}
            >
               {itemData.map((item) => (
                  <Card
                     key={item.img}
                     sx={{
                        mt: 1,
                        mb: 1,
                        p: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                  >
                     <ImageListItem>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                           src={`${item.img}`}
                           //   srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                           alt={item.title}
                           loading="lazy"
                           style={{ objectFit: "contain" }}
                        />
                     </ImageListItem>
                  </Card>
               ))}
            </ImageList>
         </Box>
      </Paper>
   );
};

export default withContext(BrandLogoList);
