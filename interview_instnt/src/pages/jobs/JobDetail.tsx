import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const JobDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-4 py-8 md:px-8">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center text-primary mb-6 hover:underline"
        >
          <ChevronLeft size={20} />
          All jobs
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 break-words">Sales Representative at TBC</h1>

        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="outline" className="text-gray-600 flex-1 sm:flex-none">Manage team</Button>
          <Button variant="outline" className="text-gray-600 flex-1 sm:flex-none">Close job</Button>
          <div className="w-full sm:w-auto sm:ml-auto flex gap-3 flex-wrap">
             <Button variant="outline" className="text-gray-600 flex-1 sm:flex-none">Import candidates</Button>
             <Button variant="outline" className="text-gray-600 flex-1 sm:flex-none">Export candidates</Button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mb-8">
           <div className="flex gap-12 w-full md:w-auto justify-center md:justify-start">
              <div className="text-center">
                 <div className="text-2xl font-bold text-gray-900">0</div>
                 <div className="text-sm text-gray-500">candidates</div>
              </div>
              <div className="text-center">
                 <div className="text-2xl font-bold text-gray-900">28</div>
                 <div className="text-sm text-gray-500">days left</div>
              </div>
           </div>
           <Button className="bg-[#4ADE80] hover:bg-[#42C975] text-white border-none w-full md:w-auto">
             Extend for 4 weeks ($99.00)
           </Button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 md:p-8">
           <h3 className="font-medium text-gray-900 mb-1">How to apply</h3>
           <p className="text-sm text-gray-500 mb-6">Candidates can apply to this job using a magic link or a job code.</p>

           <div className="grid gap-8">
              <div className="flex gap-4 items-start">
                 <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row gap-2">
                       <Input value="https://link.violo.com/326391" readOnly className="bg-white flex-1" />
                       <Button className="bg-[#5B5FC7] hover:bg-[#4F53B8] text-white whitespace-nowrap w-full sm:w-auto">
                         Copy magic link
                       </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      On desktop this link will open the violo web app. On mobile it will lead the candidate to download the violo Video Interviews app and then automatically display this job.
                    </p>
                 </div>
              </div>

              <div className="flex gap-4 items-start">
                 <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row gap-2">
                       <Input value="326391" readOnly className="bg-white flex-1" />
                       <Button className="bg-[#5B5FC7] hover:bg-[#4F53B8] text-white whitespace-nowrap w-full sm:w-auto">
                         Copy job code
                       </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      This job code can be manually entered into the violo Video Interviews app to access this job. The app can be downloaded from the App Store or Google Play store.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default JobDetail;
