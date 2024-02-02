import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Posts from './components/Posts'
import PostItemDetails from './components/PostItemDetails'
import SavedList from './components/SavedList'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/products" component={Posts} />
    <ProtectedRoute exact path="/products/:id" component={PostItemDetails} />
    <ProtectedRoute exact path="/cart" component={SavedList} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
