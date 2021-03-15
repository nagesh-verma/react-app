
import './App.css';
import Banner from './components/banner/Banner';

import DisplayCategories from './components/categories/DisplayCategories';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import ProductList from './components/productlist/ProductList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './components/form/SignIn';
import Register from './components/form/Register';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'


// dont use this in production
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


function App() {
  return (
    <Provider store = {store}>
      <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path = "/">
            <Banner/>
            <DisplayCategories/>
          </Route>
          <Route path="/products">
            <ProductList/>
          </Route>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
    </Provider>
    
    
  );
}

export default App;
