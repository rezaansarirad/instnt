import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const ColorUsageExamples: React.FC = () => {
  return (
    <div className="space-y-12 p-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Primary Buttons (Deep Blue)</h2>
        <div className="flex gap-4 flex-wrap">
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
            Save Job
          </Button>
          <Button className="bg-primary-light hover:bg-primary text-primary-foreground">
            Continue
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Use for main actions, navigation, and primary CTAs
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Secondary Buttons (Teal - AI/Tech)</h2>
        <div className="flex gap-4 flex-wrap">
          <Button className="bg-secondary hover:bg-secondary-hover text-secondary-foreground">
            Generate AI Summary
          </Button>
          <Button className="bg-secondary-light hover:bg-secondary text-white">
            View Transcript
          </Button>
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
            AI Insights
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Use for AI features, transcription, analytics, and technology-related actions
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Accent Buttons (Amber - CTAs)</h2>
        <div className="flex gap-4 flex-wrap">
          <Button className="bg-accent hover:bg-accent-hover text-accent-foreground">
            Start Recording
          </Button>
          <Button className="bg-accent hover:bg-accent-hover text-accent-foreground">
            Invite Candidate
          </Button>
          <Button className="bg-accent hover:bg-accent-hover text-accent-foreground">
            Start Interview
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Use for important CTAs like Record, Start, Invite - creates action without stress
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Status Indicators</h2>
        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success"></div>
            <span className="text-success">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <span className="text-warning">Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-info"></div>
            <span className="text-info">In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full status-recording"></div>
            <span className="text-accent">Recording</span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Candidate Interface (Lighter, Friendly)</h2>
        <Card className="p-6 bg-candidate space-y-4 max-w-md">
          <h3 className="text-xl font-semibold text-candidate-primary">
            Welcome to Your Interview
          </h3>
          <p className="text-muted-foreground">
            Take a moment to relax. When you're ready, click the button below to start.
          </p>
          <div className="flex gap-3">
            <Button className="bg-candidate-accent hover:bg-secondary text-white">
              Start Interview
            </Button>
            <Button variant="outline" className="border-candidate-primary text-candidate-primary">
              Test Camera
            </Button>
          </div>
        </Card>
        <p className="text-sm text-muted-foreground">
          Lighter tones, less contrast, more welcoming for candidates
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Recruiter Dashboard (Professional, Data-focused)</h2>
        <Card className="p-6 space-y-4 max-w-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-primary">Interview Analytics</h3>
            <Button className="bg-secondary hover:bg-secondary-hover text-white">
              AI Summary
            </Button>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total Interviews</span>
              <span className="font-semibold">24</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Completed</span>
              <span className="font-semibold text-success">18</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Pending</span>
              <span className="font-semibold text-warning">6</span>
            </div>
          </div>
        </Card>
        <p className="text-sm text-muted-foreground">
          Higher contrast, professional, data-oriented for recruiters
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Video Player Interface</h2>
        <div className="bg-[#0F172A] rounded-lg p-6 space-y-4 max-w-2xl">
          <div className="aspect-video bg-[#1E293B] rounded-lg flex items-center justify-center">
            <span className="text-white/50">Video Player Area</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <Button className="bg-secondary hover:bg-secondary-hover text-white">
                Play
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                Transcript
              </Button>
            </div>
            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground">
              Mark Important
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Dark background essential for video playback, teal for controls
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">AI Features Highlight</h2>
        <Card className="p-6 ai-highlight text-white max-w-md">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">AI-Powered Analysis</span>
            </div>
            <p className="text-sm text-white/90">
              Get instant insights, sentiment analysis, and key highlights from every interview.
            </p>
            <Button className="bg-white text-secondary hover:bg-white/90">
              Learn More
            </Button>
          </div>
        </Card>
        <p className="text-sm text-muted-foreground">
          Teal gradient for AI and technology feature highlights
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Transcript Display</h2>
        <Card className="p-6 transcript-bg max-w-2xl">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-secondary">00:45</span>
              <span className="text-sm font-medium">Candidate Response</span>
            </div>
            <p className="text-muted-foreground">
              "I have over five years of experience in software development, 
              specializing in React and Node.js. In my previous role..."
            </p>
          </div>
        </Card>
        <p className="text-sm text-muted-foreground">
          Left border in teal indicates AI-generated or tech-related content
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Inputs with Focus States</h2>
        <div className="space-y-3 max-w-md">
          <input
            type="text"
            placeholder="Job Title"
            className="w-full px-4 py-2 border border-border rounded-lg focus-ring"
          />
          <input
            type="email"
            placeholder="Candidate Email"
            className="w-full px-4 py-2 border border-border rounded-lg focus-ring"
          />
          <textarea
            placeholder="Job Description"
            rows={4}
            className="w-full px-4 py-2 border border-border rounded-lg focus-ring"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Teal focus ring for accessibility and consistency
        </p>
      </section>
    </div>
  );
};

export default ColorUsageExamples;
