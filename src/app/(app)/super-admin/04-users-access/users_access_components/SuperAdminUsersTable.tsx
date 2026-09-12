"use client";

import { useState, useRef, useEffect } from "react";
import { Eye, Edit, Trash2, PowerOff, Power, ShieldAlert, Lock, Unlock, RefreshCw, LogOut, Key, RotateCcw, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import type { UserProfileType } from "../users_access_types/super_admin_user_management.types";
import SuperAdminViewUserDrawer from "./SuperAdminViewUserDrawer";

interface TableProps {
  onEdit: (user: UserProfileType) => void;
}

export default function SuperAdminUsersTable({ onEdit }: TableProps) {
  const [viewUserId, setViewUserId] = useState<string | null>(null);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const users: UserProfileType[] = [
    { id: "u1", name: "Amit Sharma", username: "amit.sharma", email: "amit@school.com", mobile: "9876543210", profilePhoto: "", role: "Principal", branch: "Main Campus", department: "Administration", status: "Active" },
    { id: "u2", name: "Rahul Verma", username: "rahul.v", email: "rahul@school.com", mobile: "9876543211", profilePhoto: "", role: "Admin", branch: "Main Campus", department: "IT", status: "Suspended" },
    { id: "u3", name: "Sneha Gupta", username: "sneha.g", email: "sneha@school.com", mobile: "9876543212", profilePhoto: "", role: "Teacher", branch: "North Branch", department: "Academic", status: "Locked" },
    { id: "u4", name: "Ravi Kumar", username: "ravi.k", email: "ravi@school.com", mobile: "9876543213", profilePhoto: "", role: "Accountant", branch: "Main Campus", department: "Accounts", status: "Inactive" },
    { id: "u5", name: "Priya Singh", username: "priya.s", email: "priya@school.com", mobile: "9876543214", profilePhoto: "", role: "Librarian", branch: "North Branch", department: "Library", status: "Deleted" },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Active': return 'bg-success-bg text-success border-success/20';
      case 'Inactive': return 'bg-warning-bg text-warning border-warning/20';
      case 'Suspended': return 'bg-purple-bg text-purple border-purple/20';
      case 'Locked': return 'bg-danger-bg text-danger border-danger/20';
      case 'Deleted': return 'bg-bg-page text-text-secondary border-border';
      default: return 'bg-bg-page text-text-secondary';
    }
  };

  const getRoleColor = (role: string) => {
    if (['Admin', 'Principal'].includes(role)) return 'text-danger font-bold';
    if (['Teacher', 'Accountant', 'Office/HR', 'Librarian'].includes(role)) return 'text-primary font-semibold';
    return 'text-text-primary font-medium';
  };

  return (
    <>
      <div className="bg-card border border-border rounded-lg overflow-x-auto pb-24">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
            <tr>
              <th className="px-4 py-3 border-b border-border">Profile & Name</th>
              <th className="px-4 py-3 border-b border-border">Contact Info</th>
              <th className="px-4 py-3 border-b border-border">Role & Dept</th>
              <th className="px-4 py-3 border-b border-border">Branch</th>
              <th className="px-4 py-3 border-b border-border text-center">Status</th>
              <th className="px-4 py-3 border-b border-border text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-bg-page transition-colors group cursor-pointer relative">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-subtle flex items-center justify-center text-primary font-bold text-xs shrink-0 border border-primary/20">
                      {user.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-text-primary">{user.name}</span>
                      <span className="text-[11px] text-text-secondary">@{user.username}</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="text-text-primary text-xs">{user.email}</span>
                    <span className="text-[11px] text-text-secondary">{user.mobile}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className={cn("text-xs", getRoleColor(user.role))}>{user.role}</span>
                    <span className="text-[11px] text-text-secondary">{user.department || '-'}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-text-secondary text-xs">{user.branch}</td>
                <td className="px-4 py-3 text-center">
                  <span className={cn("px-2 py-0.5 rounded text-[10px] font-medium border", getStatusColor(user.status))}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="relative inline-block text-left">
                    <button 
                      onClick={() => setOpenDropdownId(openDropdownId === user.id ? null : user.id)}
                      className="p-1.5 text-text-secondary hover:bg-bg-page rounded-md transition-colors"
                    >
                      <MoreVertical size={16} />
                    </button>
                    
                    {openDropdownId === user.id && (
                      <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-md shadow-lg z-10 py-1">
                        
                        <div className="px-3 py-1.5 text-xs font-bold text-text-primary border-b border-border bg-bg-page">Basic Actions</div>
                        <button onClick={() => {setViewUserId(user.id); setOpenDropdownId(null);}} className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-primary flex items-center gap-2"><Eye size={14}/> View User</button>
                        <button onClick={() => {onEdit(user); setOpenDropdownId(null);}} className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-info flex items-center gap-2"><Edit size={14}/> Edit User</button>
                        
                        <div className="px-3 py-1.5 text-xs font-bold text-text-primary border-y border-border bg-bg-page mt-1">Status Management</div>
                        {user.status === 'Deleted' ? (
                          <button className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-success flex items-center gap-2"><RotateCcw size={14}/> Restore</button>
                        ) : (
                          <>
                            {user.status !== 'Active' ? (
                              <button className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-success flex items-center gap-2"><Power size={14}/> Activate</button>
                            ) : (
                              <button className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-warning flex items-center gap-2"><PowerOff size={14}/> Deactivate</button>
                            )}
                            
                            {user.status !== 'Suspended' && (
                              <button className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-purple flex items-center gap-2"><ShieldAlert size={14}/> Suspend</button>
                            )}

                            {user.status === 'Locked' ? (
                              <button className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-success flex items-center gap-2"><Unlock size={14}/> Unlock account</button>
                            ) : (
                              <button className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-danger flex items-center gap-2"><Lock size={14}/> Lock account</button>
                            )}
                          </>
                        )}

                        <div className="px-3 py-1.5 text-xs font-bold text-text-primary border-y border-border bg-bg-page mt-1">Security & Danger</div>
                        <button className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-info flex items-center gap-2"><Key size={14}/> Reset password</button>
                        <button className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-warning flex items-center gap-2"><RefreshCw size={14}/> Force password change</button>
                        <button className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-danger flex items-center gap-2"><LogOut size={14}/> Force logout</button>
                        
                        {user.status !== 'Deleted' && (
                          <button className="w-full text-left px-4 py-2 text-xs text-danger hover:bg-danger-bg font-medium flex items-center gap-2 border-t border-border mt-1 pt-2"><Trash2 size={14}/> Delete</button>
                        )}
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SuperAdminViewUserDrawer isOpen={!!viewUserId} onClose={() => setViewUserId(null)} userId={viewUserId} />
    </>
  );
}
