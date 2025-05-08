import Main from './Main-Page/Main.jsx';
import './App.css'

import PageAbout from './seperate-pages/about/PageAbout.jsx';
import PageProjects from './seperate-pages/projects/PageProjects.jsx';
import PageEducation from './seperate-pages/education/PageEducation.jsx';
import PageContact from './seperate-pages/contact/PageContact.jsx';
import { Route, Router } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route path="/About">
              <PageAbout/>
            </Route>
            <Route path="/Contact">
              <PageContact/>
            </Route>
            <Route path="/Education">
              <PageEducation/>
            </Route>
            <Route path="/Projects">
              <PageProjects/>
            </Route>
          </Switch>
        </div>
      </Router> */}
      <Main/>
    </>
  );
}

export default App
