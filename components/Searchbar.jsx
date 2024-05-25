import Link from 'next/link';
import Image from 'next/image';
import Message from '@/assets/images/message.svg';
import Maginfier from '@/assets/images/mag.svg';
import Notification from '@/assets/images/notification.svg';
import UserProfile from '@/assets/images/avatar.png';
import {userDetails} from '@/app/placeholder-data';

const Searchbar = () => {
	return <div className='searchbar'>
    <div className="search">
      <Image src={Maginfier} />
       <input className='search' type='text' placeholder='Search...' />
    </div>
    <div className='links-wrapper'>
      <Link href='/messages'>
        <Image className='icon' src={Message} />
      </Link>

      <Link href='/notifications'>
        <Image className='icon' src={Notification} />
      </Link>
      <Link href='/user'>
        <div className="user-search-icon">
          <Image className='icon' src={UserProfile} width={100} height={100} />
          <div>
            <p className="bold">{userDetails.firstName} {userDetails.lastName}</p>
            <p>{userDetails.role}</p>
          </div>
        </div>
      </Link>
    </div>
  </div>;
};
export default Searchbar;
