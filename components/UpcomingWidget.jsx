import Image from 'next/image';
import UpComing from '@/assets/images/up-coming.png';
import Checkmark from '@/assets/images/checkmark.png';
import Clock from '@/assets/images/clock.svg';

const UpcomingWidget = () => {
  return (
     <div className="home-grid-items grid-2">
      <div className="upcoming-image-wrapper">
        <Image src={UpComing}/>
        <div className="checkmark-wrapper">
          <Image src={Checkmark}/>
          <p>Checked In</p>
        </div>
      </div>
      <div className="upcoming-text-wrapper">
        <div className="flex-wrapper">
          <div className="flex-item">
            <h2>React Basics</h2>
            <p className='grey-text'>Front End Web Development</p>
          </div>
          <div className="flex-item">
            <div className="date-flex">
              <h2>08</h2>
              <p>APR</p>
            </div>
          </div>
        </div>
        <div className="flex-wrapper">
          <div className="flex-item">
            <div className="clock-wrapper">
              <Image src={Clock} />
              <p className='red-text'>In progress</p>
            </div>
          </div>
          <div className="flex-item">
            <div className="date-flex">
              <p className='purple-text'>Join now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UpcomingWidget
