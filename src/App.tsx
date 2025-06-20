

import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import outputs from '../amplify_outputs.json';
import { generateClient } from "aws-amplify/api";
import { Schema } from "../amplify/data/resource";
import { createAIHooks } from "@aws-amplify/ui-react-ai";
import ChatPanel from './Chat';

Amplify.configure(outputs);

export const client = generateClient<Schema>({ authMode: "userPool" });
export const { useAIConversation, useAIGeneration } = createAIHooks(client);

function App() {

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
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"none\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"0.5\"/></svg>')", backgroundSize: '20px 20px' }}></div>
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
      <ChatPanel />

    </div>
  );
}

export default App;