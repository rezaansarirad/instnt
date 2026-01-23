import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Edit2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SortableRequirementItemProps {
  id: number;
  title: string;
  onEdit: (id: number, title: string) => void;
  onDelete: (id: number) => void;
}

export const SortableRequirementItem: React.FC<SortableRequirementItemProps> = ({ id, title, onEdit, onDelete }) => {
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
    <div ref={setNodeRef} style={style} className="flex items-center gap-3 bg-white p-3 rounded-md border border-gray-200 group">
      <div {...attributes} {...listeners} className="cursor-grab text-gray-400 hover:text-gray-600 focus:outline-none">
        <GripVertical size={20} />
      </div>
      <span className="flex-1 text-gray-700 font-medium">{title}</span>
      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="ghost" size="icon" onClick={() => onEdit(id, title)} className="h-8 w-8 text-gray-500 hover:text-primary">
          <Edit2 size={16} />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => onDelete(id)} className="h-8 w-8 text-gray-500 hover:text-red-500">
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  );
};

