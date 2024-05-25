import {userDetails} from '@/app/placeholder-data';
import MessageWidget from '@/components/MessageWidget';
import NotesWidget from '@/components/NotesWidget';
import ActiveCourseWidget from '@/components/ActiveCourseWidget';
import UpcomingWidget from '@/components/UpcomingWidget';

export const metadata = {
	title: 'Unive | Home',
	description: 'Unive Home Page, Student Dashboard',
	keywords: 'Uni, Student, Dashboard',
};

const HomePage = () => {
	return <div>
    <section>
      <h1>Good morning {userDetails.firstName},</h1>
    </section>
    <section>
      <div className="home-grid">
        <ActiveCourseWidget />
        <UpcomingWidget />
        <NotesWidget />
        <MessageWidget />
      </div>
    </section>
  </div>;
};
export default HomePage;
