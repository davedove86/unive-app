import Image from 'next/image'
import JaneProfile from '@/assets/images/avatar.png'
import PaulProfile from '@/assets/images/paul.png'
import friend1 from '@/assets/images/friend-1.png'
import friend2 from '@/assets/images/friend-2.png'
import friend3 from '@/assets/images/friend-3.png'
import friend4 from '@/assets/images/friend-4.png'
import NewMessageIcon from '@/assets/images/new-message.svg'
import SearchMessageIcon from '@/assets/images/search-message.svg'
import { messagesData } from '@/app/placeholder-data'

function MessageWidget() {
  return (
        <div className="home-grid-items grid-4">
          <div>
            <div>
              <div className="flex items-center border-b-2 pb-4">
                <div className="flex items-center w-full">

                  <div className="profile-image-wrapper">
                    <div className="profile-image">
                      <Image src={JaneProfile} width={50} height={50}/>
                      <div className="online-status"></div>
                    </div>
                    <h2 className='text-xl font-medium'>Messaging</h2>
                  </div>
                  <Image src={NewMessageIcon} width={14} height={14} />
                  <Image src={SearchMessageIcon} width={14} height={14} />
                </div>
              </div>

            </div>
            <div className="friend-messages-wrapper">
              <div className="friend-wrapper">
                <div className="new-message">+</div>
                <p className="friend-name">Add</p>
              </div>
              <div className="friend-wrapper">
                <Image src={friend1} width={50} height={50}/>
                <p className="friend-name">Dianne</p>
              </div>
              <div className="friend-wrapper">
                <Image src={friend2} width={50} height={50}/>
                <p className="friend-name">Miles</p>
              </div>
              <div className="friend-wrapper">
                <Image src={friend3} width={50} height={50}/>
                <p className="friend-name">Jarvis</p>
              </div>
              <div className="friend-wrapper">
                <Image src={friend4} width={50} height={50}/>
                <p className="friend-name">Sam</p>
              </div>

            </div>
            {messagesData.slice(0, 4).map((message) => (
              <div key={message.id} className='px-4'>
                <div className="py-4 flex items-center my-6 border-b-2">
                  <Image src={PaulProfile} width={65} height={65}/>
                  <div className="flex flex-col ml-4">
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
  )
}
export default MessageWidget
