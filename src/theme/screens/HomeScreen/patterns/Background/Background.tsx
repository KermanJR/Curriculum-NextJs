import Box from "@src/theme/components/Box/Box";
import theme from "@src/theme/theme";

export default function Background(){
  const imageUrl = 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
  return(
    <Box
      styleSheet={{
        width: '100%',
        height: '500px',
        background: theme.colors.neutral.x900
      }}
    />
  )
}
