import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import asyncComponent from './hoc/asyncComponent/asyncComponent'

import Layout from './hoc/Layout/Layout';
// import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
// import Checkout from './containers/Checkout/Checkout';
// import Orders from './containers/Orders/Orders';
// import Auth from './containers/Auth/Auth'
// import Logout from './containers/Auth/Logout/Logout'
import * as actions from './store/actions/index'

const AsyncAuth = asyncComponent(()=> {
	return import('./containers/Auth/Auth')
})
const AsyncBurgerBuilder = asyncComponent(() => {
	return import('./containers/BurgerBuilder/BurgerBuilder')
})
const AsyncCheckout = asyncComponent(() => {
	return import('./containers/Checkout/Checkout')
})
const AsyncOrders = asyncComponent(() => {
	return import('./containers/Orders/Orders')
})
const AsyncLogout = asyncComponent(() => {
	return import('./containers/Auth/Logout/Logout')
})

class App extends Component {
	componentDidMount() {
		this.props.onTryAutoSignUp()
	}

	render () {
		let routes =
			<Switch>
				<Route path="/auth" component={AsyncAuth} />
				<Route path="/" exact component={AsyncBurgerBuilder} />
				<Redirect to='/'/>
			</Switch>
		if (this.props.isAuthenticated) {
			routes =
				<Switch>
					<Route path="/checkout" component={AsyncCheckout} />
					<Route path="/orders" component={AsyncOrders} />
					<Route path="/logout" component={AsyncLogout} />
					<Route path="/auth" component={AsyncAuth} />
					<Route path="/" exact component={AsyncBurgerBuilder} />
					<Redirect to='/'/>
				</Switch>
		}

    return (
      <div>
        <Layout>
			{routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignUp: ()=> dispatch(actions.authCheckState())
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
