import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListTutorials from './components/ListTutorials'
import CreateTutorial from './components/CreateTutorial'
import EditTutorial from './components/EditTutorial'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={ListTutorials} />
          <Route exact path='/create' component={CreateTutorial} />
          <Route exact path='/edit/:id' component={EditTutorial} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
