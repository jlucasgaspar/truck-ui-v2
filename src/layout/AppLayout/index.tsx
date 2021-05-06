import { useState } from 'react'
import { Topbar } from 'components/_shared/Topbar';
import { Sidebar } from 'components/_shared/Sidebar';
import { menuItems as menuItemsArray } from 'components/_shared/Sidebar/menuItems';
import { useStyles } from './styles';

export const AppLayout: React.FC = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState(menuItemsArray);
  const style = useStyles();

  return (
    <>
      <Topbar
        setSidebarIsOpen={setSidebarIsOpen}
        menuItems={menuItems}
        setMenuItems={setMenuItems}
        sidebarIsOpen={sidebarIsOpen}
      />
      <div className={style.root}>
        <Sidebar
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
          menuItems={menuItems}
          setMenuItems={setMenuItems}
        />
        <main className={style.content}>
          <div className={style.toolbar} />
          {children}
        </main>
      </div>
    </>
  );
}