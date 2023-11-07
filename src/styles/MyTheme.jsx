const { grey } = require("@mui/material/colors");

const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          medo: {
            main: "#64748B",
          },
          fev: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          medo: {
            main: "teal",
          },
          fev: {
            main: grey[800],
          },
        }),
  },
});
export default getDesignTokens;
