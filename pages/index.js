import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//* CUSTOM COMPONENT //
import Header from "/components/Header";
import BrandLogoList from "/components/BrandLogoList";
import ProductList from "/components/ProductList";
//* CUSTOM COMPONENT //

export default function HalfRating() {
   return (
      <React.Fragment>
         <Header />
         <Container
            maxWidth="xl"
            sx={{
               "&.MuiContainer-root": {
                  paddingLeft: "0px",
                  paddingRight: "0px",
               },
            }}
         >
            <ProductList />
            <BrandLogoList />
         </Container>
      </React.Fragment>
   );
}
