import {BaseComponent} from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";

interface Imageprops{
  src: string;
  alt: string;
  styleSheet?: StyleSheet;
}

export default function Image({ src, alt, ...props }: Imageprops){
  return(
    <BaseComponent
      as="img"
      src={src}
      alt={alt}
      {...props}
    />
  )
}
