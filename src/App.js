import {BrowserRouter as Router,Route,Link,Switch,NavLink} from 'react-router-dom';
import IssuePage from './Components/IssuePage';
import About from './Components/About'
import NotFound from './Components/NotFound';
import SingleIssue from './Components/SingleIssue';
import {AddIssues} from './Components/AddIssues';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
   <nav>
<NavLink exact to="/" style={{ marginRight: 10 }}>About</NavLink>
<NavLink to="/issues" style={{ marginRight: 10 }}>Issues</NavLink>
   </nav>
     <Switch>
       <Route exact path='/' component={About}></Route>
       <Route exact path='/issues' component={IssuePage}></Route>
       <Route exact path='/issues/:id' component={SingleIssue}></Route>
       <Route exact path='/issues/Addissues/New' component={AddIssues}></Route>
       <Route component={NotFound} />
    </Switch>
   </div>
</Router>
  );
}
export default App;
