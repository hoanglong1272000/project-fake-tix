import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonScrollTop from "./components/ButtonScrollTop";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/detail/:id" component={Detail} />
        <Route exact path="/" component={Home} />
      </Switch>

      <Footer />
      <ButtonScrollTop />
    </BrowserRouter>
  );
}

export default App;
