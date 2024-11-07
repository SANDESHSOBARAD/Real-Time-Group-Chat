import { UserAuth } from "../context/AuthContext"

const message = ({message}) => {

  const {currUser} = UserAuth();
  return (
    <div>
        <div className={`chat ${message.uid === currUser.uid ? "chat-end" : "chat-start" }`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src= {message.avatar} />
    </div>
  </div>
  <div className="chat-header">
    {message.name}
  </div>
  <div className="chat-bubble">{message.text}</div>
</div>

    </div>
  )
}

export default message