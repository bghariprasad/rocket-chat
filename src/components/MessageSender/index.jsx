import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function MessageSender() {
  return (
    <div className="px-2 h-14 bg-backgroundColor flex items-center border-t-[1px] border-borderColor">
      <button><FontAwesomeIcon className="text-inputTextColor w-5 mx-2 text-xl" icon={faFaceSmile} /></button>
      <button><FontAwesomeIcon className="text-inputTextColor w-5 mx-2 text-xl" icon={faPaperclip} /></button>
      <input className="flex-1 mx-2 rounded-sm py-1 px-2" placeholder='Type a message' type="text" />
      <button><FontAwesomeIcon className="text-inputTextColor w-5 mx-2 text-xl" icon={faPaperPlane} /></button>
    </div>
  )
}

export default MessageSender