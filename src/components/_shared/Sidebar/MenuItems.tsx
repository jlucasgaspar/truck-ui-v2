import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { menuItemsList } from './menuItemsList';
import { useStyles } from './styles';

type ISidebarProps = {
  sidebarIsOpen: boolean;
}

export const MenuItems: React.FC<ISidebarProps> = ({ sidebarIsOpen }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('');
  const style = useStyles();

  const handleClassName = useCallback((className: string, itemId: string) => {
    return (itemId === selectedMenuItem && sidebarIsOpen === true) ? className : undefined
  }, [selectedMenuItem, sidebarIsOpen]);

  return (
    <div className={style.marginTop}>
      {menuItemsList.map(item => (
        <Link to={item.link} className={style.link} key={item.id}>
          <ListItem
            className={handleClassName(style.strongOrange, item.id)}
            onClick={() => setSelectedMenuItem(item.id)}
            key={item.id}
            button
          >
            <ListItemIcon>
              <item.Icon className={item.id === selectedMenuItem ? style.textBlack : undefined} />
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              className={handleClassName(style.textBlack, item.id)}
            />
          </ListItem>
        </Link>
      ))}
    </div>
  );
}