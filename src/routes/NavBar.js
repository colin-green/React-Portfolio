import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Tooltip from '@mui/material/Tooltip';

const navigation = [
	{ name: 'About Me', linkTo: '/', current: true },
	{ name: 'Portfolio', linkTo: '/portfolio', current: false },
];

// function classNames(...classes) {
// 	return classes.filter(Boolean).join(' ');
// }

export default function NavBar() {
	return (
		<Fragment>
			<Disclosure as='nav' className='bg-gray-800'>
				{({ open }) => (
					<>
						<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
							<div className='relative flex h-16 items-center justify-between'>
								<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
									{/* Mobile menu button*/}
									<Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
										<span className='absolute -inset-0.5' />
										<span className='sr-only'>Open main menu</span>
										{open ? (
											<XMarkIcon className='block h-6 w-6' aria-hidden='true' />
										) : (
											<Bars3Icon className='block h-6 w-6' aria-hidden='true' />
										)}
									</Disclosure.Button>
								</div>
								<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
									<NavLink className='flex flex-shrink-0 items-center' to='/'>
										<span className='text-green-200 text-xl'>Colin Green</span>
									</NavLink>
									<div className='hidden sm:ml-6 sm:block'>
										<div className='flex space-x-4'>
											{navigation.map(item => (
												<NavLink
													key={item.name}
													to={item.linkTo}
													className={({ isActive }) =>
														[
															isActive
																? 'bg-gray-900 text-white'
																: 'text-gray-300 hover:bg-gray-700 hover:text-white',
															'rounded-md px-3 py-2 text-sm font-medium',
														].join(' ')
													}
													// aria-current={item.current ? 'page' : undefined}
												>
													{item.name}
												</NavLink>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className='sm:hidden'>
							<div className='space-y-1 px-2 pb-3 pt-2'>
								{navigation.map(item => (
									<NavLink
										key={item.name}
										to={item.linkTo}
										className={({ isActive }) =>
											[
												isActive
													? 'bg-gray-900 text-white'
													: 'text-gray-300 hover:bg-gray-700 hover:text-white',
												'block rounded-md px-3 py-2 text-base font-medium',
											].join(' ')
										}
										// aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</NavLink>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<div className='bg-gradient-to-b from-green-900 to-gray-950 min-h-screen'>
				<Outlet />
			</div>
			<footer className='fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-green-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-green-800 dark:border-green-600'>
				<span className='text-2xl text-gray-500 sm:text-center dark:text-gray-400'>
					Colin Green
				</span>
				<ul className='flex flex-wrap items-center mt-3 text-xl text-gray-500 dark:text-gray-400 sm:mt-0'>
					<li>
						<a
							href='#'
							target='_blank'
							className='hover:underline me-4 md:me-6'
						>
							Résumé
						</a>
					</li>
					<li className='mr-1'>
						<Tooltip title='LinkedIn'>
							<SocialIcon
								url='https://www.linkedin.com/in/colinmgreen/'
								target='_blank'
							/>
						</Tooltip>
					</li>
					<li className='mr-1'>
						<Tooltip title='GitHub'>
							<SocialIcon
								url='https://github.com/colin-green'
								target='_blank'
							/>
						</Tooltip>
					</li>
					<li>
						<Tooltip title='Email Me'>
							<SocialIcon url='mailto:colinmgreen7@gmail.com' />
						</Tooltip>
					</li>
				</ul>
			</footer>
		</Fragment>
	);
}
