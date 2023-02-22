import { BaseComponent } from "@src/theme/BaseComponent";
import { ThemeTypographyVariants } from "@src/theme/theme";
import React from "react";
import { useTheme } from "@src/theme/ThemeProvider";
import { StyleSheet } from "@src/theme/StyleSheet";

interface TextProps{
  variant?: ThemeTypographyVariants;
  tag?: 'a' | 'p' | 'li' | 'h1' | 'h2' | 'h3'| string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  ref: any;
}

const Text = React.forwardRef((
  {
    tag,
    styleSheet,
    variant, 
    ...props
  }: TextProps, ref) => {

  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];

  return(
      <BaseComponent
        as={tag} 
        styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet
        }} 
        {...props}
        ref={ref}
      />
  )
});

Text.defaultProps = {
  tag: 'p',
  variant: 'body2'
}

export default Text;
