import { useCallback, useState } from 'react';
import { Menu, MenuItem, IconButton, Typography, Toolbar, AppBar } from '@material-ui/core';
import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons';
import { useStyles } from './styles';

type ITopbarProps = {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  menuItems: any;
  setMenuItems: any;
}

export const Topbar: React.FC<ITopbarProps> = ({ setSidebarIsOpen, sidebarIsOpen, menuItems, setMenuItems }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuIconClick = useCallback(() => {
    setSidebarIsOpen(!sidebarIsOpen);
    setMenuItems(menuItems.map((item: any) => ({ ...item, isOpen: false })));
  }, [sidebarIsOpen, menuItems, setSidebarIsOpen, setMenuItems]);

  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={handleMenuIconClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Photos
        </Typography>
        <div>
          <IconButton onClick={event => setAnchorEl(event.currentTarget)} color="inherit">
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>My account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}