import { useState } from 'react';
import logo from './images/img_webpack.png';
import cien from './images/100-logo.jpg';

const App = () => {
	const [counter, setCounter] = useState(0);
	// const handleClick = debounce(clikCounter, 500);

	const handleClick = () => {
		setCounter(counter + 1);

	}
	return (
	<div>
		<div className="container">
			<div className="logo">
				<img src={logo} alt="logo"></img>
				<h1>Webpack 5</h1>
			</div>
			<button onClick={handleClick} >Increment</button>
		</div>
		<div className="number">{counter}</div>
	</div>
	)
}
export default App;