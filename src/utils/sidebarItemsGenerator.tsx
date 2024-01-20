import { TSidebarItems, TUserPath } from "../types/sidebar.type";
import { NavLink } from "react-router-dom";

export const sidebarItemsGenerator = (userPaths: TUserPath[], role: string) => {
  const sidebarItems = userPaths.reduce((acc: TSidebarItems[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((childItem) => ({
          key: childItem.name,
          label: (
            <NavLink to={`/${role}/${childItem.path}`}>
              {childItem.name}
            </NavLink>
          ),
        })),
      });
    }
    return acc;
  }, []);
  return sidebarItems;
};
