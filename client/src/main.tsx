import ReactDOM from 'react-dom/client';
import App from './App';
import './general.css';

const root = (document.getElementById('root'));

if(!root) 
    throw new Error('root id return an invalid value!');

ReactDOM.createRoot(root).render(<App />);