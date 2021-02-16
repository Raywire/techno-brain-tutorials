import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListTutorials from './components/ListTutorials'
import CreateTutorial from './components/CreateTutorial'
import EditTutorial from './components/EditTutorial'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App content">
      <div id="page-container">
        <div id="content-wrap">
        <Navbar />
        <Switch>
          <Route exact path='/' component={ListTutorials} />
          <Route exact path='/create' component={CreateTutorial} />
          <Route exact path='/edit/:id' component={EditTutorial} />
        </Switch>
        </div>
        <Footer/>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
