'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from './ui/Button';
import ScrollArea from './ui/Scrollarea';
import TextArea from './ui/Textarea';

interface Message {
  role: 'agent' | 'user';
  content: string;
  timestamp: string;
}

export default function ChatInterface() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'agent',
      content: 'Hello! How can I help you today?',
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full w-full max-w-3xl mx-auto border rounded-lg shadow-md bg-white">
      <ScrollArea className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                'flex gap-2 max-w-[80%]',
                message.role === 'user' ? 'ml-auto text-right' : ''
              )}
            >
              <div className="space-y-2">
                <div className="text-sm text-gray-600">{message.timestamp}</div>
                <div
                  className={cn(
                    'p-3 rounded-lg text-sm',
                    message.role === 'agent' ? 'bg-gray-200' : 'bg-blue-500 text-white'
                  )}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t flex items-center gap-2">
        <TextArea
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 min-h-[44px] max-h-32 border rounded-lg p-2"
        />
        <Button onClick={sendMessage} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

