import '../assets/styles/globals.css';
import Navbar from '@/components/Navbar';
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
				<Navbar />
				<Sidebar />
				<main>{children}</main>
			</body>
		</html>
	);
};

export default MainLayout;
