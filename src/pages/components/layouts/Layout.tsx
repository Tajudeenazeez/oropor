import { Flex } from "@chakra-ui/react";
import React from "react";
import Navbars from "../navBar/Navbars";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div>
      {/* <Flex align='center' justify='center' bg="brand.900">welcome incoming...</Flex> */}
      <Navbars Children={undefined} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
