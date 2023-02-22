import Box from "@src/theme/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Text from "@src/theme/components/Text/Text";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider";
import Link from "@src/theme/components/Link/Link";
import SideMenu from "./patterns/SideMenu/SideMenu";

export default function HomeScreen(){
  const theme = useTheme();
  return(
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x050,
        alignItems: 'center'
      }}
    >

      <Background />
      <Menu/>
      <Feed>
        <Feed.Header/>
        <Text variant="heading2" tag="p">
          Últimas atualizações
        </Text>
        <Feed.Posts/>
      </Feed>  
      <Footer/>
    </Box>
  )
}
