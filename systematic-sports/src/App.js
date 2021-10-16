import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import { Home } from './Home'
import { SignUp } from './SignUp'
import { Login } from './Login'
import { AuthContextProvider, useAuthState } from './firebase'
import PerformancePage from './PerformancePage'
import AboutUs from './AboutUs'

const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  return (
    <Route
      {...props}
      render={routeProps =>
      isAuthenticated ? <C {...routeProps} /> : <Redirect to="/login" />
      }
      />
  )
}
const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  return (
    <Route
      {...props}
      render={routeProps =>
      !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
      }
      />
  )
}

function App() {
  return (
    <AuthContextProvider>
      <Router>
{/*       <div>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> | {' '}
        <Link to="/signup">SignUp</Link>
      </div> */}
        <AuthenticatedRoute exact path="/" component={Home} />
        <AuthenticatedRoute exact path="/performance" component={PerformancePage} />
        <AuthenticatedRoute exact path="/about" component={AboutUs} />
        <UnauthenticatedRoute exact path="/signup" component={SignUp} />
        <UnauthenticatedRoute exact path="/login" component={Login} />
      </Router>
    </AuthContextProvider>
  )
}



export default App;