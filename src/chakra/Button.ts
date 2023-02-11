import { ComponentStyleConfig } from "@chakra-ui/react";

    export const Button: ComponentStyleConfig = {
        baseStyle: {
            borderRadius: "60px",
            color: "brand.900",
            border: "2px solid brand.200",
            textColor:"brand.200"
        },
        sizes: {
            sm: {
                fontSize:"8pt"
            },
            md: {
                fontSize:"10pt"
            }
        },
        variants: {
            solid:{
                color:"brand.50",
                bg:"brand.900",
                _hover: {
                    bg: "brand.900",
                    textColor:"brand.300"
                }
            },
            outline:{
                color:"brand.900",
                border: "1px solid",
                borderColor: "brand.300"
            },
            oauth:{
                height:"34px",
                border: "1px solid",
                borderColor:"brand.300",
                _hover:{
                    textColor: "brand.300",
                    
                }
            }
            
        },
        

}