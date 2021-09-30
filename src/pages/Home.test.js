import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

it('Home component is working', () => {
  const tree = renderer
    .create(
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});