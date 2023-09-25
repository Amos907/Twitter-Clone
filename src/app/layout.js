import "./globals.css";
import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";

export const metadata = {
  title: "Twitter Clone",
  description: "This is a Twitter Clone by Slikful",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
