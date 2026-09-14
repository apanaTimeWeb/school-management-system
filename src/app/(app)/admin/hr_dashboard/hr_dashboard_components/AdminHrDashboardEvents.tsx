"use client";

// RESPONSIBILITY: Renders upcoming birthdays and work anniversaries with a "Send Wish" action.

import { useState } from "react";
import { Gift, Award, Send, X, CheckCircle } from "lucide-react";
import type { HrDashboardStats, UpcomingEvent } from "../hr_dashboard_types/AdminHrDashboardTypes";

interface AdminHrDashboardEventsProps {
  stats: HrDashboardStats;
}

export default function AdminHrDashboardEvents({ stats }: AdminHrDashboardEventsProps) {
  const [selectedEvent, setSelectedEvent] = useState<UpcomingEvent | null>(null);
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const openWishModal = (event: UpcomingEvent) => {
    setSelectedEvent(event);
    setMessage(`Wishing you a very Happy ${event.eventType === 'birthday' ? 'Birthday' : 'Work Anniversary'}, ${event.staffName}! 🎉`);
    setIsSent(false);
  };

  const closeWishModal = () => {
    setSelectedEvent(null);
  };

  const handleSendWish = () => {
    setIsSent(true);
    setTimeout(() => {
      closeWishModal();
    }, 1500);
  };

  const renderList = (items: UpcomingEvent[], emptyMsg: string, isBirthday: boolean) => {
    if (items.length === 0) {
      return (
        <div className="py-6 text-center text-sm text-muted-foreground border border-dashed border-border rounded-md">
          {emptyMsg}
        </div>
      );
    }
    
    return (
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-input border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200 group cursor-pointer">
            <div className="flex flex-col mb-2 sm:mb-0">
              <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{item.staffName}</span>
              <span className="text-xs font-medium text-muted-foreground mt-1">
                {item.eventType === 'anniversary' && item.years ? `${item.years} Years Completed` : 'Birthday'}
              </span>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end sm:flex-col gap-2">
              <span className={`text-sm font-bold ${isBirthday ? 'text-purple-500' : 'text-primary'}`}>
                {item.date}
              </span>
              <button 
                onClick={(e) => { e.stopPropagation(); openWishModal(item); }}
                className="flex items-center gap-1.5 text-xs font-bold text-white bg-primary px-3 py-1.5 rounded-full hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/20 active:scale-95 transition-all"
              >
                <Send size={12} /> Send Wish
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Birthdays */}
        <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-5 border-b border-border pb-3">
            <div className="p-2 rounded-md bg-purple-500/10">
              <Gift size={20} className="text-purple-500" />
            </div>
            <h2 className="text-base font-bold text-foreground uppercase tracking-wide">Birthdays</h2>
          </div>
          {renderList(stats.upcomingBirthdays, "No upcoming birthdays.", true)}
        </div>

        {/* Anniversaries */}
        <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-5 border-b border-border pb-3">
            <div className="p-2 rounded-md bg-primary/10">
              <Award size={20} className="text-primary" />
            </div>
            <h2 className="text-base font-bold text-foreground uppercase tracking-wide">Anniversaries</h2>
          </div>
          {renderList(stats.upcomingAnniversaries, "No upcoming work anniversaries.", false)}
        </div>
      </div>

      {/* Send Wish Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
          <div className="bg-overlay border border-border rounded-xl w-full max-w-sm shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95">
            <div className="flex items-center justify-between p-4 border-b border-border bg-card">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                {selectedEvent.eventType === 'birthday' ? <Gift className="text-purple-500" size={18} /> : <Award className="text-primary" size={18} />}
                Send a Wish
              </h3>
              <button onClick={closeWishModal} className="p-1 hover:bg-input rounded-full text-muted-foreground transition-colors">
                <X size={18} />
              </button>
            </div>
            
            <div className="p-5">
              {!isSent ? (
                <>
                  <p className="text-sm text-muted-foreground mb-4">
                    Send a direct message to <span className="font-bold text-foreground">{selectedEvent.staffName}</span>.
                  </p>
                  
                  <textarea 
                    className="w-full bg-input border border-border focus:border-primary rounded-md p-3 text-sm text-foreground min-h-[100px] outline-none transition-colors mb-5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  
                  <button 
                    onClick={handleSendWish}
                    className="w-full flex justify-center items-center gap-2 py-2.5 rounded-lg bg-primary text-card font-bold hover:bg-yellow-500 shadow-lg shadow-yellow-500/20 active:scale-95 transition-all"
                  >
                    <Send size={16} /> Send Message
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-6">
                  <CheckCircle size={48} className="text-success mb-4 animate-bounce" />
                  <h4 className="text-lg font-bold text-foreground">Wish Sent!</h4>
                  <p className="text-sm text-muted-foreground mt-1">Your message has been delivered.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
