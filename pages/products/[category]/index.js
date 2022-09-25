import { Fragment, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import HomeIcon from "@mui/icons-material/Home";

//* CUSTOM COMPONENT //
import Header from "/components/Header";
import CategoryList from "/components/CategoryList";
import SubCategoryList from "/components/SubCategoryList";
//* CUSTOM COMPONENT //

const ProductByCategory = () => {
   const router = useRouter();
   const categoryId = router.query.category;
   const [data, setData] = useState({});
   const [category, setCategory] = useState([]);
   const [subCategoryData, setSubCategoryData] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState({});

   useEffect(() => {
      if (categoryId != undefined) {
         fetch("https://api.npoint.io/d31e78310907a6fcb077", {
            method: "GET",
            header: { "Content-Type": "application/json" },
         })
            .then((res) => res.json())
            .then((data) => {
               setData(data);
               setCategory(data.category);
               setSubCategoryData(data[categoryId]);

               data.category.forEach((item) => {
                  if (item.link == categoryId) {
                     setSelectedCategory(item);
                  }
               });
            });
      }
   }, [categoryId]);

   return (
      <Fragment>
         <Header />
         <Container
            maxWidth="xl"
            // sx={{
            //    "&.MuiContainer-root": {
            //       paddingLeft: "0px",
            //       paddingRight: "0px",
            //    },
            // }}
         >
            <Breadcrumbs sx={{ m: 3 }}>
               <Link href="/">
                  <a>Home</a>
               </Link>
               <Typography color="text.primary">Pneumatic</Typography>
            </Breadcrumbs>
            {/* <CategoryList categoryData={category} /> */}
            <SubCategoryList
               subCategoryData={subCategoryData}
               selectedCategory={selectedCategory}
            />
         </Container>
      </Fragment>
   );
};

export default ProductByCategory;
