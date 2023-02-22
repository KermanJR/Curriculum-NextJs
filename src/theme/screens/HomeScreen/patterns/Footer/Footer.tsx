import Box from "@src/theme/components/Box/Box";
import Icon from "@src/theme/components/Icon/Icon";
import Text from "@src/theme/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer(){
  const theme = useTheme()
  return(
    <Box
      styleSheet={{
        height: '80px',
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '24px',
        paddingVertical: '24px',
        textAlign: 'center',
        marginTop: '5rem'
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <Text variant="body4">
          Desenvolvido por Kerman Mendes
        </Text>
        <Icon 
          size='lg'
          name="next"
        />
      </Box>
      
    </Box>
  )
}
