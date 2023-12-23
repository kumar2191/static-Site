import React from "react";
import { MantineProvider } from "@mantine/core";

const AppWrapper = ({ children }: any) => (
  <>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "'Kanit', sans-serif",
        colorScheme: "light",
      }}

    >
      {children}
    </MantineProvider>
  </>
);
export default AppWrapper;
