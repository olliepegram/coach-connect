import Link from 'next/link';

const links = [
	{ href: '/features', label: 'Features' },
	{ href: '/coaches', label: 'Coaches' },
	{ href: '/pricing', label: 'Pricing' },
	{ href: '/faq', label: 'FAQ' },
];

export const Navbar = () => {
	return (
		<nav className='py-2'>
			<div className='navbar max-w-7xl mx-auto'>
				<div className='navbar-start'>
					<Link
						href='/'
						className='btn btn-ghost text-xl'
					>
						Online Coach Connect
					</Link>
				</div>
				<div className='navbar-center'>
					<ul className=' menu menu-horizontal md:ml-8'>
						{links.map((link) => {
							return (
								<li
									key={link.href}
									className='hover:text-primary'
								>
									<Link
										className='capatalize'
										href={link.href}
									>
										{link.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='navbar-end'>
					<a className='btn btn-primary text-white rounded'>Login</a>
				</div>
			</div>
		</nav>
	);
};
