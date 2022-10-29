import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home/Home';
import UserList from '@/pages/UserList/UserList';
import UserFormCreate from '@/pages/UserForm/UserFormCreate';
import UserFormEdit from '@/pages/UserForm/UserFormEdit';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/lista-de-usuario' component={UserList} />
        <Route exact path='/criar-usuario' component={UserFormCreate} />
        <Route exact path='/editar-usuario/:id' component={UserFormEdit} />
      </Switch>
    </Router>
  );
}
