import { AllInboxTwoTone, BusinessCenterTwoTone } from '@material-ui/icons';
import { ContactsTwoTone, LocalShippingTwoTone } from '@material-ui/icons';
import { Routes } from 'router/Routes';

export const menuItemsList = [
  {
    id: 'cte',
    title: 'CTE',
    link: Routes.CTES,
    Icon: AllInboxTwoTone
  },
  {
    id: 'parceiros',
    title: 'Parceiros',
    link: Routes.PARTNERS,
    Icon: BusinessCenterTwoTone
  },
  {
    id: 'motoristas',
    title: 'Motoristas',
    link: Routes.DRIVERS,
    Icon: ContactsTwoTone
  },
  {
    id: 'veiculos',
    title: 'Veículos',
    link: Routes.VEHICLES,
    Icon: LocalShippingTwoTone
  }
];