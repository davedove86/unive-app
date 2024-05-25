import Image from 'next/image'
import JaneProfile from '@/assets/images/avatar.png'
import PaulProfile from '@/assets/images/paul.png'
import { messagesData } from '@/app/placeholder-data'

function MessageWidget() {
  return (
        <div className="home-grid-items grid-4">
          <div>
            <div>
              <div className="flex items-center px-4">
                <div className="flex items-center border-b-2 w-full pb-4">

                  <div className="profile-image">
                    <Image src={JaneProfile} width={45} height={45}/>
                    <div className="online-status"></div>
                  </div>
                  <h2 className='text-xl font-medium ml-auto'>Messaging</h2>
                </div>
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
