import {userDetails, notesData} from '@/app/placeholder-data';

export const metadata = {
	title: 'Unive | Notes',
	description: 'Unive Home Page, Student Notes Dashboard',
	keywords: 'Uni, Student, Dashboard Notes',
};

const Notes = () => {
	return <>
    <h1 className='text-3xl mb-8'>{userDetails.firstName}'s Notes</h1>
    <div className="xl:grid-cols-3 lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4 flex flex-col">
      {notesData.map((note) => (
        <div key={note.id} className='mb-10 shadow-md bg-white p-4 rounded-md flex flex-col'>
          <h2 className='font-bold text-purple my-2'>{note.title}</h2>
          <p className='mb-10'>{note.content}</p>
          <p className='mt-auto'>Date created: {note.date}</p>
          <button className='mt-4 bg-purple text-white py-2 rounded-lg'>View Note</button>
        </div>
      ))}
    </div>
  </>;
};
export default Notes;
