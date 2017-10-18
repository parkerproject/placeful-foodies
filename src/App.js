import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Restaurants from './components/Restaurants';
import MyRestaurants from './components/My-restaurants';
import Sidebar from './Sidebar';
import './App.css';

const App = () => (
  <div>
    <Container>
      <Sidebar />
      <Grid columns={1}>
        <Grid.Column>
          <main className="content">
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/restaurants" component={Restaurants} />
            <Route exact path="/my-restaurants" component={MyRestaurants} />
          </main>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

export default App;
