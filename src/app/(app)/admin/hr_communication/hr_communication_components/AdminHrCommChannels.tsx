"use client";

import { ServerCrash, CheckCircle } from "lucide-react";
import type { CommChannelConfig } from "../hr_communication_types/AdminHrCommTypes";

interface AdminHrCommChannelsProps {
  channels: CommChannelConfig[];
  toggleChannelStatus: (id: string) => void;
}

export default function AdminHrCommChannels({ channels, toggleChannelStatus }: AdminHrCommChannelsProps) {

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {channels.map(c => (
          <div key={c.id} className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
            <h3 className="text-lg font-bold text-foreground mb-1">{c.channelName}</h3>
            <p className="text-xs font-bold text-muted-foreground mb-6 uppercase tracking-wider">{c.provider}</p>
            
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors ${c.isActive ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
              {c.isActive ? <CheckCircle size={32} /> : <ServerCrash size={32} />}
            </div>

            <p className="text-xs text-muted-foreground mb-4">Last Sync: {new Date(c.lastSync).toLocaleString()}</p>

            <label className="relative inline-flex items-center cursor-pointer mt-auto">
              <input type="checkbox" className="sr-only peer" checked={c.isActive} onChange={() => toggleChannelStatus(c.id)} />
              <div className="w-11 h-6 bg-input rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-success after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="ml-3 text-sm font-bold text-foreground">{c.isActive ? 'Enabled' : 'Disabled'}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
