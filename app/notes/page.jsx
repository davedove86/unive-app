import {userDetails, notesData} from '@/app/placeholder-data';

const Notes = () => {
	return <>
    <h1 className='text-3xl mb-8'>{userDetails.firstName}'s Notes</h1>
    {notesData.map((note) => (
      <div key={note.id} className='mb-10'>
        <h2 className='font-bold my-2'>Title: {note.title}</h2>
        <p className='mb-2'>{note.content}</p>
        <p>Date: {note.date}</p>
      </div>
    ))}
  </>;
};
export default Notes;
