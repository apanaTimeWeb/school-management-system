"use client";

import { User, Shield, Network, Loader2 } from "lucide-react";
import { useAdminHrMyProfile } from "./useAdminHrMyProfile";
import AdminHrProfileTab from "./AdminHrProfileTab";
import AdminHrSecurityTab from "./AdminHrSecurityTab";
import AdminHrSessionsTab from "./AdminHrSessionsTab";
import AdminHr2faModal from "./AdminHr2faModal";

export default function AdminHrMyProfileMain() {
  const {
    activeTab, setActiveTab,
    profile, isLoading,
    handleProfileSave,
    is2FAModalOpen, setIs2FAModalOpen, handle2FAToggle, complete2FASetup
  } = useAdminHrMyProfile();

  if (isLoading || !profile) {
    return (
      <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
        <Loader2 className="animate-spin text-primary mb-4" size={36} />
        <span className="text-sm text-muted-foreground font-bold">Loading Profile Settings...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full items-start">
      
      {/* Vertical Navigation (Left) */}
      <div className="w-full md:w-64 flex flex-row md:flex-col gap-2 overflow-x-auto scrollbar-hide flex-shrink-0">
         <button onClick={() => setActiveTab('Profile')} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all text-left whitespace-nowrap ${activeTab === 'Profile' ? 'bg-primary text-card shadow-md shadow-primary/20' : 'text-muted-foreground hover:bg-input hover:text-foreground'}`}>
           <User size={18}/> Personal Profile
         </button>
         <button onClick={() => setActiveTab('Security')} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all text-left whitespace-nowrap ${activeTab === 'Security' ? 'bg-primary text-card shadow-md shadow-primary/20' : 'text-muted-foreground hover:bg-input hover:text-foreground'}`}>
           <Shield size={18}/> Security Settings
         </button>
         <button onClick={() => setActiveTab('Sessions')} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all text-left whitespace-nowrap ${activeTab === 'Sessions' ? 'bg-primary text-card shadow-md shadow-primary/20' : 'text-muted-foreground hover:bg-input hover:text-foreground'}`}>
           <Network size={18}/> Sessions & History
         </button>
      </div>

      {/* Main Content Area (Right) */}
      <div className="flex-1 w-full min-w-0">
        {activeTab === 'Profile' && (
          <AdminHrProfileTab profile={profile} handleSave={handleProfileSave} />
        )}
        
        {activeTab === 'Security' && (
          <AdminHrSecurityTab profile={profile} handle2FAToggle={handle2FAToggle} />
        )}

        {activeTab === 'Sessions' && (
          <AdminHrSessionsTab />
        )}
      </div>

      <AdminHr2faModal 
        isOpen={is2FAModalOpen} 
        close={() => setIs2FAModalOpen(false)} 
        completeSetup={complete2FASetup} 
      />

    </div>
  );
}
