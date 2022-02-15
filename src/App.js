import './App.css';
import { AuthProvider } from './context/AuthContext';
import Main from './components/Main';

function App() {
  return (
    <AuthProvider>
      <Main/>
    </AuthProvider>
  );
}

export default App;
