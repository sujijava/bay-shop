import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/bootstrap.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

//Cart
import Cart from './components/Cart/Cart'

//product
import ProductDetail from './components/ProductDetail'
import SearchResult from './components/SearchResult'
import Search from './components/Search'
import Category from './components/Category'

//user
import { AuthProvider } from './contexts/AuthContext'
import Login from './components/User/Login'
import Logout from './components/User/Logout'
import Signup from './components/User/Signup'

//admin
import AdminLogin from './components/Admin/AdminLogin'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
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
            component={() => (
              <Category category="category/women's%20clothing" />
            )}
          ></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route path='/product/:productId' component={ProductDetail}></Route>
          <Route path='/search' component={Search}></Route>
          <Route path='/search_result/:searchTerm' component={SearchResult} />
          <Route path='/login' component={Login} />
          <Route path='/admin/login' component={AdminLogin} />
          <Route path='/signup' component={Signup}></Route>
          <Route path='/logout' component={Logout}></Route>
        </Container>

        <Footer />
      </AuthProvider>
    </Router>
  )
}

export default App
