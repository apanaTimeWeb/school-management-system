"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import { Building2, MapPin, Network, Layers, GitMerge, LayoutGrid, Home, Plus, ArrowLeft } from 'lucide-react';

import SuperAdminSchoolsTable from './organization_management_components/SuperAdminSchoolsTable';
import SuperAdminSchoolForm from './organization_management_components/SuperAdminSchoolForm';
import SuperAdminBranchesTable from './organization_management_components/SuperAdminBranchesTable';
import SuperAdminOrgStructureTree from './organization_management_components/SuperAdminOrgStructureTree';
import SuperAdminDepartmentsTab from './organization_management_components/SuperAdminDepartmentsTab';
import SuperAdminWingsTab from './organization_management_components/SuperAdminWingsTab';
import SuperAdminClassesSectionsTab from './organization_management_components/SuperAdminClassesSectionsTab';
import SuperAdminHousesTab from './organization_management_components/SuperAdminHousesTab';

import SuperAdminAddBranchDrawer from './organization_management_components/SuperAdminAddBranchDrawer';
import SuperAdminDepartmentDrawer from './organization_management_components/SuperAdminDepartmentDrawer';
import SuperAdminWingDrawer from './organization_management_components/SuperAdminWingDrawer';
import SuperAdminClassDrawer from './organization_management_components/SuperAdminClassDrawer';
import SuperAdminHouseDrawer from './organization_management_components/SuperAdminHouseDrawer';

const TABS = [
  { id: 'schools', label: 'Schools', icon: Building2 },
  { id: 'branches', label: 'Branches / Campuses', icon: MapPin },
  { id: 'structure', label: 'Org Structure', icon: Network },
  { id: 'departments', label: 'Departments', icon: Layers },
  { id: 'wings', label: 'Wings / Blocks', icon: GitMerge },
  { id: 'classes', label: 'Classes & Sections', icon: LayoutGrid },
  { id: 'houses', label: 'Houses', icon: Home },
];

export default function OrganizationManagementPage() {
  const [activeTab, setActiveTab] = useState('schools');
  const [isAddingNew, setIsAddingNew] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Organization Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage schools, branches, campuses, and structural hierarchy</p>
        </div>
        
        {/* Dynamic Action Button */}
        <button 
          onClick={() => setIsAddingNew(!isAddingNew)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary-hover transition-colors"
        >
          {isAddingNew ? (
            <><ArrowLeft size={16} /> Back to List</>
          ) : (
            <><Plus size={16} /> Add New {activeTab === 'schools' ? 'School' : activeTab === 'branches' ? 'Branch' : activeTab === 'departments' ? 'Department' : activeTab === 'wings' ? 'Wing' : activeTab === 'classes' ? 'Class' : activeTab === 'houses' ? 'House' : 'Entry'}</>
          )}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setIsAddingNew(false);
              }}
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
        {activeTab === 'schools' && (
          isAddingNew ? <SuperAdminSchoolForm /> : <SuperAdminSchoolsTable />
        )}
        {activeTab === 'branches' && (
          <>
            <SuperAdminBranchesTable />
            <SuperAdminAddBranchDrawer isOpen={isAddingNew} onClose={() => setIsAddingNew(false)} />
          </>
        )}
        {activeTab === 'structure' && <SuperAdminOrgStructureTree />}
        {activeTab === 'departments' && (
          <>
            <SuperAdminDepartmentsTab />
            <SuperAdminDepartmentDrawer isOpen={isAddingNew} onClose={() => setIsAddingNew(false)} />
          </>
        )}
        {activeTab === 'wings' && (
          <>
            <SuperAdminWingsTab />
            <SuperAdminWingDrawer isOpen={isAddingNew} onClose={() => setIsAddingNew(false)} />
          </>
        )}
        {activeTab === 'classes' && (
          <>
            <SuperAdminClassesSectionsTab />
            <SuperAdminClassDrawer isOpen={isAddingNew} onClose={() => setIsAddingNew(false)} />
          </>
        )}
        {activeTab === 'houses' && (
          <>
            <SuperAdminHousesTab />
            <SuperAdminHouseDrawer isOpen={isAddingNew} onClose={() => setIsAddingNew(false)} />
          </>
        )}
      </div>
    </div>
  );
}
