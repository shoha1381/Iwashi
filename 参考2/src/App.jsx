import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DivWrapper } from "./screens/DivWrapper";
import { IpadPro } from "./screens/IpadPro";
import { IpadProScreen } from "./screens/IpadProScreen";
import { IpadProWrapper } from "./screens/IpadProWrapper";
import { Screen } from "./screens/Screen";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { Screen6 } from "./screens/Screen6";
import { Screen8 } from "./screens/Screen8";
import { Screen9 } from "./screens/Screen9";
import { Screen10 } from "./screens/Screen10";
import { Screen11 } from "./screens/Screen11";
import { Screen12 } from "./screens/Screen12";
import { Screen13 } from "./screens/Screen13";
import { Screen14 } from "./screens/Screen14";
import { Screen15 } from "./screens/Screen15";
import { Screen16 } from "./screens/Screen16";
import { Screen17 } from "./screens/Screen17";
import { Screen18 } from "./screens/Screen18";
import { Screen19 } from "./screens/Screen19";
import { Screen21 } from "./screens/Screen21";
import { Screen23 } from "./screens/Screen23";
import { Screen24 } from "./screens/Screen24";
import { Screen25 } from "./screens/Screen25";
import { Screen26 } from "./screens/Screen26";
import { Screen27 } from "./screens/Screen27";
import { Screen28 } from "./screens/Screen28";
import { Screen29 } from "./screens/Screen29";
import { ScreenScreen } from "./screens/ScreenScreen";
import { ScreenWrapper } from "./screens/ScreenWrapper";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <IpadPro />,
  },
  {
    path: "/ipad-pro-11u34-465",
    element: <IpadPro />,
  },
  {
    path: "/ipad-pro-11u34-141",
    element: <IpadProScreen />,
  },
  {
    path: "/ipad-pro-11u34-142",
    element: <IpadProWrapper />,
  },
  {
    path: "/ipad-pro-11u34-161",
    element: <DivWrapper />,
  },
  {
    path: "/ipad-pro-11u34-163",
    element: <Screen4 />,
  },
  {
    path: "/ipad-pro-11u34-165",
    element: <Screen5 />,
  },
  {
    path: "/ipad-pro-11u34-166",
    element: <Screen6 />,
  },
  {
    path: "/u26045u34899u19968u35239u65288u26085u65289-1",
    element: <Screen />,
  },
  {
    path: "/ipad-pro-11u34-369",
    element: <Screen8 />,
  },
  {
    path: "/ipad-pro-11u34-423",
    element: <Screen9 />,
  },
  {
    path: "/ipad-pro-11u34-410",
    element: <Screen10 />,
  },
  {
    path: "/ipad-pro-11u34-409",
    element: <Screen11 />,
  },
  {
    path: "/ipad-pro-11u34-370",
    element: <Screen12 />,
  },
  {
    path: "/ipad-pro-11u34-371",
    element: <Screen13 />,
  },
  {
    path: "/ipad-pro-11u34-373",
    element: <Screen14 />,
  },
  {
    path: "/ipad-pro-11u34-372",
    element: <Screen15 />,
  },
  {
    path: "/ipad-pro-11u34-374",
    element: <Screen16 />,
  },
  {
    path: "/ipad-pro-11u34-367",
    element: <Screen17 />,
  },
  {
    path: "/ipad-pro-11u34-366",
    element: <Screen18 />,
  },
  {
    path: "/ipad-pro-11u34-368",
    element: <Screen19 />,
  },
  {
    path: "/u38971u24230u12398u12452u12513u12540u12471u12441",
    element: <ScreenScreen />,
  },
  {
    path: "/ipad-pro-11u34-407",
    element: <Screen21 />,
  },
  {
    path: "/u39015u23458u27010u35201u65288u21021u22238u12539u36913u65289-1",
    element: <ScreenWrapper />,
  },
  {
    path: "/u26045u34899u19968u35239u65288u26085u65289-2",
    element: <Screen23 />,
  },
  {
    path: "/ipad-pro-11u34-406",
    element: <Screen24 />,
  },
  {
    path: "/u39015u23458u27010u35201u65288u26082u23384u12539u26085u65289u65288u12510u12493u12540u12471u12441u12515u12540u65289-1",
    element: <Screen25 />,
  },
  {
    path: "/u39015u23458u27010u35201u65288u21021u22238u12539u26085u65289-1",
    element: <Screen26 />,
  },
  {
    path: "/u26045u34899u19968u35239u65288u36913u65289-1",
    element: <Screen27 />,
  },
  {
    path: "/u39015u23458u27010u35201u65288u21021u22238u12539u26085u65289-2",
    element: <Screen28 />,
  },
  {
    path: "/u39015u23458u27010u35201u65288u21021u22238u12539u36913u65289-2",
    element: <Screen29 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
