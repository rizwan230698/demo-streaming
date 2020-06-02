import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from './context/DataContext';
import ErrorBoundary from './components/errorBoundary';
import Spinner from './components/spinner';

const HomePage = lazy(() => import('./pages/homepage'));
const SeriesPage = lazy(() => import('./pages/seriespage'));
const MoviesPage = lazy(() => import('./pages/moviespage'));

const App = () => (
  <Provider>
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/series" component={SeriesPage} />
            <Route exact path="/movies" component={MoviesPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Router>
  </Provider>
);

export default App;
