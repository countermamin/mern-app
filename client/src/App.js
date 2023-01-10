import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Username from './components/Username';
import PageNotFound from './components/PageNotFound';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Register from './components/Register';
import Reset from './components/Reset';

// Root Routes
const router = createBrowserRouter([
	{
		path: '/',
		element: <Username></Username>,
	},
	{
		path: '/register',
		element: <Register></Register>,
	},
	{
		path: '/password',
		element: <Password></Password>,
	},
	{
		path: '/profile',
		element: <Profile></Profile>,
	},
	{
		path: '/recovery',
		element: <Recovery></Recovery>,
	},
	{
		path: '/reset',
		element: <Reset></Reset>,
	},
	{
		path: '/*',
		element: <PageNotFound></PageNotFound>,
	},
]);

const App = () => {
	return (
		<main>
			<RouterProvider router={router}></RouterProvider>
		</main>
	);
};

export default App;
