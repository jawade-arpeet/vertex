import React from "react";

import "@/styles/globals.css";
import { fontSans } from "@/lib/font";

const Layout: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
    </html>
  );
};

export default Layout;
