import { useState, useContext } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert('User logged in successfully');
    } catch (error) {
      alert('Error logging in user');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form noValidate autoComplete="off">
        <TextField 
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <TextField 
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
