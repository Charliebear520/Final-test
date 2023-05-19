import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#F64343",
    colorBgBase: "#2D4325",
    colorTextBase: "#F0E9DD",
    colorTextFooter: "#F0E9DD",
    colorBgFooter: "#3B5233",
  },
  components: {
    Button: {
      colorPrimary: "#001E00;",
      colorPrimaryHover: "#9192f5",
    },
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBgFooter: "#FAF7F2",
    colorTextFooter: "#001E00",
  },
  components: {
    Button: {
      colorPrimary: "#001E00",
      colorPrimaryHover: "#036903",
    },
  },
};

export { lightTheme, darkTheme };
