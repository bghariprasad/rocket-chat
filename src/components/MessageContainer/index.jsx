import { useState } from 'react';
import './styles.css';

const messageJson = [
  {
    message: 'h1',
    sender: 'me',
    timeStamp: 1213123123,
    isSeen: false,
    isDelivered: true,
  },
  {
    message: 'how are you',
    sender: 'me',
    timeStamp: 1213123123,
    isSeen: false,
    isDelivered: true,
  },
  {
    message: 'Hello!',
    sender: 'user1',
    timeStamp: 121312334,
    isSeen: false,
    isDelivered: true,
  }
]

function MessageContainer() {
  const [currentUser] = useState('me');

  const renderMessage = ({message, sender}) => (
    <div className={`${sender === currentUser ? 'self-end sb1 box1' : 'self-start sb2 box2'}`}>{message}</div>
  );

  return (
    <div className="backdrop flex-1 flex flex-col justify-end">
      {messageJson.map((message) => renderMessage(message))}
    </div>
  )
}

export default MessageContainer