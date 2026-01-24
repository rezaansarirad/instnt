import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User,
  MapPin,
  Video,
  FileText,
  MessageSquare,
  Play,
  Download
} from 'lucide-react';

const InterviewDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'details' | 'notes' | 'recording'>('details');

  const interview = {
    id: id || '1',
    candidateName: 'Sarah Johnson',
    candidateEmail: 'sarah.j@email.com',
    position: 'Sales Representative',
    type: 'video',
    date: '2026-01-25',
    time: '10:00 AM',
    duration: '45 minutes',
    interviewer: 'Jane Smith',
    interviewerEmail: 'jane.smith@company.com',
    status: 'scheduled',
    location: 'Zoom Meeting',
    meetingLink: 'https://zoom.us/j/123456789',
  };

  const notes = [
    { id: '1', author: 'Jane Smith', timestamp: '10:05 AM', content: 'Candidate showed strong communication skills.' },
    { id: '2', author: 'Jane Smith', timestamp: '10:20 AM', content: 'Good understanding of sales processes and CRM tools.' },
  ];

  const questions = [
    { id: '1', question: 'Tell me about your experience in B2B sales.', asked: true },
    { id: '2', question: 'How do you handle difficult clients?', asked: true },
    { id: '3', question: 'Describe your approach to meeting sales targets.', asked: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        
        <Button
          variant="ghost"
          onClick={() => navigate('/interviews')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Interviews
        </Button>

        
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl font-bold text-foreground">{interview.candidateName}</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  interview.status === 'scheduled' ? 'bg-blue-100 text-blue-700' :
                  interview.status === 'completed' ? 'bg-green-100 text-green-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {interview.status.charAt(0).toUpperCase() + interview.status.slice(1)}
                </span>
              </div>
              <p className="text-lg text-muted-foreground mb-4">{interview.position}</p>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(interview.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{interview.time} ({interview.duration})</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{interview.interviewer}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Video className="h-4 w-4" />
                  <span className="capitalize">{interview.type} Interview</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              {interview.status === 'scheduled' && (
                <>
                  <Button>
                    <Video className="h-4 w-4 mr-2" />
                    Join Meeting
                  </Button>
                  <Button variant="outline">Reschedule</Button>
                  <Button variant="outline" className="text-red-600 hover:text-red-700">
                    Cancel Interview
                  </Button>
                </>
              )}
              {interview.status === 'completed' && (
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  View Report
                </Button>
              )}
            </div>
          </div>
        </div>

        
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Candidate Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground">Email</label>
              <p className="text-foreground font-medium">{interview.candidateEmail}</p>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Position Applied</label>
              <p className="text-foreground font-medium">{interview.position}</p>
            </div>
          </div>
          <Button variant="link" className="mt-4 px-0" onClick={() => navigate('/candidates/1')}>
            View Full Profile →
          </Button>
        </div>

        
        <div className="border-b border-border mb-6">
          <div className="flex gap-6">
            {[
              { id: 'details', label: 'Interview Details' },
              { id: 'notes', label: 'Notes & Feedback' },
              { id: 'recording', label: 'Recording & Playback' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-3 px-1 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary font-medium'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        
        <div className="bg-card border border-border rounded-lg p-6">
          {activeTab === 'details' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Meeting Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span className="text-foreground">{interview.location}</span>
                  </div>
                  {interview.meetingLink && (
                    <div className="flex items-center gap-2">
                      <Video className="h-5 w-5 text-muted-foreground" />
                      <a href={interview.meetingLink} className="text-primary hover:underline">
                        {interview.meetingLink}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Interview Questions</h3>
                <div className="space-y-3">
                  {questions.map((q, index) => (
                    <div key={q.id} className="flex items-start gap-3 p-3 border border-border rounded-lg">
                      <span className="text-muted-foreground font-medium">{index + 1}.</span>
                      <div className="flex-1">
                        <p className="text-foreground">{q.question}</p>
                      </div>
                      {q.asked && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Asked</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Interview Notes & Feedback</h3>
                <Button>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Add Note
                </Button>
              </div>
              {notes.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No notes added yet</p>
              ) : (
                notes.map((note) => (
                  <div key={note.id} className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium text-foreground">{note.author}</p>
                      <p className="text-sm text-muted-foreground">{note.timestamp}</p>
                    </div>
                    <p className="text-muted-foreground">{note.content}</p>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'recording' && (
            <div className="space-y-6">
              <div className="text-center py-12">
                {interview.status === 'completed' ? (
                  <>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Interview Recording Available</h3>
                    <p className="text-muted-foreground mb-6">Duration: 42 minutes</p>
                    <div className="flex justify-center gap-3">
                      <Button>
                        <Play className="h-4 w-4 mr-2" />
                        Play Recording
                      </Button>
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <Video className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Recording Available</h3>
                    <p className="text-muted-foreground">
                      Recording will be available after the interview is completed
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewDetail;

