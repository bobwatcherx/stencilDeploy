import {createStore} from '@stencil/store'

const {state,onChange} = createStore({
		myname:"joni toni",
		age:12,
		address:"malaysia"
});


export default state