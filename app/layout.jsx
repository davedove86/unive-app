import '../assets/styles/normalize.css';
import '../assets/styles/globals.css';
import Searchbar from '@/components/Searchbar';
import Sidebar from '@/components/Sidebar';

export const metadata = {
	title: 'Unive | Home',
	description: 'Unive Home Page, Student Dashboard',
	keywords: 'Uni, Student, Dashboard',
};

const MainLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<Searchbar />
				<Sidebar />
				<main>{children}</main>
			</body>
		</html>
	);
};

export default MainLayout;
