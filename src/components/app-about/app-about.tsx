import { Component, Prop, h } from '@stencil/core';
import {href} from 'stencil-router-v2'
@Component({
  tag: 'app-about',
  styleUrl: 'app-about.css',
  shadow: true,
})
export class AppAbout {
@Prop() nice:string;
  render() {
    return (
    <div>
	<h1>ABOUT PAGE {this.nice}</h1>
	<a {...href('/')}>to Home page</a>
	</div>
    );
  }

}
