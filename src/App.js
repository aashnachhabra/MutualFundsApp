import "./App.css";
import LoginPage from "./Components/LoginPage";
import SignUp from "./Components/SignUp";
import { Route, Switch, Redirect } from "react-router-dom";
import Listings from "./Components/Listings";
import ErrorPage from "./Components/ErrorPage";
import FundListing from "./Components/FundListing";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/funds" component={Listings} />
        <Route path="/fundInfo" component={FundListing} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
