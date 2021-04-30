import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import GuildCard from './components/common/GuildCard'
import NavBar from './components/common/NavBar'

const App = () => {
  return (
      <Router>
				<NavBar />
				<GuildCard />

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