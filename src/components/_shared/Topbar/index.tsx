import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Menu, MenuItem, IconButton, Toolbar, AppBar, Typography, Hidden } from '@material-ui/core';
import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons';
import { isEmpty } from 'lodash';
import { IRootState } from 'store/store';
import { logoImage } from 'assets/images';
import { useStyles } from './styles';

type ITopbarProps = {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  menuItems: any;
  setMenuItems: any;
}

export const Topbar: React.FC<ITopbarProps> = ({ setSidebarIsOpen, sidebarIsOpen, menuItems, setMenuItems }) => {
  const { company } = useSelector((state: IRootState) => state.companyState);
  const { user } = useSelector((state: IRootState) => state.userState);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleMenuIconClick = useCallback(() => {
    setSidebarIsOpen(!sidebarIsOpen);
    const newMenuItems = menuItems.map((item: any) => ({ ...item, isSelected: false }));
    setMenuItems(newMenuItems);
  }, [sidebarIsOpen, menuItems, setSidebarIsOpen, setMenuItems]);

  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={handleMenuIconClick}>
          <MenuIcon />
        </IconButton>

        <img src={logoImage} alt="Truckify Logo" className={classes.logo} />

        <Hidden smDown>
          <Typography>
            {isEmpty(user) && 'Carregando... '}

            {!isEmpty(user) && (
              user.name ? user.name : 'Usuário'
            )}

            {!isEmpty(user) && (
              company.nome_fantasia ? `- ${company.nome_fantasia}` : '- Sem empresa'
            )}
          </Typography>
        </Hidden>

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