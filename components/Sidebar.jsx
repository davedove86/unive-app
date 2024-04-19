import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/images/unive-logo.svg';
import Dashboard from '@/assets/images/dashboard-icon.svg';
import Courses from '@/assets/images/courses-icon.svg';
import Calendar from '@/assets/images/calendar-icon.svg';
import Notes from '@/assets/images/notes-icon.svg';
import Grades from '@/assets/images/grades-icon.svg';
import Attendance from '@/assets/images/attendance-icon.svg';
import Settings from '@/assets/images/settings-icon.svg';

const Sidebar = () => {
	return (
		<header className='text-white fixed top-0 left-0 p-y-50 bg-purple w-60 h-full overflow-x-hidden z-1'>
			<div className='py-10 px-6 font-bold m-0'>
        <Link href='/' className='flex items-center gap-1'>
          <Image
            className='h-10 w-10'
            alt='Unive Logo'
            src={Logo}
          />
          <p className='text-3xl'>Unive</p>
        </Link>
				<nav>
					<ul>
						<li className='link'>
              <Link href='/' className='flex items-center'>
                <Image src={Dashboard} className='mr-2'/>
                <p>Dashboard</p>
              </Link>
						</li>
						<li className='link'>
							 <Link href='/courses' className='flex items-center'>
                <Image src={Courses} className='mr-2'/>
                <p>Courses</p>
              </Link>
						</li>
						<li className='link'>
							<Link href='/calendar' className='flex items-center'>
                <Image src={Calendar} className='mr-2'/>
                <p>Calendar</p>
              </Link>
						</li>
						<li className='link'>
							<Link href='/notes' className='flex items-center'>
                <Image src={Notes} className='mr-2'/>
                <p>Notes</p>
              </Link>
						</li>
						<li className='link'>
								<Link href='/grades' className='flex items-center'>
                <Image src={Grades} className='mr-2'/>
                <p>Grades</p>
              </Link>
						</li>
						<li className='link'>
								<Link href='/attendance' className='flex items-center'>
                <Image src={Attendance} className='mr-2'/>
                <p>Attendance</p>
              </Link>
						</li>
						<li className='link'>
								<Link href='/settings' className='flex items-center'>
                <Image src={Settings} className='mr-2' />
                <p>Settings</p>
              </Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
export default Sidebar;
