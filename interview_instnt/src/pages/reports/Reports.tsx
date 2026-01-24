import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Users, Calendar, FileText, Download } from 'lucide-react';

const Reports: React.FC = () => {
  const navigate = useNavigate();

  const reportCards = [
    {
      id: 'interview-performance',
      title: 'Interview Performance Reports',
      description: 'Analyze interview success rates, interviewer performance, and time-to-hire metrics',
      icon: BarChart3,
      color: 'bg-blue-500',
      stats: [
        { label: 'Total Interviews', value: '156' },
        { label: 'Avg. Duration', value: '42 min' },
        { label: 'Success Rate', value: '68%' },
      ],
      path: '/reports/interview-performance',
    },
    {
      id: 'candidate-success',
      title: 'Candidate Success Reports',
      description: 'Track candidate progression, conversion rates, and hiring outcomes',
      icon: TrendingUp,
      color: 'bg-green-500',
      stats: [
        { label: 'Total Candidates', value: '324' },
        { label: 'Hired', value: '48' },
        { label: 'Conversion Rate', value: '15%' },
      ],
      path: '/reports/candidate-success',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Reports & Analytics</h1>
          <p className="text-muted-foreground">
            Track performance metrics and gain insights into your hiring process
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">324</p>
            <p className="text-sm text-muted-foreground">Total Candidates</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">156</p>
            <p className="text-sm text-muted-foreground">Interviews Conducted</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-foreground">48</p>
            <p className="text-sm text-muted-foreground">Successful Hires</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-foreground">15%</p>
            <p className="text-sm text-muted-foreground">Conversion Rate</p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {reportCards.map((report) => (
            <div
              key={report.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`${report.color} p-6`}>
                <report.icon className="h-12 w-12 text-white mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">{report.title}</h2>
                <p className="text-white/90">{report.description}</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {report.stats.map((stat, index) => (
                    <div key={index}>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={() => navigate(report.path)}
                    className="flex-1"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View Report
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-8 bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Report Activity</h2>
          <div className="space-y-3">
            {[
              { type: 'Interview Performance', date: '2026-01-24', user: 'Jane Smith' },
              { type: 'Candidate Success', date: '2026-01-23', user: 'John Doe' },
              { type: 'Interview Performance', date: '2026-01-22', user: 'Mike Johnson' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">{activity.type} Report</p>
                    <p className="text-sm text-muted-foreground">Generated by {activity.user}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{activity.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

