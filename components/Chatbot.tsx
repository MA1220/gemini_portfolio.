import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Chat } from '@google/genai';
import { getChatSession } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';
import { ChatIcon, CloseIcon, SendIcon, UserIcon, BotIcon } from './icons/ChatIcons';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: ChatRole.MODEL, content: "Hi! I'm Gemi, Maheshwar's AI assistant. Feel free to ask me about his work, or just ask for a tech joke!" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatSessionRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chatSessionRef.current) {
            try {
                chatSessionRef.current = getChatSession();
            } catch (error) {
                console.error("Failed to initialize chat session:", error);
                setMessages(prev => [...prev, { role: ChatRole.MODEL, content: "Sorry, I'm having trouble connecting to my brain right now. Please check the API key configuration."}]);
            }
        }
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chatSessionRef.current) return;
    
        const userMessage: ChatMessage = { role: ChatRole.USER, content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
    
        try {
            const stream = await chatSessionRef.current.sendMessageStream({ message: input });
            
            let modelResponse = '';
            setMessages(prev => [...prev, { role: ChatRole.MODEL, content: '' }]);

            for await (const chunk of stream) {
                modelResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].content = modelResponse;
                    return newMessages;
                });
            }

        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, { role: ChatRole.MODEL, content: "Oops! Something went wrong. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    }, [input, isLoading]);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-transform transform hover:scale-110 z-50"
                aria-label="Toggle Chatbot"
            >
                {isOpen ? <CloseIcon className="w-6 h-6" /> : <ChatIcon className="w-6 h-6" />}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-[calc(100%-3rem)] max-w-sm h-[70vh] max-h-[600px] bg-[var(--card-background)] border border-[var(--card-border)] rounded-2xl shadow-2xl flex flex-col z-50 transition-colors duration-300">
                    <header className="bg-[var(--foreground)] p-4 rounded-t-2xl flex items-center justify-between border-b border-[var(--card-border)]">
                        <h3 className="text-lg font-semibold text-[var(--text-primary)]">Chat with Gemi</h3>
                    </header>
                    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[var(--background)]">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-start gap-3 ${msg.role === ChatRole.USER ? 'justify-end' : ''}`}>
                                {msg.role === ChatRole.MODEL && <BotIcon className="w-8 h-8 flex-shrink-0 text-[var(--accent)]" />}
                                <div className={`px-4 py-2 rounded-xl max-w-xs md:max-w-sm break-words ${msg.role === ChatRole.USER ? 'bg-[var(--accent)] text-white rounded-br-none' : 'bg-[var(--foreground)] text-[var(--text-primary)] rounded-bl-none shadow-sm'}`}>
                                    {msg.content}
                                </div>
                                {msg.role === ChatRole.USER && <UserIcon className="w-8 h-8 flex-shrink-0 text-[var(--text-secondary)]" />}
                            </div>
                        ))}
                        {isLoading && (
                             <div className="flex items-start gap-3">
                                <BotIcon className="w-8 h-8 flex-shrink-0 text-[var(--accent)]" />
                                <div className="px-4 py-3 bg-[var(--foreground)] rounded-xl rounded-bl-none shadow-sm">
                                    <div className="flex items-center space-x-1">
                                        <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse delay-0"></span>
                                        <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse delay-200"></span>
                                        <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse delay-400"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleSendMessage} className="p-4 border-t border-[var(--card-border)]">
                        <div className="flex items-center bg-[var(--input-background)] rounded-full pr-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything..."
                                disabled={isLoading}
                                className="w-full bg-transparent text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none px-4 py-2"
                            />
                            <button type="submit" disabled={isLoading || !input.trim()} className="p-2 bg-[var(--accent)] rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed hover:opacity-90 transition-colors">
                                <SendIcon className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot;