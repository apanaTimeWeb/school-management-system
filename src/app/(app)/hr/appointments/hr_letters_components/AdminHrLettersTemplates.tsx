"use client";

import { FileEdit, Wand2 } from "lucide-react";
import type { LetterTemplate } from "../hr_letters_types/AdminHrLettersTypes";

interface AdminHrLettersTemplatesProps {
  templates: LetterTemplate[];
  openGenerator: (t: LetterTemplate) => void;
}

export default function AdminHrLettersTemplates({ templates, openGenerator }: AdminHrLettersTemplatesProps) {
  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map(tpl => (
          <div key={tpl.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary/50 hover:shadow-md transition-all group flex flex-col h-full">
            <div className="flex-1">
              <div className="w-10 h-10 rounded-full bg-input flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors mb-4">
                <FileEdit size={18} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{tpl.title}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-4 line-clamp-2">{tpl.description}</p>
              <span className="inline-block bg-input/50 border border-border px-3 py-1 rounded-full text-xs font-bold text-muted-foreground">{tpl.type}</span>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border flex gap-3">
              <button className="flex-1 py-2 text-sm font-bold text-muted-foreground bg-input rounded-md hover:bg-input/80 transition-colors border border-border">Edit Template</button>
              <button 
                onClick={() => openGenerator(tpl)}
                className="flex-[1.5] py-2 text-sm font-bold text-white bg-primary rounded-md hover:bg-yellow-500 shadow-md shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Wand2 size={16}/> Generate Letter
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
