import "../styles/globals.css";
import { Fragment } from "react";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Provider } from "../context";
import { blueGrey, indigo } from "@mui/material/colors";

function MyApp({ Component, pageProps }) {
   const theme = createTheme({
      palette: {
         primary: {
            main: blueGrey[300],
         },
         secondary: {
            main: indigo[900],
         },
      },
   });

   /**
    * Be careful using this hook. It only works because the number of
    * breakpoints in theme is static. It will break once you change the number of
    * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
    */
   function useWidth() {
      const theme = useTheme();
      const keys = [...theme.breakpoints.keys].reverse();
      return (
         keys.reduce((output, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));
            return !output && matches ? key : output;
         }, null) || "xs"
      );
   }

   const getContext = () => ({
      testContextValue: "123",
      useWidth: useWidth,
   });

   return (
      <Fragment>
         <ThemeProvider theme={theme}>
            <Provider value={getContext()}>
               <Component {...pageProps} />
            </Provider>
         </ThemeProvider>
      </Fragment>
   );
}

export default MyApp;
