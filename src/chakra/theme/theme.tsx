import { extendTheme } from "@chakra-ui/react"
import { Button } from "../Button"
const theme = extendTheme({
  colors: {
    brand: {
      50: "#f5f5f5",
      100: "#F0F8FC",
      200: "#82BFE1",
      300: "#BFCED6",
      400: "#9F398E",
      500: "#f7fafc",
      600: "#123244",
      700: "#062536",
      800: "#204D65",
      900: "#0C4767",

    },
  },
  components: {
    Button,
  }
})

export default theme