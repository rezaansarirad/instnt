import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Calendar, TrendingUp, Users, Target } from 'lucide-react';

const CandidateSuccessReport: React.FC = () => {
  const navigate = useNavigate();

  const positionStats = [
    { position: 'Sales Representative', applied: 145, interviewed: 52, hired: 18, rate: '12%' },
    { position: 'HR Specialist', applied: 98, interviewed: 38, hired: 15, rate: '15%' },
    { position: 'Software Engineer', applied: 81, interviewed: 45, hired: 15, rate: '19%' },
  ];

  const sourceStats = [
    { source: 'LinkedIn', candidates: 156, hired: 24, rate: '15%' },
    { source: 'Indeed', candidates: 98, hired: 14, rate: '14%' },
    { source: 'Referral', candidates: 45, hired: 8, rate: '18%' },
    { source: 'Company Website', candidates: 25, hired: 2, rate: '8%' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        
        <Button
          variant="ghost"
          onClick={() => navigate('/reports')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Reports
        </Button>

        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Candidate Success Report</h1>
            <p className="text-muted-foreground">Track candidate progression and hiring outcomes</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-6 w-6 text-primary" />
              <p className="text-sm text-muted-foreground">Total Candidates</p>
            </div>
            <p className="text-3xl font-bold text-foreground">324</p>
            <p className="text-sm text-green-600 mt-1">↑ 18% from last month</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Target className="h-6 w-6 text-primary" />
              <p className="text-sm text-muted-foreground">Interviewed</p>
            </div>
            <p className="text-3xl font-bold text-foreground">135</p>
            <p className="text-sm text-muted-foreground mt-1">42% of total</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <p className="text-sm text-muted-foreground">Hired</p>
            </div>
            <p className="text-3xl font-bold text-foreground">48</p>
            <p className="text-sm text-green-600 mt-1">↑ 8 from last month</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
            </div>
            <p className="text-3xl font-bold text-foreground">15%</p>
            <p className="text-sm text-green-600 mt-1">↑ 2% improvement</p>
          </div>
        </div>

        
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Hiring Funnel</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium text-foreground">Applied</div>
              <div className="flex-1">
                <div className="bg-blue-500 h-12 rounded-lg flex items-center justify-between px-4" style={{ width: '100%' }}>
                  <span className="text-white font-semibold">324 Candidates</span>
                  <span className="text-white text-sm">100%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium text-foreground">Screening</div>
              <div className="flex-1">
                <div className="bg-purple-500 h-12 rounded-lg flex items-center justify-between px-4" style={{ width: '65%' }}>
                  <span className="text-white font-semibold">210 Candidates</span>
                  <span className="text-white text-sm">65%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium text-foreground">Interview</div>
              <div className="flex-1">
                <div className="bg-yellow-500 h-12 rounded-lg flex items-center justify-between px-4" style={{ width: '42%' }}>
                  <span className="text-white font-semibold">135 Candidates</span>
                  <span className="text-white text-sm">42%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium text-foreground">Offer</div>
              <div className="flex-1">
                <div className="bg-orange-500 h-12 rounded-lg flex items-center justify-between px-4" style={{ width: '20%' }}>
                  <span className="text-white font-semibold">65 Candidates</span>
                  <span className="text-white text-sm">20%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium text-foreground">Hired</div>
              <div className="flex-1">
                <div className="bg-green-500 h-12 rounded-lg flex items-center justify-between px-4" style={{ width: '15%' }}>
                  <span className="text-white font-semibold">48 Candidates</span>
                  <span className="text-white text-sm">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Performance by Position</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Position</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Applied</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Interviewed</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Hired</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Success Rate</th>
                </tr>
              </thead>
              <tbody>
                {positionStats.map((stat, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="py-4 px-4 font-medium text-foreground">{stat.position}</td>
                    <td className="py-4 px-4 text-foreground">{stat.applied}</td>
                    <td className="py-4 px-4 text-foreground">{stat.interviewed}</td>
                    <td className="py-4 px-4 text-foreground">{stat.hired}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {stat.rate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Performance by Source</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Source</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Candidates</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Hired</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Success Rate</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Quality</th>
                </tr>
              </thead>
              <tbody>
                {sourceStats.map((stat, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="py-4 px-4 font-medium text-foreground">{stat.source}</td>
                    <td className="py-4 px-4 text-foreground">{stat.candidates}</td>
                    <td className="py-4 px-4 text-foreground">{stat.hired}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {stat.rate}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: stat.rate }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSuccessReport;

