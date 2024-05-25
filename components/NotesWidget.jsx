import { notesData } from '@/app/placeholder-data'
import Link from 'next/link'

const NotesWidget = () => {
  return (
    <div className="home-grid-items grid-3">
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
  )
}
export default NotesWidget
