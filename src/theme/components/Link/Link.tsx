import React from "react";
import NextLink from 'next/link';
import Text from "../Text/Text";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";
import { StyleSheet } from "@src/theme/StyleSheet";

interface LinkProps{
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'negative';
  colorVariantEnabled?: boolean;
}

const Link =  React.forwardRef(({
  href,
  children,
  colorVariant,
  styleSheet,
  colorVariantEnabled,
  ...props 
}: LinkProps, ref) => {
  
  const theme = useTheme();

  const currentColorSet = {
    color: theme.colors[colorVariant].x500,
    hover: {
      color: theme.colors[colorVariant].x400,
    },
    focus: {
      color: theme.colors[colorVariant].x600
    }
  }

  const linkProps = {
    tag: 'a',
    ref,
    href,
    styleSheet: {
      textDecoration: 'none',
      ...colorVariantEnabled && {
        color: currentColorSet.color,
      },
      ...styleSheet,
      hover:{
        ...styleSheet?.hover,
        ...colorVariantEnabled && {
          color: currentColorSet.hover.color
        }
      },
      focus:{
        ...styleSheet?.focus,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color
        }
      },
    },
    children,
    ...props
  }

  const isInternalLink = href.startsWith('http');
  if(isInternalLink) return <Text 
    {...{
      target: '_blank',
      ...linkProps
    }}
  />

  return(
    <NextLink href={href} passHref style={{
      textDecoration: 'none'
    }}>
        <Text {...linkProps} />
    </NextLink>
  )
})

Link.defaultProps = {
  colorVariant: 'primary',
  colorVariantEnabled: true
}

export default Link;
