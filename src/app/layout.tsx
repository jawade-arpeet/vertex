import React from "react";
import { Metadata } from "next";

import "@/styles/globals.css";
import { geist } from "@/lib/font";

export const metadata: Metadata = {
  title: "Vertex",
};
const Layout: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
};

export default Layout;
