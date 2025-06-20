import React, { useState } from 'react';

interface Message {
  id: string;
  type: 'ai' | 'user';
  content: string;
  timestamp: Date;
}

function App() {
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
    <div className="flex h-screen bg-white">
      {/* Left Side - RWA Property */}
      <div className="flex-1 bg-gray-50 p-15 overflow-y-auto relative">
        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-gray-300 to-transparent"></div>
        
        <div className="mb-20">
          <div className="text-3xl font-light text-gray-800 tracking-tight mb-2">Manhattan Prime Properties</div>
          <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Premium Real Estate Investment</div>
        </div>
        
        <div className="mb-20">
          <div className="w-full h-70 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-8 flex items-center justify-center text-white text-5xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"none\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"0.5\"/></svg>')", backgroundSize: '20px 20px'}}></div>
            🏢
          </div>
          <h1 className="text-5xl font-extralight text-gray-800 leading-tight mb-4 tracking-tight">Midtown Executive Tower</h1>
          <p className="text-lg text-gray-600 leading-relaxed font-light max-w-lg">
            Class A office building in the heart of Manhattan's financial district. 
            Prime location with stable tenancy and strong cash flow potential.
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-10 mb-20">
          <div>
            <div className="text-4xl font-extralight text-gray-800 mb-2 tracking-tight">$24.5M</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Property Value</div>
          </div>
          <div>
            <div className="text-4xl font-extralight text-gray-800 mb-2 tracking-tight">7.2%</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Annual Yield</div>
          </div>
          <div>
            <div className="text-4xl font-extralight text-gray-800 mb-2 tracking-tight">98%</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Occupancy Rate</div>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-lg text-gray-800 mb-8 font-normal tracking-wide">Investment Details</h3>
          
          <div className="space-y-0">
            <div className="flex justify-between items-center py-5 border-b border-gray-100">
              <div className="text-sm text-gray-500 font-light">Property Type</div>
              <div className="text-sm text-gray-800 font-medium">Class A Office Building</div>
            </div>
            
            <div className="flex justify-between items-center py-5 border-b border-gray-100">
              <div className="text-sm text-gray-500 font-light">Location</div>
              <div className="text-sm text-gray-800 font-medium">Midtown Manhattan, NY</div>
            </div>
            
            <div className="flex justify-between items-center py-5 border-b border-gray-100">
              <div className="text-sm text-gray-500 font-light">Total Square Footage</div>
              <div className="text-sm text-gray-800 font-medium">485,000 sq ft</div>
            </div>
            
            <div className="flex justify-between items-center py-5 border-b border-gray-100">
              <div className="text-sm text-gray-500 font-light">Year Built</div>
              <div className="text-sm text-gray-800 font-medium">2018</div>
            </div>
            
            <div className="flex justify-between items-center py-5 border-b border-gray-100">
              <div className="text-sm text-gray-500 font-light">Minimum Investment</div>
              <div className="text-sm text-blue-500 font-semibold">$1,000</div>
            </div>
            
            <div className="flex justify-between items-center py-5">
              <div className="text-sm text-gray-500 font-light">Token Price</div>
              <div className="text-sm text-blue-500 font-semibold">$10.00</div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 p-8 bg-gray-100 rounded-lg border border-gray-200">
          <div className="text-base text-gray-800 mb-4 font-medium">Tokenization Overview</div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-2xl font-semibold text-blue-500 mb-1">2.45M</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Total Tokens</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-blue-500 mb-1">1.8M</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-blue-500 mb-1">650K</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Sold</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-blue-500 mb-1">73%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Available</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Chat Panel */}
      <div className="flex-1 bg-white flex flex-col border-l border-gray-200">
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
              <div className={`w-12 h-12 rounded flex items-center justify-center text-white text-base flex-shrink-0 ${
                message.type === 'ai' ? 'bg-gray-700' : 'bg-blue-500'
              }`}>
                {message.type === 'ai' ? 'A' : 'U'}
              </div>
              <div className={`p-6 rounded text-gray-800 leading-relaxed font-light border ${
                message.type === 'user' 
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
      </div>
    </div>
  );
}

export default App;