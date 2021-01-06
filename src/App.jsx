/* eslint-disable no-unused-vars */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.scss';
import { Main } from './components/Main';
import { PersonList } from './components/PersonList';
import { PersonDetails } from './components/PersonDetails';

export const App = () => (
  <>
    <CssBaseline />
    <Container maxWidth={false} disableGutters>
      <Typography
        component="div"
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#cfe8fc',
          height: '100vh',
        }}
      >
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/data">
          <PersonList />
        </Route>
        <Route path="/details">
          <PersonDetails />
        </Route>
      </Typography>
    </Container>
  </>
);
