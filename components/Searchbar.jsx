import Link from 'next/link';
import Image from 'next/image';
import Message from '@/assets/images/message.svg';
import Maginfier from '@/assets/images/mag.svg';
import Notification from '@/assets/images/notification.svg';
import {userDetails} from '@/app/placeholder-data';

const Searchbar = () => {
	return <div className='searchbar'>
    <div className="search">
      <Image src={Maginfier} />
       <input className='search' type='text' placeholder='Search...' />
    </div>
    <div className='flex items-center gap-4'>
      <Link href='/messages'>
        <Image className='icon' src={Message} />
      </Link>

      <Link href='/notifications'>
        <Image className='icon' src={Notification} />
      </Link>
      <Link href='/user'>
        <div className="flex gap-2 items-center">
          <Image className='icon' src={userDetails.avatar} width={100} height={100} />
          <div className="flex flex-col">
            <p className='font-bold'>{userDetails.firstName} {userDetails.lastName}</p>
            <p className='font-light'>{userDetails.role}</p>
          </div>
        </div>
      </Link>
    </div>
  </div>;
};
export default Searchbar;
