import { Wallet } from "lucide-react";

export default function FeeCollectionSummary() {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-base font-semibold text-text-primary mb-4 flex items-center gap-2">
        <Wallet size={18} className="text-success" />
        Fee Collection Summary
      </h3>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-text-secondary">Total Expected</span>
            <span className="font-semibold text-text-primary">₹1,25,00,000</span>
          </div>
          <div className="w-full bg-bg-page rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-text-secondary">Total Collected</span>
            <span className="font-semibold text-success">₹85,50,000</span>
          </div>
          <div className="w-full bg-bg-page rounded-full h-2">
            <div className="bg-success h-2 rounded-full" style={{ width: '68%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-text-secondary">Pending Dues</span>
            <span className="font-semibold text-danger">₹39,50,000</span>
          </div>
          <div className="w-full bg-bg-page rounded-full h-2">
            <div className="bg-danger h-2 rounded-full" style={{ width: '32%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
