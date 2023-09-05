import MessageWrapper from "../../components/MessageWrapper"
import UserWrapper from "../../components/UserWrapper"

function Chat() {
  return (
    <main className="p-8 h-screen bg-primaryColor">
      <section className="overflow-hidden rounded-lg w-full h-full bg-white flex divide-x-[1px] divide-borderColor">
        <UserWrapper className="w-4/12 flex flex-col" />
        <MessageWrapper className="w-8/12 flex flex-col"/>
      </section>
    </main>
  )
}

export default Chat