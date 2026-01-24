import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  FileText,
  Download,
  MessageSquare,
  Clock
} from 'lucide-react';

const CandidateProfile: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'details' | 'cv' | 'notes' | 'interviews'>('details');

  const candidate = {
    id: id || '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+1 234 567 8900',
    location: 'New York, NY',
    position: 'Sales Representative',
    status: 'interview',
    appliedDate: '2026-01-20',
    experience: '5 years',
    education: 'Bachelor in Business Administration',
    skills: ['Sales', 'Customer Relations', 'CRM Software', 'Negotiation', 'Team Leadership'],
  };

  const documents = [
    { name: 'Resume.pdf', size: '245 KB', uploadedDate: '2026-01-20' },
    { name: 'Cover_Letter.pdf', size: '128 KB', uploadedDate: '2026-01-20' },
    { name: 'Portfolio.pdf', size: '1.2 MB', uploadedDate: '2026-01-20' },
  ];

  const notes = [
    { id: '1', author: 'John Doe', date: '2026-01-22', content: 'Great communication skills during phone screening. Very enthusiastic about the role.' },
    { id: '2', author: 'Jane Smith', date: '2026-01-23', content: 'Strong background in B2B sales. Previous experience aligns well with our requirements.' },
  ];

  const interviews = [
    { id: '1', type: 'Phone Screening', date: '2026-01-22', status: 'completed', interviewer: 'John Doe' },
    { id: '2', type: 'Technical Interview', date: '2026-01-25', status: 'scheduled', interviewer: 'Jane Smith' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6 md:py-8 md:px-8">
        
        <Button
          variant="ghost"
          onClick={() => navigate('/candidates')}
          className="mb-4 sm:mb-6 -ml-2"
          size="sm"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Back to Candidates</span>
          <span className="sm:hidden">Back</span>
        </Button>

        
        <div className="bg-card border border-border rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-2xl sm:text-3xl shrink-0 mx-auto sm:mx-0">
              {candidate.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-4 mb-4">
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{candidate.name}</h1>
                  <p className="text-base sm:text-lg text-muted-foreground mb-3">{candidate.position}</p>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center justify-center sm:justify-start gap-1">
                      <Mail className="h-4 w-4 shrink-0" />
                      <span className="truncate">{candidate.email}</span>
                    </span>
                    <span className="flex items-center justify-center sm:justify-start gap-1">
                      <Phone className="h-4 w-4 shrink-0" />
                      {candidate.phone}
                    </span>
                    <span className="flex items-center justify-center sm:justify-start gap-1">
                      <MapPin className="h-4 w-4 shrink-0" />
                      {candidate.location}
                    </span>
                    <span className="flex items-center justify-center sm:justify-start gap-1">
                      <Calendar className="h-4 w-4 shrink-0" />
                      Applied: {new Date(candidate.appliedDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                  <Button className="w-full sm:w-auto" size="sm">
                    <span className="hidden sm:inline">Schedule Interview</span>
                    <span className="sm:hidden">Schedule</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-b border-border mb-4 sm:mb-6 overflow-x-auto">
          <div className="flex gap-4 sm:gap-6 min-w-max sm:min-w-0">
            {[
              { id: 'details', label: 'Personal Details', shortLabel: 'Details' },
              { id: 'cv', label: 'CV & Documents', shortLabel: 'CV' },
              { id: 'notes', label: 'Notes & Evaluations', shortLabel: 'Notes' },
              { id: 'interviews', label: 'Past Interviews', shortLabel: 'Interviews' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-3 px-1 border-b-2 transition-colors whitespace-nowrap text-sm sm:text-base ${
                  activeTab === tab.id
                    ? 'border-primary text-primary font-medium'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            ))}
          </div>
        </div>

        
        <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
          {activeTab === 'details' && (
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Professional Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Experience</label>
                    <p className="text-foreground font-medium">{candidate.experience}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Education</label>
                    <p className="text-foreground font-medium">{candidate.education}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cv' && (
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Documents</h3>
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="font-medium text-foreground truncate">{doc.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {doc.size} • Uploaded {new Date(doc.uploadedDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto shrink-0">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-semibold">Notes & Evaluations</h3>
                <Button size="sm" className="w-full sm:w-auto">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Add Note
                </Button>
              </div>
              {notes.map((note) => (
                <div key={note.id} className="p-3 sm:p-4 border border-border rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                    <p className="font-medium text-foreground">{note.author}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {new Date(note.date).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">{note.content}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'interviews' && (
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Interview History</h3>
              {interviews.map((interview) => (
                <div key={interview.id} className="p-3 sm:p-4 border border-border rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-start gap-3 min-w-0">
                      <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div className="min-w-0">
                        <p className="font-medium text-foreground">{interview.type}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {new Date(interview.date).toLocaleDateString()} • {interview.interviewer}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium self-start sm:self-center shrink-0 ${
                        interview.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {interview.status.charAt(0).toUpperCase() + interview.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;

