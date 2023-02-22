import {BaseComponent} from "@src/theme/BaseComponent";
import * as icons from './svgs/_index';
import { StyleSheet } from "@src/theme/StyleSheet";

const iconSizes = {
  xs: '12px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '36px'
}

interface IconProps{
  name?: keyof typeof icons;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconSizes;
  fill?: string;
}

export default function Icon({ size, name, fill,...props }: IconProps){
  const CurrentIcon = icons[name] || icons['default_icon'];
  return(
    <BaseComponent
      as="svg"
      styleSheet={{
        width: iconSizes[size],
        heigth: iconSizes[size],
        color: fill? fill:'gray'
      }}
      color="inherit"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CurrentIcon/>
    </BaseComponent>
  )
}

Icon.defaultProps = {
  name: 'default_icon',
  size: 'md'
}
