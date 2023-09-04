import MessageContainer from "../MessageContainer"
import MessageHeader from "../MessageHeader"
import MessageSender from "../MessageSender"

function MessageWrapper({ className }) {
  return (
    <section className={className}>
      <MessageHeader />
      <MessageContainer />
      <MessageSender />
    </section>
  )
}

export default MessageWrapper