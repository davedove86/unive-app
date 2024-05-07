import {userDetails} from '@/app/placeholder-data';

const User = () => {
	return <>
    <h1 className='text-3xl font-bold'>
      {userDetails.firstName} {userDetails.lastName}
    </h1>
    </>;
};
export default User;
