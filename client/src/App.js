import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/bootstrap.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

//sorting page
import Category from './components/Category'

//MyAccount
import SignIn from './components/MyAccount/SignIn'
import SignUp from './components/MyAccount/SignUp'

//Cart
import Cart from './components/Cart/Cart'

import ProductDetail from './components/ProductDetail'
import SearchResult from './components/SearchResult'
import Search from './components/Search'

function App() {
  return (
    <Router>
      <Header></Header>
      <Container>
        {/* <Route path='/' component={App} exact></Route> */}
        <Route path='/' component={() => <Category category='' />} exact />
        <Route
          path='/electronics'
          component={() => <Category category='category/electronics' />}
        />
        <Route
          path='/jewelery'
          component={() => <Category category='category/jewelery' />}
        ></Route>
        <Route
          path='/men_clothing'
          component={() => <Category category="category/men's%20clothing" />}
        ></Route>
        <Route
          path='/women_clothing'
          component={() => <Category category="category/women's%20clothing" />}
        ></Route>
        <Route path='/sign_in' component={SignIn}></Route>
        <Route path='/sign_up' component={SignUp}></Route>
        <Route path='/cart' component={Cart}></Route>
        <Route path='/product/:productId' component={ProductDetail}></Route>
        <Route path='/search' component={Search}></Route>
        <Route
          path='/search_result/:searchTerm'
          component={SearchResult}
        ></Route>
      </Container>

      <Footer></Footer>
    </Router>
  )
}

export default App
