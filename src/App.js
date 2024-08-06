import './App.css';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import UserPortal from './Components/userportal';
import Signin_Signup from './Components/signup_signin';
import BookingForm from './Components/bookingform';
import ManagerDashboard from './Components/dashboard';
import ManageRooms from './Components/managerooms';
import ManageBookings from './Components/managebookins';
import ManageEmployees from './Components/manageemployee';
import Reviews from './Components/reviews';
import AddEmployees from './Components/addemployee';
import ContactForm from './Components/contactus';
import Rooms from './Components/rooms';
import ManageBookedRooms from './Components/ManageBookedrooms';
import BookingHistory from './Components/bookingHistroy';
import ApprovedBookings from './Components/approvedbook';

function App()
{
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={UserPortal} />
          <Route exact path='/userportal' component={UserPortal} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/contactus' component={ContactForm} />
          <Route exact path='/bookingform' component={BookingForm} />
          <Route exact path='/signup_signin' component={Signin_Signup} />
          <Route exact path='/dashboard' component={ManagerDashboard} />
          <Route exact path='/managerooms' component={ManageRooms} />
          <Route exact path='/ManageBookedrooms' component={ManageBookedRooms} />
          <Route exact path='/bookingHistroy' component={BookingHistory} />
          <Route exact path='/managebookins' component={ManageBookings} />
          <Route exact path='/approvedbook' component={ApprovedBookings} />
          <Route exact path='/manageemployee' component={ManageEmployees} />
          <Route exact path='/addemployee' component={AddEmployees} />
          <Route exact path='/reviews' component={Reviews} />
        </Switch>
    </div>
  );
}

export default App;
