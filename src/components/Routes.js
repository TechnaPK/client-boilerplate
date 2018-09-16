import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './Login'

class Routes extends Component {

	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route path="/" component={Login} />
				</Switch>
			</React.Fragment>
		)
	}

}

export default Routes;
