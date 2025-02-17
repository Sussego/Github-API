import PropTypes from "prop-types";
import React from "react";

import { ThemeProvider } from "styled-components";

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;

export const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    turquese: "#1abc9c",
    turqueseDrak: "#16a085",
    green: "#2ecc71",
    greenDark: "#27ae60",
    blue: "#3498db",
    blueDark: "#2980b9",
    violet: "#9b59b6",
    violetDark: "#8e44ad",
    yellow: "#f1c40f",
    yellowDark: "#f39c12",
    orange: "#e67e22",
    orangeDark: "#d35400",
    red: "#e74c3c",
    redDark: "#c0392b",
    champagne: "#ecf0f1",
    champagneDark: "#bdc3c7",
    metal: "#95a5a6",
    metalDark: "#7f8c8d",
    asphalt: "#34495e",
    asphaltDark: "#2c3e50",
    carbon: "#555459",
    carbonDark: "#3b3a3e",
   
    
    /* default colors */
    primary: "#2ecc71",
    secondary: "#ecf0f1",
    container:"#2d2d2d",
    danger:"#f37272",
    ligth:"#ecf0f1",
    dark:"233240",
    background:"#191919",
    text:"#fff",
    link:"#3498db",

    /* brands */

  },


  fontFamily: {
    heading: ["IBM Plex Sans", "sans-serif"].join(","),
    sans: ["Open Sans", "Arial", "Helvetica", "sans-serif"].join(","),
    mono: ["IBM Plex Mono", "serif"].join(","),
  },
  fontSize: {
    xs: rem(8),
    sm: rem(10),
    md: rem(16),
    base: rem(24),
    lg: rem(32),
    xl: rem(40),
    "2xl": rem(24),
    "3xl": rem(32),
    "4xl": rem(40),
    "5xl": rem(64),
  },
  breakpoints: {
    xs:'0',
    sm:'576px',
    md:'768px',
    lg:'992px',
    xl:'1200px',
    xxl:'1440px',
  },
};

export function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
