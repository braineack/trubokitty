import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Index from "./pages/Index";
import Installation from "./pages/Installation";
import Ms3x from "./pages/Ms3x";
import DIYpnp from "./pages/Diypnp";
import Tune from "./pages/Tune";
import FAQs from "./pages/FAQs";
import Resources from "./pages/Resources";
import Comments from "./pages/Comments";
import NotFoundPage from "./pages/NotFoundPage";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
      <Route path="ms3xassembly" component={Ms3x}></Route>
      <Route path="diypnpassembly" component={DIYpnp}></Route>
      <Route path="installation" component={Installation}></Route>
      <Route path="tune" component={Tune}></Route>
      <Route path="faqs" component={FAQs}></Route>
      <Route path="resources" component={Resources}></Route>
      <Route path="comments" component={Comments}></Route>
    </Route>
  </Router>,
app);
