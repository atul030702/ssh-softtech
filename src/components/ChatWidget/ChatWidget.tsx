"use client";

import { useState, useRef, useEffect } from "react";
import { Clock, X, Send, Bot } from "lucide-react";

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hello! welcome to SSH Softtech. How can I help you today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();

        if (!inputValue.trim()) return;

        const newUserMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue("");

        // Simulate bot response
        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: "Thanks for reaching out! Our team is currently offline, but please leave your contact details in the 'Contact Us' form and we'll get back to you shortly.",
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-4 right-4 z-60 font-sans">

            {/* --- Launcher Button --- */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`group relative flex items-center justify-center cursor-pointer transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                {/* Text Label (Tooltip) */}
                <div className={`
                    absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white 
                    px-4 py-2 rounded-xl shadow-lg border border-slate-100 dark:border-white/10
                    whitespace-nowrap font-medium text-sm transition-all duration-300 origin-right
                `}>
                    🙋‍♂️ I'm here to help you
                    {/* Arrow/Triangle */}
                    <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white dark:bg-slate-800 rotate-45 border-t border-r border-slate-100 dark:border-white/10" />
                </div>

                {/* Circle Icon */}
                <div className={`
                    w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300
                    bg-brand-600 hover:bg-brand-700 text-white relative overflow-hidden
                `}>
                    <div className="flex flex-col items-center justify-center leading-none">
                        <span className="text-[10px] font-bold opacity-80">SSH</span>
                        <Bot size={24} />
                    </div>
                </div>
            </button>

            {/* --- Chat Modal --- */}
            <div
                className={`
                    absolute bottom-0 right-0
                    origin-bottom-right transition-all duration-300 ease-out 
                    ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
                    w-[400px] h-[600px] bg-white dark:bg-slate-900 
                    rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 
                    flex flex-col overflow-hidden z-20
                `}
            >
                {/* Header */}
                <div className="bg-brand-600 p-4 flex items-center justify-between text-white shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <Bot size={18} />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">SSH Support</h3>
                            <p className="text-xs text-brand-100 flex items-center gap-1">
                                <Clock size={16} />
                                Usual reply time: 2 to 3 Minutes
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Messages Body */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-black/20">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`
                                    max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed
                                    ${msg.sender === 'user'
                                        ? 'bg-brand-600 text-white rounded-br-none'
                                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5 rounded-bl-none shadow-sm'
                                    }
                                `}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Footer */}
                <form
                    onSubmit={handleSendMessage}
                    className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-white/5 flex gap-2 shrink-0"
                >
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all placeholder:text-slate-400"
                    />
                    <button
                        type="submit"
                        disabled={!inputValue.trim()}
                        className="p-2 bg-brand-600 text-white rounded-xl hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center aspect-square"
                    >
                        <Send size={18} />
                    </button>
                </form>
            </div>

        </div>
    );
};

export default ChatWidget;
