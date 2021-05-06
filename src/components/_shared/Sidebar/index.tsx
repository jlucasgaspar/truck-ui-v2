import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, IconButton, ListItem, ListItemIcon, ListItemText, useTheme } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import clsx from 'clsx';
import { useStyles } from './styles';

type ISidebarProps = {
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
  menuItems: any;
  setMenuItems: any;
}

export const Sidebar: React.FC<ISidebarProps> = (
  { sidebarIsOpen, setSidebarIsOpen, menuItems, setMenuItems }
) => {
  const style = useStyles();
  const theme = useTheme();

  const handleSelectMenuItem = useCallback((clickedItem: any) => {
    const newMenuItems = menuItems.map((item: any) => {
      if (item.id === clickedItem.id) return { ...item, isSelected: true };
      else return { ...item, isSelected: false };
    });

    return setMenuItems(newMenuItems);
  }, [menuItems, setMenuItems]);

  const handleMouseLeave = useCallback(() => {
    setSidebarIsOpen(false);
    return setMenuItems(menuItems.map((item: any) => ({ ...item, isSelected: false })));
  }, [setSidebarIsOpen, menuItems, setMenuItems]);

  return (
    <Drawer
      onMouseEnter={() => setSidebarIsOpen(true)}
      onMouseLeave={() => handleMouseLeave()}
      variant="permanent"
      classes={{ paper: clsx({
        [style.drawerOpen]: sidebarIsOpen,
        [style.drawerClose]: !sidebarIsOpen
      })}}
      className={clsx(style.drawer, {
        [style.drawerOpen]: sidebarIsOpen,
        [style.drawerClose]: !sidebarIsOpen
      })}
    >
      <div className={style.toolbar}>
        <IconButton onClick={() => setSidebarIsOpen(false)}>
          {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </div>

      <div style={{ height: 25 }} />

      {menuItems.map((item: any) => (
        <Link to={item.link} className={style.link} key={item.id}>
          <ListItem
            className={item.isSelected ? style.strongOrange : undefined}
            onClick={() => handleSelectMenuItem(item)}
            key={item.id}
            button
          >
            <ListItemIcon>
              <item.Icon className={item.isSelected ? style.textBlack : undefined} />
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              className={item.isSelected ? style.textBlack : undefined}
            />
          </ListItem>
        </Link>
      ))}
    </Drawer>
  );
}