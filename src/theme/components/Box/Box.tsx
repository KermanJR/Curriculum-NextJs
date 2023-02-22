import React from "react";
import { BaseComponent } from "../../BaseComponent";
import { StyleSheet } from "../../StyleSheet";

interface BoxProps{
  tag?: 'main' | 'div' | 'article' | 'section'| string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  className?: string;
}

export default function Box({ styleSheet, children, tag, ...props }: BoxProps){
  const Tag = tag || 'div';
  return(
    <BaseComponent 
      as={Tag} 
      styleSheet={styleSheet} 
      {...props}
    >
      {children}
    </BaseComponent>
  )
}
