import { useState } from 'react';
import ChatList from '../components/ChatList';
import ChatBox from '../components/ChatBox';

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleSelectChat = (chat) => setSelectedChat(chat);
  const handleBack = () => setSelectedChat(null);

  const chats = [
    {
      id: 1,
      name: 'Lady Bee',
      messages: [
        { id: 101, sender: 'Lady Bee', text: 'How are you doing? What do yo mean??' },
        { id: 102, sender: 'You', text: 'I miss you, wish you called.' },
      ],
    },
    {
      id: 2,
      name: 'Bow Bee',
      messages: [
        { id: 201, sender: 'Bow Bee', text: 'Lorem ipsum dolor sit amet consectetur.' },
      ],
    },
  ];
  return (
    <div className="flex flex-1 min-h-0 bg-white rounded-xl shadow-sm overflow-hidden">
      <div
        className={`grid flex-1 transition-all duration-300 ease-in-out ${selectedChat ? 'grid-cols-1 md:grid-cols-[20rem_1fr]' : 'grid-cols-1 md:grid-cols-[20rem_1fr]'
          }`}
      >
        {/* Chat List */}
        <aside
          className={`${selectedChat ? 'hidden md:block' : 'block'
            } overflow-y-auto border-r border-gray-100 bg-white transition-all duration-300`}
        >
          <ChatList onSelectChat={handleSelectChat} chats={chats} />


        </aside>

        {/* Chat Box */}
        <section
          className={`${selectedChat ? 'block' : 'hidden md:block'
            } overflow-y-auto bg-gray-50 transition-all duration-300`}
        >
          {selectedChat ? (
            <ChatBox chat={selectedChat} onBack={handleBack} />
          ) : (
            <div className="flex items-center justify-center h-full text-center px-6">
              <p className="text-primary/60 text-lg font-medium">
                Start a new chat or select an existing conversation to continue.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
