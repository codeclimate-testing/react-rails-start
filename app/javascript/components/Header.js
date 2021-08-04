import React from 'react'
import PropTypes from 'prop-types'
import PostsPage from './posts/Index'
import PostPage from './posts/Show'
import HomePage from './Home'
import LoginPage from './user/Login'
import LogoutPage from './user/Logout'
import SignupPage from './user/Signup'
import { useUser } from '../utils/api'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom'
import NavButton from './button/NavButton'

const headerLinks = [
  { name: 'Home', path: '/' },
  { name: 'Posts', path: '/posts' }
]

const UserContext = React.createContext({ user: null, loading: true, error: null })

const Header = () => {
  const { data: currentUser, loading, error } = useUser()
  return (
    <UserContext.Provider value={{ user: currentUser, loading: loading, error: error }}>
      <Router>
        <nav className="flex content-center items-center justify-between bg-green-700 text-white p-3">
          <div className="mx-3">Logo</div>
          <div className="mx-3 flex flex-grow content-center items-center justify-start">
            {headerLinks.map((item, i) => (
              <Link key={i} to={item.path}>
                <div className="p-3 hover:bg-green-900 transition-colors duration-300 rounded-lg">
                  {item.name}
                </div>
              </Link>
            )
            )}
          </div>
          <div className="mx-3">
            <div className="flex items-center">
              {currentUser
                ? (
                <>
                  <span className="mx-3">{currentUser.email}</span>
                  <div className="mx-3">
                    <NavButton href="/logout">Logout</NavButton>
                  </div>
                </>
                  )
                : (
                <>
                  <NavButton href="/login">Login</NavButton>
                  <NavButton href="/signup">Registrarse</NavButton>
                </>
                  )}
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login">
            { currentUser ? <Redirect to="/" /> : <LoginPage /> }
          </Route>
          <Route exact path="/logout">
            { currentUser ? <LogoutPage /> : <Redirect to="/" /> }
          </Route>
          <Route exact path="/signup">
            { currentUser ? <Redirect to="/" /> : <SignupPage /> }
          </Route>
          <Route exact path="/posts" component={PostsPage} />
          <Route path="/post/:id" component={PostPage} />
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default Header
