import {userDetails} from '@/app/placeholder-data';

export const metadata = {
	title: 'Unive | Home',
	description: 'Unive Home Page, Student Dashboard',
	keywords: 'Uni, Student, Dashboard',
};

const HomePage = () => {
	return <div>
    <h1 className='text-2xl font-medium'>Good morning {userDetails.firstName},</h1>
  </div>;
};
export default HomePage;
