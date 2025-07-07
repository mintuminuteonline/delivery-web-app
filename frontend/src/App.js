import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={OrderForm} />
          <Route path="/admin" component={OrderList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;