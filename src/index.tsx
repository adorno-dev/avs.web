import React from 'react';
import ReactDOM from 'react-dom/client'
import '../src/styles/index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Main } from './pages/Main';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
<React.StrictMode>
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/signin' element={<SignIn />} />
			<Route path='/signup' element={<SignUp />} />
		</Routes>
	</BrowserRouter>
</React.StrictMode>
);