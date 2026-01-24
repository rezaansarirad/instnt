import React from 'react';
import { Card } from '@/components/ui/card';

const ColorShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Video Interview Platform - Color System</h1>
          <p className="text-muted-foreground text-lg">
            Professional color palette designed for trust, technology, and candidate comfort
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Primary - Deep Blue/Navy</h2>
          <p className="text-muted-foreground">Trust, professionalism, corporate credibility</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg" style={{ backgroundColor: '#243A5E' }}></div>
              <div>
                <p className="font-mono text-sm">#243A5E</p>
                <p className="text-sm text-muted-foreground">Primary</p>
                <p className="text-xs text-muted-foreground mt-1">Main brand, primary buttons, headers</p>
              </div>
            </Card>
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg" style={{ backgroundColor: '#1F2A44' }}></div>
              <div>
                <p className="font-mono text-sm">#1F2A44</p>
                <p className="text-sm text-muted-foreground">Primary Hover</p>
                <p className="text-xs text-muted-foreground mt-1">Hover states, darker emphasis</p>
              </div>
            </Card>
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg" style={{ backgroundColor: '#2B3F6C' }}></div>
              <div>
                <p className="font-mono text-sm">#2B3F6C</p>
                <p className="text-sm text-muted-foreground">Primary Light</p>
                <p className="text-xs text-muted-foreground mt-1">Candidate interface, softer tone</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Secondary - Teal/Cyan</h2>
          <p className="text-muted-foreground">Technology, AI features, innovation</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg" style={{ backgroundColor: '#2EC4B6' }}></div>
              <div>
                <p className="font-mono text-sm">#2EC4B6</p>
                <p className="text-sm text-muted-foreground">Secondary</p>
                <p className="text-xs text-muted-foreground mt-1">AI features, transcription, analytics</p>
              </div>
            </Card>
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg" style={{ backgroundColor: '#1FB6AA' }}></div>
              <div>
                <p className="font-mono text-sm">#1FB6AA</p>
                <p className="text-sm text-muted-foreground">Secondary Hover</p>
                <p className="text-xs text-muted-foreground mt-1">Interactive states</p>
              </div>
            </Card>
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg" style={{ backgroundColor: '#4FD1C5' }}></div>
              <div>
                <p className="font-mono text-sm">#4FD1C5</p>
                <p className="text-sm text-muted-foreground">Secondary Light</p>
                <p className="text-xs text-muted-foreground mt-1">Highlights, candidate accent</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Accent - Warm Amber</h2>
          <p className="text-muted-foreground">CTAs, action buttons (Record, Start, Invite)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg" style={{ backgroundColor: '#F4B740' }}></div>
              <div>
                <p className="font-mono text-sm">#F4B740</p>
                <p className="text-sm text-muted-foreground">Accent</p>
                <p className="text-xs text-muted-foreground mt-1">Primary CTAs, record button</p>
              </div>
            </Card>
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg" style={{ backgroundColor: '#E5A830' }}></div>
              <div>
                <p className="font-mono text-sm">#E5A830</p>
                <p className="text-sm text-muted-foreground">Accent Hover</p>
                <p className="text-xs text-muted-foreground mt-1">Hover states for CTAs</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Status Colors</h2>
          <p className="text-muted-foreground">Feedback, states, and notifications</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg" style={{ backgroundColor: '#3AC97A' }}></div>
              <div>
                <p className="font-mono text-sm">#3AC97A</p>
                <p className="text-sm text-muted-foreground">Success</p>
                <p className="text-xs text-muted-foreground mt-1">Completed, positive</p>
              </div>
            </Card>
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg" style={{ backgroundColor: '#F4B740' }}></div>
              <div>
                <p className="font-mono text-sm">#F4B740</p>
                <p className="text-sm text-muted-foreground">Warning</p>
                <p className="text-xs text-muted-foreground mt-1">Pending, attention</p>
              </div>
            </Card>
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg" style={{ backgroundColor: '#2EC4B6' }}></div>
              <div>
                <p className="font-mono text-sm">#2EC4B6</p>
                <p className="text-sm text-muted-foreground">Info</p>
                <p className="text-xs text-muted-foreground mt-1">Informational</p>
              </div>
            </Card>
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg" style={{ backgroundColor: '#E57373' }}></div>
              <div>
                <p className="font-mono text-sm">#E57373</p>
                <p className="text-sm text-muted-foreground">Destructive</p>
                <p className="text-xs text-muted-foreground mt-1">Delete, errors (muted)</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Backgrounds - Light Mode</h2>
          <p className="text-muted-foreground">Off-white tones reduce eye strain</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg border" style={{ backgroundColor: '#F7F9FC' }}></div>
              <div>
                <p className="font-mono text-sm">#F7F9FC</p>
                <p className="text-sm text-muted-foreground">Background</p>
                <p className="text-xs text-muted-foreground mt-1">Main page background</p>
              </div>
            </Card>
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg border" style={{ backgroundColor: '#FFFFFF' }}></div>
              <div>
                <p className="font-mono text-sm">#FFFFFF</p>
                <p className="text-sm text-muted-foreground">Card</p>
                <p className="text-xs text-muted-foreground mt-1">Content cards</p>
              </div>
            </Card>
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg border" style={{ backgroundColor: '#F1F3F7' }}></div>
              <div>
                <p className="font-mono text-sm">#F1F3F7</p>
                <p className="text-sm text-muted-foreground">Muted</p>
                <p className="text-xs text-muted-foreground mt-1">Subtle backgrounds</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Backgrounds - Dark Mode</h2>
          <p className="text-muted-foreground">Essential for video playback & long sessions</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg border" style={{ backgroundColor: '#0F172A' }}></div>
              <div>
                <p className="font-mono text-sm">#0F172A</p>
                <p className="text-sm text-muted-foreground">Dark Background</p>
                <p className="text-xs text-muted-foreground mt-1">Charcoal navy base</p>
              </div>
            </Card>
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg border" style={{ backgroundColor: '#1E293B' }}></div>
              <div>
                <p className="font-mono text-sm">#1E293B</p>
                <p className="text-sm text-muted-foreground">Dark Card</p>
                <p className="text-xs text-muted-foreground mt-1">Content cards</p>
              </div>
            </Card>
            <Card className="p-6 space-y-3">
              <div className="h-24 rounded-lg border" style={{ backgroundColor: '#334155' }}></div>
              <div>
                <p className="font-mono text-sm">#334155</p>
                <p className="text-sm text-muted-foreground">Dark Muted</p>
                <p className="text-xs text-muted-foreground mt-1">Borders, inputs</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Interface-Specific Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Candidate Interface</h3>
              <p className="text-sm text-muted-foreground">Lighter, friendlier, less stressful</p>
              <Card className="p-6 space-y-3">
                <div className="h-20 rounded-lg border" style={{ backgroundColor: '#F9FAFB' }}></div>
                <p className="font-mono text-sm">#F9FAFB - Candidate BG</p>
                <div className="h-20 rounded-lg" style={{ backgroundColor: '#2B3F6C' }}></div>
                <p className="font-mono text-sm">#2B3F6C - Candidate Primary</p>
                <div className="h-20 rounded-lg" style={{ backgroundColor: '#4FD1C5' }}></div>
                <p className="font-mono text-sm">#4FD1C5 - Candidate Accent</p>
              </Card>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Recruiter/Admin Interface</h3>
              <p className="text-sm text-muted-foreground">Darker, data-focused, professional</p>
              <Card className="p-6 space-y-3">
                <div className="h-20 rounded-lg border" style={{ backgroundColor: '#FFFFFF' }}></div>
                <p className="font-mono text-sm">#FFFFFF - Recruiter BG</p>
                <div className="h-20 rounded-lg" style={{ backgroundColor: '#243A5E' }}></div>
                <p className="font-mono text-sm">#243A5E - Recruiter Primary</p>
                <div className="h-20 rounded-lg" style={{ backgroundColor: '#2EC4B6' }}></div>
                <p className="font-mono text-sm">#2EC4B6 - Recruiter Accent</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Usage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-3">
              <h3 className="font-semibold text-success">✓ Do</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use deep blue for trust and professionalism</li>
                <li>• Use teal for AI and technology features</li>
                <li>• Use amber for action buttons (not red)</li>
                <li>• Implement dark mode for video playback</li>
                <li>• Keep candidate interface lighter and friendly</li>
                <li>• Use higher contrast for recruiter dashboards</li>
              </ul>
            </Card>
            <Card className="p-6 space-y-3">
              <h3 className="font-semibold text-destructive">✗ Avoid</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Bright red (increases candidate stress)</li>
                <li>• Neon colors (unprofessional)</li>
                <li>• Too many gradients</li>
                <li>• Overly colorful icons</li>
                <li>• Pure black backgrounds</li>
                <li>• Low contrast text</li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Chart Colors - Analytics</h2>
          <p className="text-muted-foreground">Data visualization palette</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { color: '#243A5E', name: 'Chart 1' },
              { color: '#2EC4B6', name: 'Chart 2' },
              { color: '#F4B740', name: 'Chart 3' },
              { color: '#3AC97A', name: 'Chart 4' },
              { color: '#64748B', name: 'Chart 5' },
            ].map((item) => (
              <Card key={item.name} className="p-4 space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: item.color }}></div>
                <p className="text-sm text-muted-foreground">{item.name}</p>
                <p className="font-mono text-xs">{item.color}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ColorShowcase;
