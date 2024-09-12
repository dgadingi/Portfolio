import "../styles/globals.css";
import React from "react";

export const metadata = {
  title: "Portfolio DNS",
  description: "Portfolio DNS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
