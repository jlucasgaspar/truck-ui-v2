import { useCallback, useEffect } from "react";
import { Drawer, IconButton, useTheme } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import clsx from "clsx";
import { useStyles } from "./styles";
import { MenuItems } from "./MenuItems";

type ISidebarProps = {
  isOpen: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
}

export const Sidebar: React.FC<ISidebarProps> = ({ isOpen, closeSidebar, openSidebar }) => {
  const style = useStyles();
  const theme = useTheme();

  useEffect(() => {
    if (!isOpen) return closeSidebar();
  }, [isOpen, closeSidebar]);

  const onMouseLeave = useCallback(() => {
    closeSidebar();
  }, [closeSidebar]);

  return (
    <Drawer
      variant="permanent"
      onMouseEnter={openSidebar}
      onMouseLeave={onMouseLeave}
      classes={{ paper: clsx({
        [style.drawerOpen]: isOpen,
        [style.drawerClose]: !isOpen
      })}}
      className={clsx(style.drawer, {
        [style.drawerOpen]: isOpen,
        [style.drawerClose]: !isOpen
      })}
    >
      <div className={style.toolbar}>
        <IconButton onClick={closeSidebar}>
          {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </div>

      <MenuItems sidebarIsOpen={isOpen} />
    </Drawer>
  );
}