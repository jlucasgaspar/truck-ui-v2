import { useState, Fragment, useCallback } from "react";
import { Topbar, Sidebar } from "components/_shared";
import { useStyles } from "./styles";

export const AppLayout: React.FC = ({ children }) => {
  const [sidebarIsOpen, setSidebarOpen] = useState<boolean>(false);
  const style = useStyles();
  
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const openSidebar = useCallback(() => setSidebarOpen(true), []);

  return (
    <Fragment>
      <Topbar sidebarIsOpen={sidebarIsOpen} closeSidebar={closeSidebar} openSidebar={openSidebar} />
      <div className={style.root}>
        <Sidebar isOpen={sidebarIsOpen} closeSidebar={closeSidebar} openSidebar={openSidebar} />
        <main className={style.content}>
          <div className={style.toolbar} />
          {children}
        </main>
      </div>
    </Fragment>
  );
}