import Box from "@src/theme/components/Box/Box";
import Text from "@src/theme/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import Icon from "@src/theme/components/Icon/Icon";
import Button from "@src/theme/components/Button/Button";
import ButtonBase from "@src/theme/components/Button/ButtonBase";
import Link from "@src/theme/components/Link/Link";

export default function Menu(){
  const theme = useTheme();
  const baseSize = '40px';
  return(
    <Box 
      styleSheet={{
        width: {md: '90%', xs: '90%'},
        height: 'auto',
        position: 'absolute',
        left: 0, right: 0, top: '0',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '3rem auto',
        color: theme.colors.neutral.x000,
        borderBottom: `1px solid ${theme.colors.neutral.x000}`
      }}
    >
      <Box
        styleSheet={{
          borderRadius: '8px',
          height: '85px',
          paddingHorizontal: '8px'
        }}
      >
        <Text
          tag="h2"
          styleSheet={{
            fontSize: '2rem',
          }}
        >
          Kerman
        </Text>
        <Text
          styleSheet={{
            marginTop: '-4px'
          }}
        >
          Mendes
        </Text>
      </Box>

      <Box
        tag="ul"
        styleSheet={{
          display: 'flex',
          flexDirection: 'row',
          gap: '40px'
        }}
      >
        <Text>
          <Link href="/" colorVariant="neutral">
            Projetos
          </Link>
        </Text>
        <Text>
          <Link href="/" colorVariant="neutral">
            Artigos
          </Link>
        </Text> 
        <Text>
          <Link href="/" colorVariant="neutral">
            Contato
          </Link>
        </Text> 
        <Text>
          <Link href="/" colorVariant="neutral">
            Projetos
          </Link>
        </Text>          
      </Box>
  
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px'
        }}
      >
        <Button 
          styleSheet={{
            backgroundColor: theme.colors.neutral.x000,
          }}
        >
          <Icon 
            name="lightIcon"
          />
        </Button>
        <Button 
          colorVariant="primary"
        >
          <Icon name="darkMode" fill="#fff"/>
        </Button>
      </Box>
    </Box>
  )
}
