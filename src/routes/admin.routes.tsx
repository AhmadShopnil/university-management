import AdminAdashboard from "../pages/admin/AdminAdashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";
import GetAcademicSemister from "../pages/admin/academicManagement/GetAcademicSemister";

// export const adminPaths = [
//   {
//     index: true,
//     element: <AdminAdashboard></AdminAdashboard>,
//   },
//   {
//     path: "dashboard",
//     element: <AdminAdashboard></AdminAdashboard>,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent></CreateStudent>,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin></CreateAdmin>,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty></CreateFaculty>,
//   },
// ];

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminAdashboard></AdminAdashboard>,
  },
  {
    name: "AcademicSemister Management",
    children: [
      {
        name: " Academic Semister",
        path: "academic-semesters",
        element: <GetAcademicSemister></GetAcademicSemister>,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "Create Student",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    ],
  },
];

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((childItem) => {
//       acc.push({
//         path: childItem.path,
//         element: childItem.element,
//       });
//     });
//   }
//   return acc;
// }, []);

// export const adminSidebarItems = adminPaths.reduce(
//   (acc: TSidebarItems[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((childItem) => ({
//           key: childItem.name,
//           label: (
//             <NavLink to={`/admin/${childItem.path}`}>{childItem.name}</NavLink>
//           ),
//         })),
//       });
//     }
//     return acc;
//   },
//   []
// );
