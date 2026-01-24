import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Check, Upload, X, FileVideo } from 'lucide-react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableRequirementItem } from '@/components/SortableRequirementItem';
import { SortableQuestionItem } from '@/components/SortableQuestionItem';
import { QuestionDialog } from '@/components/QuestionDialog';
import { ConfirmationDialog } from '@/components/common/ConfirmationDialog';
import { EditInputDialog } from '@/components/common/EditInputDialog';

interface InterviewQuestion {
  id: number;
  text: string;
  attempts: 'Unlimited' | '1' | '3' | '5';
  duration: '15 sec' | '30 sec' | '45 sec' | '60 sec';
  error?: string;
}
import { useNavigate } from 'react-router-dom';

const CreateJob: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [requirements, setRequirements] = useState([
    { id: 1, title: 'Driving Licence' },
    { id: 2, title: 'Work Permit' },
  ]);
  const [newRequirement, setNewRequirement] = useState('');
  
  const [questions, setQuestions] = useState<InterviewQuestion[]>([
    { id: 1, text: 'What do you know about our company?', attempts: '1', duration: '60 sec' }
  ]);
  const [isQuestionDialogOpen, setIsQuestionDialogOpen] = useState(false);
  const [editingQuestionId, setEditingQuestionId] = useState<number | null>(null);

  const [videoFile, setVideoFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingReqId, setEditingReqId] = useState<number | null>(null);
  const [editingReqTitle, setEditingReqTitle] = useState('');

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ type: 'requirement' | 'question', id: number } | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  
  const { register, watch, setValue } = useForm({
    defaultValues: {
      jobTitle: 'Sales Representative',
      company: 'TBC',
      location: 'Istanbul',
      salary: '3200',
      description: 'How would you describe the job?',
      language: 'English',
      cvRequired: true,
    }
  });

  const formData = watch();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (active.id !== over?.id) {
      if (requirements.some(r => r.id === active.id)) {
        setRequirements((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over?.id);
          return arrayMove(items, oldIndex, newIndex);
        });
      } else {
        setQuestions((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over?.id);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
    }
  };

  const openEditModal = (id: number, title: string) => {
    setEditingReqId(id);
    setEditingReqTitle(title);
    setIsEditModalOpen(true);
  };

  const saveEditedRequirement = (newTitle: string) => {
    if (editingReqId !== null && newTitle.trim()) {
      setRequirements(requirements.map(req => 
        req.id === editingReqId ? { ...req, title: newTitle } : req
      ));
      setEditingReqId(null);
      setEditingReqTitle('');
    }
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      if (itemToDelete.type === 'requirement') {
        setRequirements(requirements.filter(req => req.id !== itemToDelete.id));
      } else if (itemToDelete.type === 'question') {
        setQuestions(questions.filter(q => q.id !== itemToDelete.id));
      }
      setIsDeleteDialogOpen(false);
      setItemToDelete(null);
    }
  };

  const handleRequirementDeleteClick = (id: number) => {
    setItemToDelete({ type: 'requirement', id });
    setIsDeleteDialogOpen(true);
  };

  const handleQuestionDeleteClick = (id: number) => {
    setItemToDelete({ type: 'question', id });
    setIsDeleteDialogOpen(true);
  };

  const handleRequirementAdd = () => {
    if (newRequirement.trim()) {
      setRequirements([...requirements, { id: Date.now(), title: newRequirement }]);
      setNewRequirement('');
    }
  };

  const handleAddQuestion = () => {
    setEditingQuestionId(null);
    setIsQuestionDialogOpen(true);
  };

  const handleEditQuestion = (id: number) => {
    setEditingQuestionId(id);
    setIsQuestionDialogOpen(true);
  };

  const handleSaveQuestion = (questionData: Omit<InterviewQuestion, 'id'>) => {
    if (editingQuestionId) {
      setQuestions(questions.map(q => 
        q.id === editingQuestionId ? { ...q, ...questionData } : q
      ));
    } else {
      if (questions.length < 10) {
        setQuestions([...questions, { id: Date.now(), ...questionData }]);
      }
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 64 * 1024 * 1024) {
        alert('File size must be less than 64MB');
        return;
      }
      setVideoFile(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      if (file.type.startsWith('video/')) {
        if (file.size > 64 * 1024 * 1024) {
          alert('File size must be less than 64MB');
          return;
        }
        setVideoFile(file);
      } else {
        alert('Please upload a video file');
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const removeVideo = () => {
    setVideoFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStepClick = (step: number) => {
    if (step < currentStep) {
      setCurrentStep(step);
    }
  };

  const handleCreateJob = () => {
    const jobData = {
      ...formData,
      requirements,
      questions,
      videoFile: videoFile ? videoFile.name : null
    };
    console.log('Job Data:', jobData);
    
    navigate('/privacy');
  };

  const steps = [
    { id: 1, label: 'General information' },
    { id: 2, label: 'Requirements' },
    { id: 3, label: 'Interview questions' },
    { id: 4, label: 'Intro video' },
  ];

  return (
    <div className="min-h-screen bg-white bg-dot-pattern">
     <header className="border-b border-gray-200 px-4 py-4 md:px-8 md:py-6 sticky top-0 bg-white z-50">
         <div className="max-w-5xl mx-auto">
            <span className="text-2xl font-bold text-primary font-mono tracking-tight">violo</span>
         </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-12">
        
        <div className="mb-12">
           <div className="flex items-center justify-between relative">
              
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 border-t-2 border-gray-200 border-dashed -z-10" />
              <div 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 border-t-2 border-primary border-dashed -z-10 transition-all duration-300"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              />

              {steps.map((step) => {
                const isCompleted = currentStep > step.id;
                const isActive = currentStep === step.id;
                
                return (
                  <div 
                    key={step.id} 
                    className="flex flex-col items-center bg-white px-2 cursor-pointer"
                    onClick={() => handleStepClick(step.id)}
                  >
                    <div 
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 border-2
                        ${isActive 
                          ? 'border-primary bg-primary text-white' 
                          : isCompleted 
                            ? 'border-primary bg-primary text-white' 
                            : 'border-gray-200 bg-white text-gray-400'
                        }`}
                    >
                      {isCompleted ? <Check size={16} /> : step.id}
                    </div>
                    <span className={`mt-2 text-xs md:text-sm font-medium hidden sm:block ${isActive || isCompleted ? 'text-gray-900' : 'text-gray-500'}`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
           </div>
        </div>
      
        {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start md:items-center">
                <Label className="md:col-span-3 text-gray-600 font-normal text-base">Job title (required)</Label>
                <div className="md:col-span-9">
                  <Input {...register('jobTitle')} className="h-10" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start md:items-center">
                <Label className="md:col-span-3 text-gray-600 font-normal text-base">Company (required)</Label>
                <div className="md:col-span-9">
                  <Input {...register('company')} className="h-10" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start md:items-center">
                <Label className="md:col-span-3 text-gray-600 font-normal text-base">Location</Label>
                <div className="md:col-span-9">
                  <Input {...register('location')} className="h-10" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start md:items-center">
                <Label className="md:col-span-3 text-gray-600 font-normal text-base">Salary</Label>
                <div className="md:col-span-9">
                  <Input {...register('salary')} className="h-10" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start">
                <Label className="md:col-span-3 text-gray-600 font-normal text-base pt-2">Job description</Label>
                <div className="md:col-span-9">
                  <Textarea {...register('description')} className="min-h-[100px]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start md:items-center">
                <Label className="md:col-span-3 text-gray-600 font-normal text-base">Language</Label>
                <div className="md:col-span-9">
                  <Select {...register('language')}>
                    <option value="English">English</option>
                    <option value="Turkish">Turkish</option>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start md:items-center">
                <Label className="md:col-span-3 text-gray-600 font-normal text-base">CV required</Label>
                <div className="md:col-span-9 flex items-center gap-2">
                  <Switch checked={formData.cvRequired} onCheckedChange={(c) => setValue('cvRequired', c)} />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                 <Button onClick={handleNextStep} className="bg-primary hover:bg-primary/90 text-white px-8 w-full sm:w-auto">
                    Next step
                 </Button>
              </div>
            </div>
        )}

       
        {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <p className="text-gray-600 mb-6">
                Are there requirements your candidates absolutely need to have in order to qualify for this job? Candidates that do not confirm these requirements cannot apply.
              </p>

              <div className="bg-gray-50 rounded-lg p-4 md:p-6 space-y-4">
                 <h3 className="font-medium text-gray-700 mb-4">Job requirements</h3>
                 
                 <div className="space-y-3">
                   <DndContext 
                     sensors={sensors}
                     collisionDetection={closestCenter}
                     onDragEnd={handleDragEnd}
                   >
                     <SortableContext 
                       items={requirements.map(req => req.id)}
                       strategy={verticalListSortingStrategy}
                     >
                       {requirements.map((req) => (
                         <SortableRequirementItem
                           key={req.id}
                           id={req.id}
                           title={req.title}
                           onEdit={openEditModal}
                           onDelete={handleRequirementDeleteClick}
                         />
                       ))}
                     </SortableContext>
                   </DndContext>
                 </div>

                 <div className="flex flex-col sm:flex-row gap-3 mt-6">
                   <Input 
                     placeholder="Passport, driving licence ..." 
                     value={newRequirement}
                     onChange={(e) => setNewRequirement(e.target.value)}
                     onKeyDown={(e) => {
                       if (e.key === 'Enter') {
                         e.preventDefault();
                         handleRequirementAdd();
                       }
                     }}
                     className="bg-white"
                   />
                   <Button onClick={handleRequirementAdd} className="bg-primary/80 hover:bg-primary text-white whitespace-nowrap w-full sm:w-auto">
                     Add requirement
                   </Button>
                 </div>
              </div>

              <div className="pt-6 flex flex-col-reverse sm:flex-row justify-between gap-4">
                   <Button variant="outline" onClick={() => setCurrentStep(1)} className="w-full sm:w-auto">
                      Back
                   </Button>
                   <Button onClick={handleNextStep} className="bg-primary hover:bg-primary/90 text-white px-8 w-full sm:w-auto">
                      Next step
                   </Button>
              </div>
            </div>
        )}

  
        {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            
               <p className="text-gray-600 mb-6">
                Add up to 10 questions. For each, decide the number of attempts and the recording time.
              </p>

              <div className="bg-gray-50 rounded-lg p-4 md:p-6">
                 <h3 className="font-medium text-gray-700 mb-6">Interview</h3>
                 
                 <div className="space-y-4">
                   <DndContext 
                     sensors={sensors}
                     collisionDetection={closestCenter}
                     onDragEnd={handleDragEnd}
                   >
                     <SortableContext 
                       items={questions.map(q => q.id)}
                       strategy={verticalListSortingStrategy}
                     >
                       {questions.map((question, index) => (
                         <SortableQuestionItem
                           key={question.id}
                           id={question.id}
                           index={index}
                           text={question.text}
                           attempts={question.attempts}
                           duration={question.duration}
                           onEdit={handleEditQuestion}
                           onDelete={handleQuestionDeleteClick}
                         />
                       ))}
                     </SortableContext>
                   </DndContext>
                 </div>

                 {questions.length < 10 && (
                   <div className="flex justify-end mt-8">
                     <Button 
                       onClick={handleAddQuestion}
                       className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
                     >
                       Add question
                     </Button>
                   </div>
                 )}
              </div>
              
              <div className="pt-6 flex flex-col-reverse sm:flex-row justify-between gap-4">
                   <Button variant="outline" onClick={() => setCurrentStep(2)} className="w-full sm:w-auto">
                      Back
                   </Button>
                   <Button onClick={handleNextStep} className="bg-primary hover:bg-primary/90 text-white px-8 w-full sm:w-auto">
                      Next step
                   </Button>
              </div>
            </div>
        )}

        
        {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
               <h2 className="text-2xl font-semibold mb-2">Intro video</h2>
               <p className="text-gray-600 mb-6">
                Add a short video to introduce this job to your candidates and get a better idea about the position, the team and the company. Adding an intro video generally makes candidates feel more comfortable about doing video interviews.
              </p>

              <div 
                className={`bg-white border-2 border-dashed rounded-lg p-6 md:p-12 text-center transition-colors cursor-pointer relative
                  ${videoFile ? 'border-primary/50 bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}
                onClick={() => !videoFile && fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                 <input 
                    type="file" 
                    ref={fileInputRef}
                    className="hidden" 
                    accept="video/*"
                    onChange={handleFileSelect}
                 />
                 
                 {videoFile ? (
                   <div className="flex flex-col items-center">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                        <FileVideo size={24} />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">{videoFile.name}</h3>
                      <p className="text-sm text-gray-500 mb-4">{(videoFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={(e) => {
                          e.stopPropagation();
                          removeVideo();
                        }}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 w-full sm:w-auto"
                      >
                        <X size={16} className="mr-2" /> Remove video
                      </Button>
                   </div>
                 ) : (
                   <>
                     <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-400">
                        <Upload size={24} />
                     </div>
                     <h3 className="text-lg font-medium text-gray-900 mb-1">Upload video</h3>
                     <p className="text-sm text-gray-500 mb-2">or drop a file</p>
                     <p className="text-xs text-gray-400">Max 64 Mb.</p>
                   </>
                 )}
              </div>
              
              <div className="pt-6 flex flex-col-reverse sm:flex-row justify-between gap-4">
                   <Button variant="outline" onClick={() => setCurrentStep(3)} className="w-full sm:w-auto">
                      Back
                   </Button>
                   <Button onClick={handleCreateJob} className="bg-primary hover:bg-primary/90 text-white px-8 w-full sm:w-auto">
                      Create Job
                   </Button>
              </div>
            </div>
        )}

      </div>

      
      <EditInputDialog
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        title="Edit Requirement"
        initialValue={editingReqTitle}
        onSave={saveEditedRequirement}
        placeholder="Enter requirement..."
      />

      
      <QuestionDialog
        open={isQuestionDialogOpen}
        onOpenChange={setIsQuestionDialogOpen}
        question={editingQuestionId ? questions.find(q => q.id === editingQuestionId) : null}
        onSave={handleSaveQuestion}
        title={editingQuestionId ? "Edit Question" : "Add Question"}
        saveLabel={editingQuestionId ? "Save changes" : "Add question"}
      />

      
      <ConfirmationDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        title="Are you sure?"
        description={`This action cannot be undone. This will permanently delete the ${itemToDelete?.type === 'requirement' ? ' requirement' : ' interview question'}.`}
        onConfirm={confirmDelete}
        confirmLabel="Delete"
        variant="destructive"
      />
    </div>
  );
};

export default CreateJob;
