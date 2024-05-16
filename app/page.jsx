import Image from 'next/image';
import Link from 'next/link';
import JaneProfile from '@/assets/images/avatar.png';
import PaulProfile from '@/assets/images/paul.png';
import {userDetails, notesData, coursesData, messagesData} from '@/app/placeholder-data';

export const metadata = {
	title: 'Unive | Home',
	description: 'Unive Home Page, Student Dashboard',
	keywords: 'Uni, Student, Dashboard',
};

const HomePage = () => {
	return <div>
    <section>
      <h1 className='text-2xl font-medium mb-4'>Good morning {userDetails.firstName},</h1>
    </section>
    <section>
      <div className="lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-4 flex flex-col">
        <div className="col-span-2 bg-white py-8 px-4 rounded-lg shadow-sm">
          <h2 className='text-xl font-medium'>Active Courses</h2>

          <div className='my-8'>
            {coursesData.slice(0, 3).map((course) => (
              <div key={course.id} className='lg:flex lg:items-center lg:justify-between mb-10 text-left'>
                <div>
                  <img src={course.icon}/>
                </div>
                <div>
                  <h2 className='font-bold my-2 bg-indigo-700 text-[10px] text-center text-white py-2 px-4 rounded-full uppercase'>{course.course}</h2>
                  <p className='mb-2 font-bold text-[16px]'>{course.subject}</p>
                </div>
                <div className="flex flex-col lg:flex-col lg:items-center gap-2">
                  <p>Current Grade</p>
                  <p className='text-2xl font-bold'>{course.currentGrade}</p>
                </div>
                <div className="flex flex-col lg:flex-col lg:items-center gap-2">
                  <p>Grade Average</p>
                  <p className='text-2xl font-bold'>{course.gradeAverage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-start-1 row-start-2 bg-white py-8 px-4 rounded-lg shadow-sm">
          <h2 className='text-xl font-medium'>Upcoming Sessions</h2>
        </div>
        <div className="col-start-2 row-start-2 bg-white py-8 px-4 rounded-lg shadow-sm">
          <h2 className='text-xl font-medium'>Students Notes</h2>
          <div className='my-4 max-w-22'>
            {notesData.slice(0, 1).map((note) => (
              <div key={note.id} className='flex flex-col'>
                <h2 className='font-bold my-2'>Title: {note.title}</h2>
                <p className='mb-4'>{note.content}</p>
                <p>Date: {note.date}</p>
                <Link className='mt-4' href={''}>Read More</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="row-span-2 col-start-3 row-start-1 bg-white py-8 rounded-lg shadow-sm">
          <div className='max-w-22'>
            <div>
              <div className="flex items-center px-4">
                <div className="flex items-center border-b-2 w-full pb-4">

                  <Image src={JaneProfile} width={40} height={40} />
                  <h2 className='text-xl ml-4 font-medium'>Messaging</h2>
                </div>
              </div>

            </div>
            {messagesData.slice(0, 6).map((message) => (
              <div key={message.id} className='px-4'>
                <div className="py-4 flex items-center my-6 border-b-2">
                  <Image src={PaulProfile} width={65} height={65} />
                  <div className="flex flex-col ml-8">
                    <h2 className='font-semi my-2'>{message.name}</h2>
                    <p className='mb-2 font-extralight'>{message.message}</p>
                  </div>
                  <div className="ml-auto pl-4">
                    <p className='font-extralight items-start'>{message.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>;
};
export default HomePage;
