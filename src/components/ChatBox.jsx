import Message from './Message.jsx'

const ChatBox = () => {

    const messages = [
        {
            id:1,
            text: "Hello there!",
            user: "Sandesh"
        },
        {
            id:2,
            text: "Hiii",
            user: "Akash"
        }
    ]

  return (
    
    <div className="pb-44 pt-20 containerWrap">
        {messages.map(message => (
            <Message key={message.id} message = {message}/>
        ))}
    </div>
  )
}

export default ChatBox