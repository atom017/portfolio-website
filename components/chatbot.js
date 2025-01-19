import { useState, useRef } from "react";
import { FaRobot } from "react-icons/fa";
import { AiOutlineMessage } from 'react-icons/ai';


const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatVisible, setChatVisible] = useState(false);
  const [chatWidth, setChatWidth] = useState(320);
  const [chatHeight, setChatHeight] = useState(320);
  const chatWindowRef = useRef(null);
  const resizingRef = useRef(false);
  const apiUrl = process.env.NODE_ENV === "production"
    ? "https://khaing-hsu-thwe.vercel.app/api/chatbot"
    : "/api/chatbot";

  // default bot message
  const toggleChat = () => {
    setChatVisible(!isChatVisible);
    if (!isChatVisible) {
      setChatHistory([
        { bot: "Hi, I'm Khaing's personal assistant chatbot." },
      ]);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newChatHistory = [...chatHistory, { user: message }];
    setChatHistory(newChatHistory);
    setMessage("");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      if (data.response) {
        setChatHistory([...newChatHistory, { bot: data.response }]);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  //  handle resize
  const handleMouseDown = (e) => {
    resizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (resizingRef.current) {
      const newWidth = chatWindowRef.current.getBoundingClientRect().right - e.clientX;
      const newHeight = chatWindowRef.current.getBoundingClientRect().bottom - e.clientY;


      if (newWidth > 150 && newHeight > 150) {
        setChatWidth(newWidth);
        setChatHeight(newHeight);
      }
    }
  };

  const handleMouseUp = () => {
    resizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div>

      <button
        onClick={toggleChat}
        className="fixed bottom-10 right-10 bg-gradient-to-r from-purple-400 to-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-700 transition duration-200 z-50"
      >
        <AiOutlineMessage size={24} />
      </button>



      {isChatVisible && (
        <div
          ref={chatWindowRef}
          className="fixed bottom-10 right-10 bg-white shadow-2xl rounded-lg p-3 overflow-hidden border-2 border-blue-500 z-50"
          style={{ width: `${chatWidth}px`, height: `${chatHeight}px` }}
        >

          <div className="space-y-4 overflow-y-auto h-60 max-h-64 text-black">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`flex ${chat.user ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`p-3 rounded-xl max-w-xs ${chat.user ? 'bg-blue-100 text-blue-900' : 'bg-gray-100 text-gray-900'}`}
                >
                  {chat.user || chat.bot}
                </div>
              </div>
            ))}
          </div>


          <form onSubmit={handleSubmit} className="flex space-x-2 mt-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Ask about Khaing..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </form>


          <button
            onClick={toggleChat}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition duration-200"
          >
            <span className="font-bold text-xl">&times;</span>
          </button>


          <div
            onMouseDown={handleMouseDown}
            className="absolute top-0 left-0 cursor-nwse-resize text-gray-600 w-6 h-6"
          >
            {/* Resize icon */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
