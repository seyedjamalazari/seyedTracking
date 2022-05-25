import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/Theme";

import "antd/dist/antd.css";
import "../styles/globals.css";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Navigation from "./Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Header>
            <Navigation />
          </Header>
          <Content>
            <Component {...pageProps} />
          </Content>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
