import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import cls from './Section.module.css';
import { CSSProperties } from 'react';

interface SectionProps {
  Icon: OverridableComponent<SvgIconTypeMap>;
  title: string;
  color: string;
  selected?: boolean;
}

const Section = (props: SectionProps) => {
  const { Icon, color, title, selected } = props;

  const stylez: CSSProperties = {
    borderBottom: `3px solid ${color}`,
    color: selected ? color : 'gray',
  };

  return (
    <div
      className={`${cls.section} ${selected ? cls.active : ''}`}
      style={stylez}
    >
      <Icon />
      <h3>{title}</h3>
    </div>
  );
};
export default Section;
