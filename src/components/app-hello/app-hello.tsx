import { Component, h } from '@stencil/core';
import {href} from 'stencil-router-v2'
@Component({
  tag: 'app-hello',
  styleUrl: 'app-hello.css',
  shadow: true,
})
export class AppHello {

  render() {
    return (
    <div>
		<h1>i AM HELLO PAGE</h1>
		<br/>
		<a {...href('/about/detail/ISmyPARAMS')}>to ABOUT page</a>
	</div>
    );
  }

}
