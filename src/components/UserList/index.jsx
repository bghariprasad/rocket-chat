import { useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

import DefaultAvatar from '../../assets/images/avatar.png';

function UserList() {

  const users = [
    {
      "id": 'user1',
      "displayName": "Hari",
      "image": '',
      "email": "user1@example.com",
      "latestMessage": { message: 'Hi', isSent: true, isSeen: true }
    },
    {
      "id": 'user2',
      "displayName": "Naveena",
      "image": '',
      "email": "user2@example.com",
      "latestMessage": { message: 'Hi', isSent: true, isSeen: true }
    },
    {
      "id": 'user3',
      "displayName": "Prasad",
      "image": '',
      "email": "user3@example.com",
      "latestMessage": { message: 'Hi', isSent: true, isSeen: false }
    }
  ]

  const renderUsers = useCallback(({ displayName, image, latestMessage }) => (
    <div className="border-b-[1px] border-borderColor py-3 px-4 flex flex-row items-center cursor-pointer">
      <div className="h-11 w-11 rounded-full bg-textColor overflow-hidden">
        <img src={image || DefaultAvatar} alt="profile-pic" />
      </div>
      <div className="flex flex-col pl-2">
        <span className="text-textColor">{displayName}</span>
        <div>
          {(latestMessage.isSent && latestMessage.isSeen) && <FontAwesomeIcon className="text-inputTextColor pr-2" icon={faCheckDouble} />}
          <span className="text-secondaryText text-xs">{latestMessage.message}</span>
        </div>
      </div>
    </div>
  ), []);

  return (
    <div className={'h-fit flex-1 border-t-[1px] border-borderColor overflow-auto'}>
      {users.map((user) => renderUsers(user))}
    </div>
  )
}

export default UserList