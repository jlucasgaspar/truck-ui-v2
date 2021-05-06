import { Routes } from 'router/Routes';
import {
  AllInboxTwoTone, BusinessCenterTwoTone, ContactsTwoTone, LocalShippingTwoTone
} from '@material-ui/icons';

export const menuItems = [
  {
    id: 'cte',
    title: 'CTE',
    isSelected: false,
    link: Routes.CTES,
    Icon: AllInboxTwoTone
  },
  {
    id: 'parceiros',
    title: 'Parceiros',
    isSelected: false,
    link: Routes.PARTNERS,
    Icon: BusinessCenterTwoTone
  },
  {
    id: 'motoristas',
    title: 'Motoristas',
    isSelected: false,
    link: Routes.DRIVERS,
    Icon: ContactsTwoTone
  },
  {
    id: 'veiculos',
    title: 'Veículos',
    isSelected: false,
    link: Routes.VEHICLES,
    Icon: LocalShippingTwoTone
  }
];