import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/images/unive-logo.svg';

const Sidebar = () => {
	return (
		<header className='text-white fixed hidden p-y-50'>
			<div className=''>
				<div className=''>
					<Image
						className='h-10 w-10'
						alt='Unive Logo'
						src={Logo}
					/>
				</div>
				<nav>
					<ul>
						<li className='link'>
							<Link href='/'>Dashboard</Link>
						</li>
						<li className='link'>
							<Link href='/courses'>Courses</Link>
						</li>
						<li className='link'>
							<Link href='/calendar'>Calendar</Link>
						</li>
						<li className='link'>
							<Link href='/notes'>Notes</Link>
						</li>
						<li className='link'>
							<Link href='/grades'>Grades</Link>
						</li>
						<li className='link'>
							<Link href='/attendance'>Attendance</Link>
						</li>
						<li className='link'>
							<Link href='/Settings'>Settings</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
export default Sidebar;
