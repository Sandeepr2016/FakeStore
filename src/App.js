import './App.css';
import Header from './containers/header';
import ProductDetail from './containers/productDetail';
import ProductList from './containers/productlist';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {} from 'react-router';
function App() {
  console.log('in APP');
  return (
    <div className="App">
     <Router>
      <Header/>
      <div className='ui grid container'></div>
      {/* React-Router V6 onwards */}
       {/* <Routes>     
        <Route path="/"  exact element={<ProductList/>} />
        <Route path="/product/:productId"  element={<ProductDetail/>} />
        <Route>404 Not Found !</Route>
      </Routes> */}
      {/* React-Router  below V6 */}
      <Switch>     
        <Route path="/"  exact component={ProductList} />
        <Route path="/product/:productId"  component={ProductDetail} />
        <Route>404 Not Found !</Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
