import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
	const [inputMode, setInputMode] = useState('direct');

	function changeInputMode(e) {
		setInputMode((prevState) => e.target.id);
	}

	return (
		<>
			<Header inputMode={inputMode} changeInputMode={changeInputMode} />
			<Main inputMode={inputMode} />
			<Footer />
		</>
	);
}

export default App;
