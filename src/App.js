import styled from "styled-components";
import { Route, Switch } from "react-router";
import Home from "./Pages/Home";
import GuardedRoute from "./utils/GuardedRoute";
import { authValidator } from "./utils/AuthValidator";
import Login from "./Pages/Login";
import AddNewProduct from "./Pages/AddNewProduct";

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/login" component={Login} />
        <GuardedRoute
          path="/"
          component={Home}
          redirectTo="/login" //(Optional) Redirect to '/login' if validatorFunction returns false. Will redirect to '/' if not provided.
          validatorFunction={authValidator()}
        />
      </Switch>
    </Container>
  );
}

export default App;

const Container = styled.div``;
