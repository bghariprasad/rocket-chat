import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import DefaultAvatar from '../../assets/images/avatar.png';

function UserAction() {
  return (
    <div className={'px-4 h-16 bg-backgroundColor flex items-center justify-between border-b-[1px] border-borderColor'}>
      <div className="h-11 w-11 rounded-full overflow-hidden">
        <img src={DefaultAvatar} alt="profile-pic" />
      </div>
      <FontAwesomeIcon className="text-inputTextColor" icon={faEllipsisVertical} />
    </div>
  )
}

export default UserAction