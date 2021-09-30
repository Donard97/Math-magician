import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Quote from './Quote';

it('Quote component is working', () => {
  const tree = renderer
    .create(
      <Router>
        <Switch>
          <Route>
            <Quote />
          </Route>
        </Switch>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
