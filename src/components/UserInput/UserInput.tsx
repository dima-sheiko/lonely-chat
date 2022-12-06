import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { DialogTitle, DialogContent, Dialog, TextField } from '@mui/material';

interface UserInputProps {
  handleUser: (user: string) => void;
  user: string;
}

export const UserInput = ({ handleUser, user }: UserInputProps) => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(true);

  // Effect
  useEffect(() => {
    if (user) {
      setOpen(false);
    }
  }, [user]);

  // Handlers
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleUser(value);
    setValue('');
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Please Enter Your Name</DialogTitle>
        <DialogContent>
          <form action='user input' onSubmit={onSubmit}>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              type='text'
              fullWidth
              variant='standard'
              value={value}
              onChange={onChange}
            />
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
