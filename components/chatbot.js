import { useState } from "react";
import { FaComment } from "react-icons/fa"; // Chat icon

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatVisible, setChatVisible] = useState(false); // Toggle visibility

  // Function to toggle chat visibility
  const toggleChat = () => setChatVisible(!isChatVisible);

  // Handle message submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Don't submit empty messages

    const newChatHistory = [...chatHistory, { user: message }];
    setChatHistory(newChatHistory);
    setMessage(""); // Clear input field

    try {
      const response = await fetch("/api/chatbot", {
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
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {/* Floating chat icon */}
      <button
        onClick={toggleChat}
        className="fixed bottom-10 right-10 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition duration-200">
        <FaComment size={24} />
      </button>

      {/* Chat window */}
      {isChatVisible && (
        <div className="fixed bottom-10 right-10 bg-white shadow-2xl rounded-lg p-3 max-w-md w-full h-80 overflow-hidden border-2 border-blue-500">
          {/* Chat history */}
          <div className="space-y-4 overflow-y-auto h-60 max-h-64 text-black">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`flex ${chat.user ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`p-3 rounded-xl max-w-xs ${chat.user ? 'bg-blue-100 text-blue-900' : 'bg-gray-100 text-gray-900'}`}>
                  {chat.user || chat.bot}
                </div>
              </div>
            ))}
          </div>

          {/* Message input form */}
          <form onSubmit={handleSubmit} className="flex space-x-2 mt-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Ask me anything about my CV..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Send
            </button>
          </form>

          {/* Close button */}
          <button
            onClick={toggleChat}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition duration-200">
            <span className="font-bold text-xl">&times;</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
