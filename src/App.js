import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const App = () => {
  return (
      <Router>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/profile'>Profile</Link></li>
					<li><Link to='/create-guild'>Create Guild</Link></li>
				</ul>

				<Switch>
					<Route path="/profile">
						<h1>profile path</h1>
					</Route>
					<Route path="/create-guild">
						<h1>create guild path</h1>
					</Route>
					<Route path="/">
						<h1>homepage</h1>
					</Route>
				</Switch>
			</Router>
  )
}

export default App