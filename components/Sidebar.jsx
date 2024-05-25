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
		<header>
			<div>
        <Link href='/' className='logo'>
          <Image
            alt='Unive Logo'
            src={Logo}
          />
          <p>Unive</p>
        </Link>
				<nav>
					<ul>
						<li className='link'>
              <Link href='/'>
                <Image src={Dashboard}/>
                <p>Dashboard</p>
              </Link>
						</li>
						<li className='link'>
							 <Link href='/courses'>
                <Image src={Courses}/>
                <p>Courses</p>
              </Link>
						</li>
						<li className='link'>
							<Link href='/calendar'>
                <Image src={Calendar}/>
                <p>Calendar</p>
              </Link>
						</li>
						<li className='link'>
							<Link href='/notes'>
                <Image src={Notes}/>
                <p>Notes</p>
              </Link>
						</li>
						<li className='link'>
								<Link href='/grades'>
                <Image src={Grades}/>
                <p>Grades</p>
              </Link>
						</li>
						<li className='link'>
								<Link href='/attendance'>
                <Image src={Attendance}/>
                <p>Attendance</p>
              </Link>
						</li>
						<li className='link'>
								<Link href='/settings'>
                <Image src={Settings}/>
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
