import ReactDOM from 'react-dom/client'
import '../src/index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/signup';
import { SignIn } from './pages/signin';
import { Main } from './pages/main';
import { AuthenticationProvider } from './contexts/authentication.context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<AuthenticationProvider>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/signin' element={<SignIn />} />
				<Route path='/signup' element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	</AuthenticationProvider>
);