import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        {/* Welcome Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <h1 className="text-gray-600 text-lg sm:text-xl">Hi developer, you have 2 open jobs</h1>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button variant="outline" className="text-gray-600 flex-1 sm:flex-none">Closed jobs</Button>
            <Button 
              onClick={() => navigate('/create-job')}
              className="bg-[#5B5FC7] hover:bg-[#4B4FB3] text-white flex-1 sm:flex-none"
            >
              Create new job
            </Button>
          </div>
        </div>

        {/* Job Cards */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {/* Active/Selected Card */}
          <div className="relative group shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-6 min-w-[300px] shadow-sm relative z-10">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Sales Representative</h3>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">0 candidates</span>
                <span className="text-gray-400 text-sm">Inactive</span>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm" onClick={() => navigate('/jobs/1')}>Details</Button>
              </div>
            </div>
            {/* Triangle Indicator for active state */}
            <div className="absolute left-1/2 -bottom-3 w-6 h-6 bg-white border-b border-r border-gray-200 transform -translate-x-1/2 rotate-45 z-20 hidden md:block"></div>
            {/* Cover the top border of the triangle to merge with card */}
            <div className="absolute left-1/2 -bottom-2 w-8 h-4 bg-white transform -translate-x-1/2 z-30 hidden md:block"></div>
          </div>

          {/* Inactive Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 min-w-[300px] hover:shadow-md transition-shadow shrink-0">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Human Resources Specialist</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">0 candidates</span>
              <span className="text-gray-400 text-sm">Inactive</span>
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm">Details</Button>
            </div>
          </div>
        </div>

        {/* Hero / Action Section */}
        <div className="bg-[#5B5FC7] rounded-xl p-6 md:p-12 text-white mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start?</h2>
            <p className="text-white/90 mb-8 text-base md:text-lg">
              Activate this job to start screening candidates. Do you need help with screening? Add your team now or do it later.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#7C80E5] hover:bg-[#6A6ED6] text-white border-none w-full sm:w-auto"
              >
                Manage team
              </Button>
              <Button 
                className="bg-[#4ADE80] hover:bg-[#42C975] text-white border-none font-medium flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Activate for 4 weeks (FREE)
                <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs">i</span>
              </Button>
            </div>
          </div>
          
          {/* Decorative shapes/blobs could go here */}
        </div>

        {/* Candidates Placeholder */}
        <div className="flex flex-col items-center justify-center py-12 text-center px-4">
          <div className="mb-6 relative">
             {/* Illustration placeholder */}
             <div className="grid grid-cols-2 gap-2 max-w-[200px] mx-auto opacity-80">
                <div className="bg-yellow-200 rounded-lg h-24 w-20 transform -rotate-6"></div>
                <div className="bg-blue-200 rounded-lg h-24 w-20 transform rotate-12 translate-y-4"></div>
                <div className="bg-green-200 rounded-lg h-24 w-20 transform -rotate-3 -translate-y-2"></div>
             </div>
          </div>
          <p className="text-gray-600 max-w-md">
            This is where your candidates will be listed after you and your team will screen them.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
