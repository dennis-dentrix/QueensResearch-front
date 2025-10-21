import { ChevronLeft, SendHorizontal } from 'lucide-react';
import profileimg from '../assets/images/woman.png';

export default function ChatBox({ chat, onBack }) {
  if (!chat) return null;

  return (
    <section className="flex flex-col h-full bg-white shadow-sm overflow-hidden rounded-b-xl">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-primary/10 border-b border-primary/20">
        <button
          onClick={onBack}
          className="text-sm text-primary font-semibold p-2 rounded-full hover:bg-primary/20 md:hidden"
        >
          <ChevronLeft size={22} />
        </button>
        <img src={profileimg} alt="Profile" className="h-10 w-10 rounded-full" />
        <h2 className="text-base font-bold text-text/75">{chat.name}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {chat.messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${msg.sender === 'You' ? 'items-end' : 'items-start'
              }`}
          >
            <span className="text-xs text-gray-500 mb-1">{msg.sender}:</span>
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${msg.sender === 'You'
                ? 'bg-text/75 text-white'
                : 'bg-primary/10 text-primary'
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="border-t border-gray-200 px-4 py-3 bg-white">
        <div className="flex items-end gap-3">
          <textarea
            placeholder="Type your message..."
            rows={1}
            className="w-full resize-none overflow-hidden text-sm text-gray-800 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-0"
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          />
          <button
            type="submit"
            className="text-primary hover:text-primary/80 transition-colors duration-200"
            aria-label="Send message"
          >
            <SendHorizontal size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
