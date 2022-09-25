import { Fragment, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import fetch from "isomorphic-unfetch";

//* CUSTOM COMPONENT //
import Header from "/components/Header";
import BrandLogoList from "/components/BrandLogoList";
import CategoryList from "/components/CategoryList";
//* CUSTOM COMPONENT //

export default function MainPage() {
   const [data, setData] = useState([]);
   const [category, setCategory] = useState([]);

   useEffect(() => {
      fetch("https://api.npoint.io/d31e78310907a6fcb077", {
         method: "GET",
         header: { "Content-Type": "application/json" },
      })
         .then((res) => res.json())
         .then((data) => {
            setData(data);
            setCategory(data.category);
         });
   }, []);

   return (
      <Fragment>
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
            <BrandLogoList />
            <CategoryList categoryData={category} />
         </Container>
      </Fragment>
   );
}
