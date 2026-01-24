import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Calendar, TrendingUp, Clock, Users } from 'lucide-react';

const InterviewPerformanceReport: React.FC = () => {
  const navigate = useNavigate();

  const interviewerStats = [
    { name: 'Jane Smith', interviews: 45, avgDuration: '42 min', successRate: '72%' },
    { name: 'John Doe', interviews: 38, avgDuration: '38 min', successRate: '65%' },
    { name: 'Mike Johnson', interviews: 32, avgDuration: '45 min', successRate: '68%' },
  ];

  const monthlyData = [
    { month: 'Jan', interviews: 45, successful: 32 },
    { month: 'Dec', interviews: 42, successful: 28 },
    { month: 'Nov', interviews: 38, successful: 25 },
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
            <h1 className="text-3xl font-bold text-foreground mb-2">Interview Performance Report</h1>
            <p className="text-muted-foreground">Analyze interview metrics and interviewer performance</p>
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
              <p className="text-sm text-muted-foreground">Total Interviews</p>
            </div>
            <p className="text-3xl font-bold text-foreground">156</p>
            <p className="text-sm text-green-600 mt-1">↑ 12% from last month</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="h-6 w-6 text-primary" />
              <p className="text-sm text-muted-foreground">Avg Duration</p>
            </div>
            <p className="text-3xl font-bold text-foreground">42 min</p>
            <p className="text-sm text-muted-foreground mt-1">Within target range</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
            <p className="text-3xl font-bold text-foreground">68%</p>
            <p className="text-sm text-green-600 mt-1">↑ 5% from last month</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-6 w-6 text-primary" />
              <p className="text-sm text-muted-foreground">Time to Hire</p>
            </div>
            <p className="text-3xl font-bold text-foreground">18 days</p>
            <p className="text-sm text-green-600 mt-1">↓ 3 days improvement</p>
          </div>
        </div>

        
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Interviewer Performance</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Interviewer</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Interviews</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Avg Duration</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Success Rate</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Performance</th>
                </tr>
              </thead>
              <tbody>
                {interviewerStats.map((interviewer, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-sm">
                          {interviewer.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-medium text-foreground">{interviewer.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-foreground">{interviewer.interviews}</td>
                    <td className="py-4 px-4 text-foreground">{interviewer.avgDuration}</td>
                    <td className="py-4 px-4">
                      <span className="text-foreground font-medium">{interviewer.successRate}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: interviewer.successRate }}
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

        
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Monthly Trends</h2>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-16 text-sm font-medium text-muted-foreground">{data.month}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-1">
                    <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                      <div
                        className="bg-primary h-8 rounded-full flex items-center justify-end pr-3"
                        style={{ width: `${(data.interviews / 50) * 100}%` }}
                      >
                        <span className="text-white text-sm font-medium">{data.interviews}</span>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground w-32">
                      {data.successful} successful ({Math.round((data.successful / data.interviews) * 100)}%)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPerformanceReport;

