import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import Root from '../Root/Root';
import HomePage from '../../pages/HomePage/HomePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import DetailsPage from '../../pages/DetailsPage/DetailsPage';
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage'
import DonatePage from '../../pages/DonatePage/DonatePage'
import WorkPage from '../../pages/WorkPage/WorkPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route
          index
          element={<HomePage />}
        />

        <Route
          path="about"
          element={<AboutPage />}
        />

        <Route
          path="contact-us"
          element={<ContactUsPage />}
        />

        <Route
          exact
          path="donate"
          element={<DonatePage />}
        />

        <Route
          path="/work"
          element={<WorkPage />}
        />

        <Route
          path="details/:index"
          element={<DetailsPage />}
        />
      </Route>
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;