import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Calendar, Clock, User, Video } from 'lucide-react';

const ScheduleInterview: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/interviews');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-8 md:px-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/interviews')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Interviews
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Schedule Interview</h1>
          <p className="text-muted-foreground">Set up a new interview with a candidate</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-6">
          <div>
            <Label htmlFor="candidate">Candidate *</Label>
            <select
              id="candidate"
              required
              className="w-full mt-2 px-4 py-2 border border-border rounded-lg bg-white text-foreground"
            >
              <option value="">Select a candidate</option>
              <option value="1">Sarah Johnson - Sales Representative</option>
              <option value="2">Michael Chen - Human Resources Specialist</option>
              <option value="3">Emily Rodriguez - Sales Representative</option>
            </select>
          </div>

          <div>
            <Label htmlFor="type">Interview Type *</Label>
            <select
              id="type"
              required
              className="w-full mt-2 px-4 py-2 border border-border rounded-lg bg-white text-foreground"
            >
              <option value="">Select interview type</option>
              <option value="phone">Phone Screening</option>  
              <option value="video">Video Interview</option>
              <option value="in-person">In-Person Interview</option>
              <option value="technical">Technical Interview</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Date *</Label>
              <div className="relative mt-2">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="date"
                  type="date"
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="time">Time *</Label>
              <div className="relative mt-2">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="time"
                  type="time"
                  required
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="duration">Duration</Label>
            <select
              id="duration"
              className="w-full mt-2 px-4 py-2 border border-border rounded-lg bg-white text-foreground"
            >
              <option value="30">30 minutes</option>
              <option value="45" selected>45 minutes</option>
              <option value="60">1 hour</option>
              <option value="90">1.5 hours</option>
              <option value="120">2 hours</option>
            </select>
          </div>

          <div>
            <Label htmlFor="interviewer">Interviewer *</Label>
            <div className="relative mt-2">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <select
                id="interviewer"
                required
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-white text-foreground"
              >
                <option value="">Select interviewer</option>
                <option value="1">Jane Smith</option>
                <option value="2">John Doe</option>
                <option value="3">Mike Johnson</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="meetingLink">Meeting Link (for video interviews)</Label>
            <div className="relative mt-2">
              <Video className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="meetingLink"
                type="url"
                placeholder="https://zoom.us/j/..."
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="notes">Additional Notes</Label>
            <textarea
              id="notes"
              rows={4}
              placeholder="Add any additional information or instructions..."
              className="w-full mt-2 px-4 py-2 border border-border rounded-lg bg-white text-foreground resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => navigate('/interviews')} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Schedule Interview
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleInterview;

