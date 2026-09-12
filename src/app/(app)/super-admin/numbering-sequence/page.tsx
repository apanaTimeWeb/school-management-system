import { Hash } from "lucide-react";
import SuperAdminNumberingSequenceConfig from "./super_admin_numbering_sequence_components/SuperAdminNumberingSequenceConfig";

export default function SuperAdminNumberingSequencePage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            29. 🔢 Numbering / Sequence Management
          </h1>
        </div>
      </div>

      <SuperAdminNumberingSequenceConfig />
    </div>
  );
}
