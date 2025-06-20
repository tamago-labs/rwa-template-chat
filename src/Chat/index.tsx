import React, { useState } from 'react';
import { Authenticator } from "@aws-amplify/ui-react";
import { AIConversation } from '@aws-amplify/ui-react-ai';
import { useAIConversation } from "../App"

interface Message {
    id: string;
    type: 'ai' | 'user';
    content: string;
    timestamp: Date;
}

const ChatPanel = () => {

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            type: 'ai',
            content: 'Welcome to Manhattan Prime Properties. I\'m here to help you invest in the Midtown Executive Tower. This premium Class A office building offers excellent returns with a 7.2% annual yield and 98% occupancy rate. With tokens starting at just $10, you can begin building your real estate portfolio today.',
            timestamp: new Date()
        }
    ]);

    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            content: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        setTimeout(() => {
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                type: 'ai',
                content: 'Thank you for your interest. I can provide more details about the investment opportunity, help you calculate potential returns, or assist with the token purchase process. What would you like to know?',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMessage]);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const quickInvest = (amount: string) => {
        setInputValue(`I'd like to invest ${amount} in the Midtown Executive Tower`);
    };

    return (
        <div className="flex-1 bg-white flex flex-col border-l border-gray-200">
            <Authenticator>
                <>
                    <div className="bg-white p-10 border-b border-gray-200">
                        <div className="text-2xl font-light text-gray-800 mb-2 tracking-tight">Investment Assistant</div>
                        <div className="text-sm text-gray-500 font-light">Expert guidance for your real estate investment</div>

                        <div className="flex items-center gap-3 mt-5 p-4 bg-gray-100 rounded border border-gray-200">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="text-xs text-gray-500 font-light">Market data live</div>
                        </div>
                    </div>

                    <div className="flex-1 p-10 overflow-y-auto flex flex-col gap-8">
                        {messages.map((message) => (
                            <div key={message.id} className={`flex gap-5 ${message.type === 'user' ? 'self-end flex-row-reverse max-w-3/4' : 'max-w-3/4'}`}>
                                <div className={`w-12 h-12 rounded flex items-center justify-center text-white text-base flex-shrink-0 ${message.type === 'ai' ? 'bg-gray-700' : 'bg-blue-500'
                                    }`}>
                                    {message.type === 'ai' ? 'A' : 'U'}
                                </div>
                                <div className={`p-6 rounded text-gray-800 leading-relaxed font-light border ${message.type === 'user'
                                    ? 'bg-blue-500 text-white border-transparent'
                                    : 'bg-gray-100 border-gray-200'
                                    }`}>
                                    {message.content}
                                    {message.type === 'ai' && message.id === '1' && (
                                        <div className="mt-5 flex flex-wrap gap-3">
                                            <button
                                                onClick={() => quickInvest('$1,000')}
                                                className="px-4 py-2 bg-gray-200 border border-gray-300 rounded text-xs text-gray-800 hover:bg-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all font-normal"
                                            >
                                                Buy 100 tokens ($1,000)
                                            </button>
                                            <button
                                                onClick={() => quickInvest('$5,000')}
                                                className="px-4 py-2 bg-gray-200 border border-gray-300 rounded text-xs text-gray-800 hover:bg-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all font-normal"
                                            >
                                                Buy 500 tokens ($5,000)
                                            </button>
                                            <button
                                                onClick={() => setInputValue('I\'d like to invest a custom amount')}
                                                className="px-4 py-2 bg-gray-200 border border-gray-300 rounded text-xs text-gray-800 hover:bg-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all font-normal"
                                            >
                                                Custom amount
                                            </button>
                                            <button
                                                onClick={() => setInputValue('Show me detailed analytics for this property')}
                                                className="px-4 py-2 bg-gray-200 border border-gray-300 rounded text-xs text-gray-800 hover:bg-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all font-normal"
                                            >
                                                View detailed analytics
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {messages.length === 1 && (
                            <div className="text-center text-gray-400 italic font-light mt-20 text-base">
                                Ask about investment strategies, property details, or place your order...
                            </div>
                        )}
                    </div>

                    <div className="p-10 bg-white border-t border-gray-200">
                        <div className="flex gap-5 items-end">
                            <textarea
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="flex-1 p-5 border-2 border-gray-200 rounded text-gray-800 resize-none min-h-6 max-h-30 font-light text-sm transition-colors focus:outline-none focus:border-blue-500"
                                placeholder="Ask about the property, investment terms, or how to purchase tokens..."
                                rows={1}
                            />
                            <button
                                onClick={handleSend}
                                className="bg-blue-500 text-white border-none rounded px-8 py-5 cursor-pointer font-normal text-sm tracking-wide transition-colors hover:bg-blue-600"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </>
            </Authenticator>
        </div>
    )
}

export default ChatPanel