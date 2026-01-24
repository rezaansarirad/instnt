import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ChevronDown, BookOpen, Video, MessageCircle, Mail } from 'lucide-react';

const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const faqs = [
    {
      id: '1',
      question: 'How do I create a new job posting?',
      answer: 'To create a new job posting, navigate to the Jobs section and click on "Create Job". Fill in the job details, requirements, and interview questions. You can also use AI to generate custom interview questions based on the job description.',
    },
    {
      id: '2',
      question: 'How do I schedule an interview with a candidate?',
      answer: 'Go to the Interviews section and click "Schedule Interview". Select the candidate, choose the interview type (phone, video, or in-person), set the date and time, and assign an interviewer. You can also add a meeting link for video interviews.',
    },
    {
      id: '3',
      question: 'Can I customize interview questions?',
      answer: 'Yes! When creating or editing a job, you can add custom interview questions. Our AI can also suggest relevant questions based on the job description and requirements.',
    },
    {
      id: '4',
      question: 'How do I add team members?',
      answer: 'Navigate to Settings > Team Management and click "Invite Member". Enter their email address and assign appropriate permissions. They will receive an invitation email to join your team.',
    },
    {
      id: '5',
      question: 'What reports are available?',
      answer: 'We offer two main types of reports: Interview Performance Reports (analyzing interview success rates and interviewer performance) and Candidate Success Reports (tracking candidate progression and hiring outcomes). Both reports can be exported as PDF.',
    },
    {
      id: '6',
      question: 'How long is the free trial?',
      answer: 'The free trial lasts for 4 weeks and includes access to all features. You can upgrade to a paid plan at any time during or after the trial period.',
    },
  ];

  const guides = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the basics of setting up your account and creating your first job',
      icon: BookOpen,
      duration: '5 min read',
    },
    {
      title: 'Video Tutorial: Interview Management',
      description: 'Watch how to effectively manage interviews and candidate evaluations',
      icon: Video,
      duration: '12 min watch',
    },
    {
      title: 'Best Practices for Screening',
      description: 'Tips and strategies for efficient candidate screening',
      icon: BookOpen,
      duration: '8 min read',
    },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">How can we help you?</h1>
          <p className="text-muted-foreground mb-8">
            Search our knowledge base or browse through frequently asked questions
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <button className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow text-left">
            <BookOpen className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Documentation</h3>
            <p className="text-sm text-muted-foreground">Browse our comprehensive guides</p>
          </button>
          <button className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow text-left">
            <Video className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Video Tutorials</h3>
            <p className="text-sm text-muted-foreground">Watch step-by-step tutorials</p>
          </button>
          <button className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow text-left">
            <MessageCircle className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Contact Support</h3>
            <p className="text-sm text-muted-foreground">Get help from our team</p>
          </button>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
              </div>
            ) : (
              filteredFaqs.map((faq) => (
                <div key={faq.id} className="bg-card border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-accent transition-colors"
                  >
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${
                        expandedFaq === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-6 pb-6 text-muted-foreground">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Guides & Support Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {guides.map((guide, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <guide.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{guide.description}</p>
                    <span className="text-xs text-muted-foreground">{guide.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary rounded-lg p-8 text-center text-white">
          <Mail className="h-12 w-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl font-bold mb-2">Still need help?</h2>
          <p className="mb-6 opacity-90">
            Our support team is here to help you with any questions or issues
          </p>
          <Button variant="secondary" size="lg">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Help;

