import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const ConnectForm = () => {
  const [username, setUsername] = useState('');

  const handleConnect = () => {
    window.location.href = `http://localhost:8080?username=${encodeURIComponent(username)}`;
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Conectar al Juego
      </Typography>
      <TextField 
        label="Usuario"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        color="secondary"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'secondary.main',
            },
            '&:hover fieldset': {
              borderColor: 'secondary.main',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'secondary.main',
            },
            '& input': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'secondary.main',
            },
          },
        }}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleConnect}
      >
        Conectar
      </Button>
    </Container>
  );
};

export default ConnectForm;
