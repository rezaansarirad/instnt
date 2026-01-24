import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <h1 className="text-muted-foreground text-lg sm:text-xl">Hi developer, you have 2 open jobs</h1>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button variant="outline" className="flex-1 sm:flex-none">Closed jobs</Button>
            <Button 
              onClick={() => navigate('/create-job')}
              variant="default"
              className="flex-1 sm:flex-none"
            >
              Create new job
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          <div className="relative group shrink-0">
            <div className="bg-card border border-border rounded-lg p-6 min-w-[300px] shadow-sm relative z-10 hover-lift">
              <h3 className="font-bold text-lg mb-4 text-foreground">Sales Representative</h3>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">0 candidates</span>
                <span className="text-muted-foreground/70 text-sm">Inactive</span>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm" onClick={() => navigate('/jobs/1')}>Details</Button>
              </div>
            </div>

          </div>

          <div className="bg-card border border-border rounded-lg p-6 min-w-[300px] hover-lift shrink-0">
            <h3 className="font-bold text-lg mb-4 text-foreground">Human Resources Specialist</h3>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">0 candidates</span>
              <span className="text-muted-foreground/70 text-sm">Inactive</span>
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm">Details</Button>
            </div>
          </div>
        </div>

        <div className="bg-primary rounded-xl p-6 md:p-12 text-white mb-12 relative overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start?</h2>
            <p className="text-white/90 mb-8 text-base md:text-lg">
              Activate this job to start screening candidates. Do you need help with screening? Add your team now or do it later.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Manage team
              </Button>
              <Button 
                variant="accent"
                size="lg"
                className="font-medium flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Activate for 4 weeks (FREE)
                <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs">i</span>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-linear-to-br from-primary-light/30 to-transparent pointer-events-none"></div>
        </div>

        <div className="flex flex-col items-center justify-center py-12 text-center px-4">
          <div className="mb-6 relative">
             <div className="grid grid-cols-2 gap-2 max-w-[200px] mx-auto opacity-80">
                <div className="bg-accent/20 rounded-lg h-24 w-20 transform -rotate-6"></div>
                <div className="bg-secondary/20 rounded-lg h-24 w-20 transform rotate-12 translate-y-4"></div>
                <div className="bg-success/20 rounded-lg h-24 w-20 transform -rotate-3 -translate-y-2"></div>
             </div>
          </div>
          <p className="text-muted-foreground max-w-md">
            This is where your candidates will be listed after you and your team will screen them.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
