export const metadata = {
	title: 'Unive | Home',
	description: 'Unive Home Page, Student Dashboard',
	keywords: 'Uni, Student, Dashboard',
};

// TODO add user name
const userName = 'Jess Doe';

const HomePage = () => {
	return <div>
    <h1 className='text-2xl font-medium'>Good morning {userName}</h1>
  </div>;
};
export default HomePage;
