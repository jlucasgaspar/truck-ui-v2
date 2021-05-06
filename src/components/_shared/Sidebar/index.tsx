import React, { useCallback } from 'react';
import clsx from 'clsx';
import { Drawer, Collapse, List, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore, ChevronLeft, ChevronRight } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './styles';

type ISidebarProps = {
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
  menuItems: any;
  setMenuItems: any;
}

export const Sidebar: React.FC<ISidebarProps> = ({ sidebarIsOpen, setSidebarIsOpen, menuItems, setMenuItems }) => {
  const style = useStyles();
  const theme = useTheme();

  const handleOpenMenuItem = useCallback((clickedItem: any) => {
    const newMenuItems = menuItems.map((item: any) => {
      if (item.id === clickedItem.id) return { ...item, isOpen: !clickedItem.isOpen };
      else return { ...item, isOpen: false };
    });

    return setMenuItems(newMenuItems);
  }, [menuItems, setMenuItems]);

  const handleMouseLeave = useCallback(() => {
    setSidebarIsOpen(false);
    return setMenuItems(menuItems.map((item: any) => ({ ...item, isOpen: false })));
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
        <React.Fragment key={item.id}>
          <ListItem button onClick={() => handleOpenMenuItem(item)} key={item.id}>
            <ListItemIcon>
              <item.Icon className={item.isOpen ? style.iconStrong : style.icon} />
            </ListItemIcon>
            <ListItemText primary={item.title} className={item.isOpen ? style.iconStrong : undefined} />
            {item.isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={item.isOpen} timeout="auto">
            <List component="div" disablePadding key={item.id}>
              {item.submenu.map((subItem: any) => (
                <ListItem button className={style.nested} key={subItem.text}>
                  <ListItemIcon>
                    <subItem.Icon className={item.isOpen ? style.iconStrong : style.icon} />
                  </ListItemIcon>
                  <ListItemText primary={subItem.text} className={item.isOpen ? style.iconStrong : undefined} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </Drawer>
  );
}