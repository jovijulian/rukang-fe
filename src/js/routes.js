
import HomePage from '../pages/home.f7';
import LoginPage from '../pages/login.f7'
import RegistPage from '../pages/regist.f7'
import CustomerHome from '../pages/customer/home.f7'
import Talent from '../pages/customer/listTalent.f7'
import Order from '../pages/customer/Order.f7'
import Transaction from '../pages/customer/transaction.f7'
import DetailTransaction from '../pages/customer/detailTransaction.f7'
import Review from '../pages/customer/review.f7'

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
  {
    path: '/order/:idTalent/:idCategory',
    component: Order,
  },
  {
    path: '/transaction/',
    component: Transaction,
  },
  {
    path: '/detail-transaction/:transaction_id',
    component: DetailTransaction,
  },
  {
    path: '/review/:review_id',
    component: Review,
  },
];

export default routes;