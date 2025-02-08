"use client";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi"; // Importing Send icon from react-icons

const ChatBox = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  
  const sendMessage = async () => {
    if (!input) return;
  
    // Add user's message
    setMessages((prevMessages) => [...prevMessages, `User: ${input}`]);
    setInput(""); // Clear input field
  
    // Show typing indicator while AI is typing
    setIsTyping(true);
    setAiResponse(""); // Clear previous AI response
  
    // Call API to get AI response
    const res = await fetch("https://cors-anywhere-serve.up.railway.app/https://chatting-application-seven.vercel.app/api/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });
  
    const reader = res.body?.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let responseText = '';
  
    while (!done) {
      const { value, done: doneReading } = await reader!.read();
      done = doneReading;
      responseText += decoder.decode(value, { stream: true });
  
      // Update the AI response progressively
      setAiResponse((prev) => prev + responseText.slice(prev.length));
    }
  
    // Clean the AI response
    const cleanedResponse = responseText
      .replace(/{"reply":"|"}$/g, '') // Remove the outer {"reply": ""} part
      .replace(/\\n/g, '\n'); // Replace \n with actual newlines
  
    // Once the response is fully typed, update the messages and stop typing indicator
    setMessages((prevMessages) => [...prevMessages, `AI: ${cleanedResponse}`]);
    setIsTyping(false);
  };
  
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg">
      <div className="overflow-y-auto flex-1 p-2 rounded-md space-y-4">
        {messages.map((message, index) => {
          const isUserMessage = message.startsWith("User");

          return (
            <div
              key={index}
              className={`flex ${isUserMessage ? "justify-end" : "justify-start"} p-2`}
            >
              <div
                className={`p-2 rounded-md max-w-xs ${isUserMessage ? "bg-gray-500 text-white" : "bg-gray-100 text-black"}`}
              >
                <p>{message.replace(/^User: |AI: /, "")}</p>
              </div>
            </div>
          );
        })}
        {isTyping && (
          <div className="my-2 text-gray-500">AI is typing...</div>
        )}
      </div>

      <div className="relative flex items-center w-full">
        <textarea
          className="w-full text-black p-3 pr-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
          rows={1} // Adjust rows to make the textarea more compact
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        
        {/* Send button as arrow inside the text box */}
        <button
          onClick={sendMessage}
          className="absolute right-3 bottom-3 text-gray-600 hover:text-gray-400 transition duration-200"
        >
          <FiSend size={24} />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
