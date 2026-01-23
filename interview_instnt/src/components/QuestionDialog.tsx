import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';

interface InterviewQuestion {
  id: number;
  text: string;
  attempts: 'Unlimited' | '1' | '3' | '5';
  duration: '15 sec' | '30 sec' | '45 sec' | '60 sec';
}

interface QuestionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  question?: InterviewQuestion | null;
  onSave: (question: Omit<InterviewQuestion, 'id'>) => void;
  title: string;
  saveLabel?: string;
}

export const QuestionDialog: React.FC<QuestionDialogProps> = ({
  open,
  onOpenChange,
  question,
  onSave,
  title,
  saveLabel = 'Save question',
}) => {
  const [text, setText] = useState('');
  const [attempts, setAttempts] = useState<'Unlimited' | '1' | '3' | '5'>('1');
  const [duration, setDuration] = useState<'15 sec' | '30 sec' | '45 sec' | '60 sec'>('60 sec');
  const [error, setError] = useState('');

  useEffect(() => {
    if (question) {
      setText(question.text);
      setAttempts(question.attempts);
      setDuration(question.duration);
    } else {
      setText('');
      setAttempts('1');
      setDuration('60 sec');
    }
    setError('');
  }, [question, open]);

  const handleSave = () => {
    if (!text.trim()) {
      setError('Question text is required');
      return;
    }
    onSave({ text, attempts, duration });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Question text</label>
            <Input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                if (e.target.value.trim()) setError('');
              }}
              placeholder="e.g. What do you know about our company?"
              className={error ? 'border-red-500' : ''}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Attempts</label>
              <div className="flex border border-gray-200 rounded-md bg-white overflow-hidden">
                {['Unlimited', '1', '3', '5'].map((opt) => (
                  <button 
                    key={opt}
                    onClick={() => setAttempts(opt as any)}
                    className={`flex-1 py-2 text-sm border-r border-gray-200 last:border-r-0 transition-colors
                      ${attempts === opt 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-gray-600 hover:bg-gray-50'}`}
                    type="button"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
              <div className="flex border border-gray-200 rounded-md bg-white overflow-hidden">
                {['15 sec', '30 sec', '45 sec', '60 sec'].map((opt) => (
                  <button 
                    key={opt}
                    onClick={() => setDuration(opt as any)}
                    className={`flex-1 py-2 text-sm border-r border-gray-200 last:border-r-0 transition-colors
                      ${duration === opt 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-gray-600 hover:bg-gray-50'}`}
                    type="button"
                  >
                    {opt.split(' ')[0]}s
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" type="button">Cancel</Button>
          </DialogClose>
          <Button type="button" onClick={handleSave}>{saveLabel}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

