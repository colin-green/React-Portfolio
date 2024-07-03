import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import NavBar from './routes/NavBar';
import AboutMe from './routes/AboutMe';
import Portfolio from './routes/Portfolio';
import ErrorPage from './routes/error-page';
import reportWebVitals from './reportWebVitals';

const router = createHashRouter([
	{
		path: '/',
		element: <NavBar />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <AboutMe />,
			},
			{
				path: '/portfolio',
				element: <Portfolio />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
