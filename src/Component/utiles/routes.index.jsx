import LogInScreen from "../Login/LogInScreen";
import NewCreate from "../New Create/NewCreate";
import PendingSurvey from "../Pending Survey/PendingSurvey";

const routes = [
  {
    routeId: 1,
    path: "/DMS_Survey/",
    component: LogInScreen,
  },
  {
    routeId: 2,
    path: "/DMS_Survey/New_Survey",
    component: NewCreate,
  },
  {
    routeId: 3,
    path: "/DMS_Survey/Pending_Survey",
    component: PendingSurvey,
  },
];

export default routes;
