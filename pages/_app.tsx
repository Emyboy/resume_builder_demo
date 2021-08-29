import "../styles/bootstrap.min.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../src/redux/store/store";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = {
    bg_color: "#0e1424",
    fg_color: "#1C253F",
    accent_color: "#353d5f",
    theme_color: "#fe5cfb",
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
