import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Root from '../Root/Root';
import HomePage from '../../pages/HomePage/HomePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import DetailsPage from '../../pages/DetailsPage/DetailsPage';
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage'
import DonatePage from '../../pages/DonatePage/DonatePage'

const AppRoutes = () => (
  <BrowserRouter>
    <Root path="/">
      <Switch>
        <Route
          exact
          path="/"
          component={HomePage}
        />

        <Route
          exact
          path="/about"
          component={AboutPage}
        />

        <Route
          exact
          path="/contact-us"
          component={ContactUsPage}
        />

        <Route
          exact
          path="/donate"
          component={DonatePage}
        />

        <Route
          exact
          path="/details/:index"
          component={DetailsPage}
        />

        <Route
          path="*"
          component={NotFoundPage}
        />
      </Switch>
    </Root>
  </BrowserRouter>
);

export default AppRoutes;