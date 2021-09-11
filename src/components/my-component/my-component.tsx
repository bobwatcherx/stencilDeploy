import { Component, h } from '@stencil/core';
import {Router} from '../RouterConfig/routes';
import {Route,match} from 'stencil-router-v2';

@Component({
  tag: 'my-component',

})
export class MyComponent {

  render() {
    return(
	<div>
		Mycomponent root
		<Router.Switch>
			<Route path="/">
				<app-hello></app-hello>
			</Route>
			<Route path={match('/about/detail/:nice')}
			render={({nice})=> <app-about nice={nice}/> }/>
		</Router.Switch>
	
	</div>
	);
  }
}
