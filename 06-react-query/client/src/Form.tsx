import { useState } from 'react';
import { useCreateTask } from './services/hooks';

export const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  const { createTask, isLoading } = useCreateTask();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTask({ taskTitle: newItemName }, {
      onSuccess: () => {
        setNewItemName('');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Task Builder</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn' disabled={isLoading}>
          Add Task
        </button>
      </div>
    </form>
  );
};
