import * as React from 'react';
import Router from "./src/navigation/Router";
import {NativeBaseProvider,extendTheme} from "native-base";

function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#ffffff",
        100: "#1e3a8a",
        200:"#004188",
        300:"#004a9b",
        400:"#d40e1b",
        600: "#004188",//default
        800:"#024F9F",//tıklandıgında,
        900:'#1e40af',
        1000:'#605e5e',
        1100:'#e8ecf3',
        1200:'#eab308',

      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        600: "#004188",
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
    },
    fontConfig: {
      Roboto: {
        100: {
          normal: "Poppins-SemiBold",
          italic: "Poppins-SemiBoldItalic",
        },
        200: {
          normal: "Poppins-Light",
          italic: "Poppins-LightItalic",
        },
        300: {
          normal: "Poppins-Light",
          italic: "Poppins-LightItalic",
        },
        400: {
          normal: "Poppins-Regular",
          italic: "Poppins-Italic",
        },
        500: {
          normal: "Poppins-Medium",
        },
        600: {
          normal: "Poppins-Medium",
          italic: "Poppins-MediumItalic",
        },
        700: {
          normal: "Poppins-Bold",
        },
        800: {
          normal: "Poppins-Bold",
          italic: "Poppins-BoldItalic",
        },
        900: {
          normal: "Poppins-Bold",
          italic: "Poppins-BoldItalic",
        },
      },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: "Poppins",
      body: "Poppins",
      mono: "Poppins",
    },
    components: {
      Input: {
        defaultProps : {
          variant: 'outline',

          bg:{

            linearGradient: {
              colors: ["lightBlue.300", "violet.800"],
              start: [0, 0],
              end: [1, 0]
            }
          },

        },
        sizes: {
          md: {
            py: 8,
            px: 5,
            bg: "#000000",
          },
        },
      },
    },
  });
  return (
    <NativeBaseProvider>
      <Router/>


    </NativeBaseProvider>

  );
}

export default App;
