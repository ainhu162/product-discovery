import React, { Suspense } from 'react';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './styles.scss';
const showContentMenus = routes => {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  }
  return <Switch>{result}</Switch>;
};
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>    
        <div>{showContentMenus(routes)}</div>
      </Suspense>
    </Router>
  );
}

export default App;
