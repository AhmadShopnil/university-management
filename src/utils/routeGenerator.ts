import { TRoute, TUserPath } from "../types/sidebar.type";

export const routeGenerator = (pathItems: TUserPath[]) => {
  const routes = pathItems.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((childItem) => {
        acc.push({
          path: childItem.path!,
          element: childItem.element,
        });
      });
    }
    return acc;
  }, []);
  return routes;
};
