import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Menu, MenuItem, IconButton, Toolbar, AppBar, Typography, Hidden } from "@material-ui/core";
import { Menu as MenuIcon, AccountCircle } from "@material-ui/icons";
import { isEmpty } from "lodash";
import { IRootState } from "store";
import { logoImage } from "assets/images";
import { useStyles } from "./styles";

type ITopbarProps = {
  sidebarIsOpen: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
}

export const Topbar: React.FC<ITopbarProps> = ({ sidebarIsOpen, closeSidebar, openSidebar }) => {
  const { company } = useSelector((state: IRootState) => state.companyState);
  const { user } = useSelector((state: IRootState) => state.userState);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const onMenuIconClick = useCallback(() => {
    if (sidebarIsOpen) return closeSidebar();
    else return openSidebar();
  }, [sidebarIsOpen, closeSidebar, openSidebar]);

  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={onMenuIconClick}>
          <MenuIcon />
        </IconButton>

        <img src={logoImage} alt="Truckify Logo" className={classes.logo} />

        <Hidden smDown>
          <Typography>
            {isEmpty(user) && "Carregando... "}

            {!isEmpty(user) && (
              user.name ? user.name : "Usuário"
            )}

            {!isEmpty(user) && (
              company.nome_fantasia ? `- ${company.nome_fantasia}` : "- Sem empresa"
            )}
          </Typography>
        </Hidden>

        <div>
          <IconButton onClick={event => setAnchorEl(event.currentTarget)} color="inherit">
            <AccountCircle />
          </IconButton>
          <Menu
            keepMounted
            id="menu-appbar"
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
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