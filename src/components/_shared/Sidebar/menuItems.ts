import { Routes } from 'router/Routes';
import {
  AllInboxTwoTone,
  AddToPhotosOutlined,
  BusinessCenterTwoTone,
  ListAltOutlined,
  ContactsTwoTone,
  LocalShippingTwoTone,
} from '@material-ui/icons';

export const menuItems = [
  {
    id: 'cte',
    isOpen: false,
    title: 'CTE',
    Icon: AllInboxTwoTone,
    submenu: [
      { link: Routes.CTE_NEW, Icon: AddToPhotosOutlined, text: 'Novo CTE' },
      { link: Routes.CTE_LIST, Icon: ListAltOutlined, text: 'Listar CTEs' }
    ]
  },
  {
    id: 'parceiros',
    title: 'Parceiros',
    isOpen: false,
    Icon: BusinessCenterTwoTone,
    submenu: [
      { link: Routes.CTE_NEW, Icon: AddToPhotosOutlined, text: 'Novo Parceiro' },
      { link: Routes.CTE_LIST, Icon: ListAltOutlined, text: 'Listar Parceiros' }
    ]
  },
  {
    id: 'motoristas',
    title: 'Motoristas',
    isOpen: false,
    Icon: ContactsTwoTone,
    submenu: [
      { link: Routes.DRIVER_NEW, Icon: AddToPhotosOutlined, text: 'Novo Motorista' },
      { link: Routes.DRIVER_LIST, Icon: ListAltOutlined, text: 'Listar Motoristas' }
    ]
  },
  {
    id: 'veiculos',
    title: 'Veículos',
    isOpen: false,
    Icon: LocalShippingTwoTone,
    submenu: [
      { link: Routes.VEHICLE_NEW, Icon: AddToPhotosOutlined, text: 'Novo Veículo' },
      { link: Routes.VEHICLE_LIST, Icon: ListAltOutlined, text: 'Listar Veículos' }
    ]
  }
];