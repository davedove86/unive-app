import {userDetails} from '@/app/placeholder-data';

export const metadata = {
	title: 'Unive | User',
	description: 'Unive Home Page, Student User Dashboard',
	keywords: 'Uni, Student, Dashboard User',
};

const User = () => {
	return <>
    <h1 className='text-3xl font-bold'>
      {userDetails.firstName} {userDetails.lastName}
    </h1>
    </>;
};
export default User;
