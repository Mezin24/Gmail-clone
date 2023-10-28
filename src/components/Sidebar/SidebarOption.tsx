import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import cls from './SidebarOption.module.css';

interface SidebarOptionProps {
  Icon: OverridableComponent<SvgIconTypeMap>;
  title: string;
  active?: boolean;
  value?: number;
}

const SidebarOption = (props: SidebarOptionProps) => {
  const { Icon, title, active, value } = props;
  return (
    <div
      className={`${cls.sidebarOption} ${
        active ? cls['sidebarOption--active'] : ''
      }`}
    >
      <Icon className={cls.icon} />
      <h3 className={cls.title}>{title}</h3>
      <p className={cls.value}>{value}</p>
    </div>
  );
};
export default SidebarOption;
