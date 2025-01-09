import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet,
} from "react-router-dom";
import { Index } from "./page/index";
import { ErrorPage } from "./page/error/ErrorPage";
import { UserManage } from "./page/UserManage/UserManage";
import { Login } from "./page/login/Login";
import { Menu } from "./page/Menu/Menu";
import { ModifyMenu } from "./page/ModifyMenu/ModifyMenu";
import { InfoModify } from "./page/InfoModify/InfoModify";
import { PasswordModify } from "./page/PasswordModify/PasswordModify";
import { MeetingRoomManage } from "./page/MeetingRoomManage/MeetingRoomManage";
import { BookingManage } from "./page/BookingManage/BookingManage";
import { Statistics } from "./page/Statistics/Statistics";

const routes = [
  {
    path: "/",
    element: <Index></Index>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Menu></Menu>,
        children: [
          {
            path: "/",
            element: <MeetingRoomManage />,
          },
          {
            path: "user_manage",
            element: <UserManage />,
          },
          {
            path: "meeting_room_manage",
            element: <MeetingRoomManage />,
          },
          {
            path: "booking_manage",
            element: <BookingManage />,
          },
          {
            path: "statistics",
            element: <Statistics />,
          },
        ],
      },
      {
        path: "/user",
        element: <ModifyMenu></ModifyMenu>,
        children: [
          {
            path: "info_modify",
            element: <InfoModify />,
          },
          {
            path: "password_modify",
            element: <PasswordModify />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];
export const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
