import theme from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase"
import { ButtonSize, buttonSize } from "./buttonSize";
import { ColorVariant, colorVariantBy, Variant } from "./colorVariantBy";

interface ButtonProps extends ButtonBaseProps{
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}
export default function Button({
  styleSheet, 
  fullWidth, 
  colorVariant,
  variant,
  size,
  children
}: ButtonProps){
  const theme = useTheme();
  return(
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        alignItems: 'center',
        ...colorVariantBy(theme, colorVariant, variant),
        ...buttonSize[size],
        ...(fullWidth &&{
          alignSelf: 'initial'
        }),
        ...styleSheet
      }}
    >
      {children}
    </ButtonBase>
  )
}

Button.defaultProps = {
  fullWidth: false,
  variant: 'contained',
  colorVariant: 'primary',
  size: 'lg'
}

Button.Base = ButtonBase
