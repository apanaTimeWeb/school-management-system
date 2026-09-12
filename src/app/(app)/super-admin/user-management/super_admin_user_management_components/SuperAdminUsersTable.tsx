"use client";

import { useState } from "react";
import { Eye, Edit, Trash2, PowerOff, Power, ShieldAlert, Lock, Unlock, RefreshCw, LogOut, Key, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import type { UserProfileType } from "@/app/(app)/super-admin/user-management/super_admin_user_management_types/super_admin_user_management.types";
import SuperAdminViewUserDrawer from "./SuperAdminViewUserDrawer";

export default function SuperAdminUsersTable() {
  const [viewUserId, setViewUserId] = useState<string | null>(null);

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
                  {/* Action Menu - Rendered inline for full visibility of the massive feature list */}
                  <div className="flex items-center justify-end gap-1.5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                    
                    {/* View User */}
                    <button onClick={() => setViewUserId(user.id)} className="p-1 text-text-secondary hover:text-primary" title="View User Profile"><Eye size={14} /></button>
                    
                    {/* Edit User */}
                    <button className="p-1 text-text-secondary hover:text-info" title="Edit User"><Edit size={14} /></button>
                    
                    {/* State Transitions based on current status */}
                    {user.status === 'Deleted' ? (
                      <button className="p-1 text-text-secondary hover:text-success" title="Restore User"><RotateCcw size={14} /></button>
                    ) : (
                      <>
                        {user.status !== 'Active' ? (
                          <button className="p-1 text-text-secondary hover:text-success" title="Activate Account"><Power size={14} /></button>
                        ) : (
                          <button className="p-1 text-text-secondary hover:text-warning" title="Deactivate Account"><PowerOff size={14} /></button>
                        )}
                        
                        {user.status === 'Locked' ? (
                          <button className="p-1 text-text-secondary hover:text-success" title="Unlock Account"><Unlock size={14} /></button>
                        ) : (
                          <button className="p-1 text-text-secondary hover:text-danger" title="Lock Account"><Lock size={14} /></button>
                        )}

                        {user.status !== 'Suspended' && (
                          <button className="p-1 text-text-secondary hover:text-purple" title="Suspend User"><ShieldAlert size={14} /></button>
                        )}

                        {/* Security Actions */}
                        <div className="w-px h-4 bg-border mx-1"></div>
                        <button className="p-1 text-text-secondary hover:text-info" title="Reset Password"><Key size={14} /></button>
                        <button className="p-1 text-text-secondary hover:text-warning" title="Force Password Change"><RefreshCw size={14} /></button>
                        <button className="p-1 text-text-secondary hover:text-danger" title="Force Logout All Sessions"><LogOut size={14} /></button>
                        
                        {/* Delete Action */}
                        <div className="w-px h-4 bg-border mx-1"></div>
                        <button className="p-1 text-text-secondary hover:text-danger" title="Delete User"><Trash2 size={14} /></button>
                      </>
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
