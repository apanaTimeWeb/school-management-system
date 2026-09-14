import React from "react";
import AccountantSearchBox from "./AccountantSearchBox";
import AccountantSearchResults from "./AccountantSearchResults";
import AccountantSearchModals from "./AccountantSearchModals";

export default function AccountantSearchMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1200px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="shrink-0">
        <AccountantSearchBox />
      </div>
      
      <div className="flex-1 min-h-0">
        <AccountantSearchResults />
      </div>

      <AccountantSearchModals />
      
    </div>
  );
}
