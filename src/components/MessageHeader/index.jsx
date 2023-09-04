import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import DefaultAvatar from '../../assets/images/avatar.png';

function MessageHeader() {
  return (
    <div className={'px-4 h-16 bg-backgroundColor flex items-center justify-between border-b-[1px] border-borderColor'}>
      <div className='flex flex-row items-center'>
        <div className="h-11 w-11 rounded-full bg-textColor overflow-hidden">
          <img src={DefaultAvatar} alt="profile-pic" />
        </div>
        <div className="flex flex-col pl-2">
          <span className="text-textColor font-medium">{'tst'}</span>
          <span className="text-secondaryColor text-xs">{'Last seen'}</span>
        </div>

      </div>
      <FontAwesomeIcon className="text-inputTextColor" icon={faEllipsisVertical} />
    </div>
  )
}

export default MessageHeader;