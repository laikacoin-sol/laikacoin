import { useState, useCallback } from "react";
import { Check, Copy } from "lucide-react";

const address = "57GJspLHHMRyeVC4neEdmxDtSvoBjXkcVCXN52Z7pump";

export default function Address() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(address).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  }, []);

  return (
    <div className="mt-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2 text-center">Solana address</h2>

      <div className="md:w-1/2 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-0.5 rounded-lg shadow-lg">
        <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg p-2">
          <input
            type="text"
            value={address}
            readOnly
            className="flex-grow font-mono text-sm bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 dark:text-gray-300"
            aria-label="Solana address"
          />
          <button
            onClick={copyToClipboard}
            className={`p-2 rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
              isCopied
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
            aria-label={isCopied ? "Copied" : "Copy to clipboard"}
          >
            {isCopied ? (
              <Check className="h-5 w-5" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
