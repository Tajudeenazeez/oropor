import { Flex } from "@chakra-ui/react";
import React from "react";
import Navbars from "../navBar/Navbars";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Navbars />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
