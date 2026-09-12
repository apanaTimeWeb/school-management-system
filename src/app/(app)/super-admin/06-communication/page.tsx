"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import { Bell, Mail, MessageSquare, Phone } from 'lucide-react';

import SuperAdminEmailConfig from './communication_components/SuperAdminEmailConfig';
import SuperAdminNotificationConfig from './communication_components/SuperAdminNotificationConfig';
import SuperAdminSmsConfig from './communication_components/SuperAdminSmsConfig';
import SuperAdminWhatsappConfig from './communication_components/SuperAdminWhatsappConfig';

const TABS = [
  { id: 'notifications', label: 'Notification Config', icon: Bell },
  { id: 'email', label: 'Email Configuration', icon: Mail },
  { id: 'sms', label: 'SMS Configuration', icon: MessageSquare },
  { id: 'whatsapp', label: 'WhatsApp Config', icon: Phone },
];

export default function CommunicationPage() {
  const [activeTab, setActiveTab] = useState('notifications');

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      
      {/* Header Area */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Communication & Notifications</h1>
          <p className="text-sm text-text-secondary mt-1">Configure automated notifications, templates, and gateway settings for Email, SMS, and WhatsApp.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-text-secondary hover:text-primary hover:bg-page"
              )}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-4">
        {activeTab === 'notifications' && (
          <div className="flex flex-col gap-6">
            <SuperAdminNotificationConfig />
          </div>
        )}

        {activeTab === 'email' && (
          <div className="flex flex-col gap-6">
            <SuperAdminEmailConfig />
          </div>
        )}

        {activeTab === 'sms' && (
          <div className="flex flex-col gap-6">
            <SuperAdminSmsConfig />
          </div>
        )}

        {activeTab === 'whatsapp' && (
          <div className="flex flex-col gap-6">
            <SuperAdminWhatsappConfig />
          </div>
        )}
      </div>
    </div>
  );
}
