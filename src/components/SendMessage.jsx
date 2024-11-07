import { useState } from "react"
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
const SendMessage = () => {
    const [message, setMessage] = useState("");
    const {currUser} = UserAuth();

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if(message.trim() === ""){
          alert("Enter Valid message...")
          return;
        }

        try {
          const {uid, displayName, photoURL} = currUser;
          await addDoc(collection(db, "messages"), {
              text: message,
              name: displayName,
              avatar: photoURL,
              createdAt: serverTimestamp(),
              uid
          })
        } catch (error) {
            console.log(error)
        }
        setMessage("");
        console.log(message)
    }

  return (
    <div className="bg-primary-content fixed bottom-0 w-full py-10 shadow-lg">
        <form onSubmit={handleSendMessage} className="containerWrap flex px-5" >
            <input value = {message} onChange={e => setMessage(e.target.value)}
            className="input w-full focus:outline-none bg-primary rounded-r-none text-primary-content" type="text"/>
            <button type="submit" className="w-auto bg-info text-secondary-content rounded-r-lg px-5 text-slg font-bold">✔</button>
        </form>
    </div>
  )
}

export default SendMessage