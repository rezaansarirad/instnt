import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Calendar, Clock, User } from 'lucide-react';

interface Interview {
  id: string;
  candidateName: string;
  position: string;
  type: 'phone' | 'video' | 'in-person' | 'technical';
  date: string;
  time: string;
  interviewer: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'in-progress';
}

const mockInterviews: Interview[] = [
  {
    id: '1',
    candidateName: 'Sarah Johnson',
    position: 'Sales Representative',
    type: 'video',
    date: '2026-01-25',
    time: '10:00 AM',
    interviewer: 'Jane Smith',
    status: 'scheduled',
  },
  {
    id: '2',
    candidateName: 'Michael Chen',
    position: 'Human Resources Specialist',
    type: 'phone',
    date: '2026-01-24',
    time: '2:00 PM',
    interviewer: 'John Doe',
    status: 'completed',
  },
  {
    id: '3',
    candidateName: 'Emily Rodriguez',
    position: 'Sales Representative',
    type: 'in-person',
    date: '2026-01-26',
    time: '11:30 AM',
    interviewer: 'Jane Smith',
    status: 'scheduled',
  },
];

const Interviews: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const getStatusColor = (status: Interview['status']) => {
    const colors = {
      scheduled: 'bg-blue-100 text-blue-700',
      completed: 'bg-green-100 text-green-700',
      cancelled: 'bg-red-100 text-red-700',
      'in-progress': 'bg-yellow-100 text-yellow-700',
    };
    return colors[status];
  };

  const getTypeIcon = (type: Interview['type']) => {
    const icons = {
      phone: '📞',
      video: '🎥',
      'in-person': '👤',
      technical: '💻',
    };
    return icons[type];
  };

  const filteredInterviews = mockInterviews.filter(interview => {
    const matchesSearch = interview.candidateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         interview.position.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || interview.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Interviews</h1>
            <p className="text-muted-foreground">Manage and track all your interviews</p>
          </div>
          <Button onClick={() => navigate('/interviews/schedule')}>
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Interview
          </Button>
        </div>

        <div className="bg-card border border-border rounded-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search interviews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-white text-foreground"
              >
                <option value="all">All Status</option>
                <option value="scheduled">Scheduled</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredInterviews.length === 0 ? (
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <p className="text-muted-foreground">No interviews found</p>
            </div>
          ) : (
            filteredInterviews.map((interview) => (
              <div
                key={interview.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate(`/interviews/${interview.id}`)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-2xl shrink-0">
                      {getTypeIcon(interview.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg text-foreground">
                          {interview.candidateName}
                        </h3>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground capitalize">
                          {interview.type} Interview
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">{interview.position}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(interview.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {interview.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {interview.interviewer}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(interview.status)}`}>
                      {interview.status.split('-').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </span>
                    <Button variant="outline" size="sm" onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/interviews/${interview.id}`);
                    }}>
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Interviews;

