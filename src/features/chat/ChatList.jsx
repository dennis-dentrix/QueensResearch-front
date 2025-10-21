import { CheckCheck, Search } from 'lucide-react'
import profileimg from '../../assets/images/woman.png';

export default function ChatList({ onSelectChat, chats }) {


  return (
    <aside className="overflow-y-auto border-r border-gray-100 bg-white p-4 h-full">
      {/* Search */}
      <div className="relative mb-4 hidden md:block">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          placeholder="Search previous chat"
          className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm"
        />
      </div>

      {/* Chat List */}
      <ul className="space-y-3 text-sm text-gray-700">
        {chats.map((chat) => {
          const lastMessage = chat.messages[chat.messages.length - 1]?.text || 'No messages yet';

          return (
            <li
              key={chat.id}
              className="hover:bg-text/25 flex cursor-pointer items-center gap-2 rounded-md p-2"
              onClick={() => onSelectChat(chat)}
            >
              <img src={profileimg} alt="" className="h-12 w-12 rounded-full" />
              <div className="flex flex-col items-start gap-1">
                <span className="text-text/65 text-sm">{chat.name}</span>
                <div className="flex items-center gap-1">
                  <CheckCheck size={16} className="text-blue-300" />
                  <p className="text-text/55 w-48 truncate text-xs">{lastMessage}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
