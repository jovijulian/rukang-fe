
import HomePage from '../pages/home.f7';
import LoginPage from '../pages/login.f7'
import RegistPage from '../pages/regist.f7'
import CustomerHome from '../pages/customer/home.f7'
import Talent from '../pages/customer/listTalent.f7'

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/regist/',
    component: RegistPage,
  },
  {
    path: '/customer-home/',
    component: CustomerHome,
  },
  {
    path: '/talent/:id',
    component: Talent,
  },
];

export default routes;