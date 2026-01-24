import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 px-4 py-4 md:px-8 md:py-6 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-2xl font-bold text-primary font-mono tracking-tight">violo</span>
        
        <div className="hidden md:flex items-center gap-6">
          <button className="text-gray-600 hover:text-gray-900 font-medium">Create job</button>
          <button className="text-gray-600 hover:text-gray-900 font-medium">Jobs</button>
        </div>

        <div className="md:hidden">
            <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
            </Button>
        </div>
      </div>
    </header>
  );
};

