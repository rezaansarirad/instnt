import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Edit2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SortableQuestionItemProps {
  id: number;
  index: number;
  text: string;
  attempts: string;
  duration: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const SortableQuestionItem: React.FC<SortableQuestionItemProps> = ({ 
  id, 
  index, 
  text, 
  attempts, 
  duration, 
  onEdit, 
  onDelete 
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="bg-white p-4 rounded-md border border-gray-200 group relative">
      <div className="flex items-start gap-3">
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
             <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Question {index + 1}</span>
             <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm" onClick={() => onEdit(id)} className="h-8 px-2 text-gray-500 hover:text-primary">
                  <Edit2 size={14} className="mr-1.5" /> Edit
                </Button>
                <Button variant="ghost" size="sm" onClick={() => onDelete(id)} className="h-8 px-2 text-gray-500 hover:text-red-500">
                  <Trash2 size={14} />
                </Button>
                <div {...attributes} {...listeners} className="cursor-grab text-gray-400 hover:text-gray-600 p-1">
                   <GripVertical size={16} />
                </div>
             </div>
          </div>
          <p className="text-gray-900 font-medium text-base">{text}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{attempts === 'Unlimited' ? 'Unlimited attempts' : `${attempts} attempt${attempts !== '1' ? 's' : ''}`}</span>
            <span>•</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

