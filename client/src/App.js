import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <Router>
        <Route exact path="/">
          <Join name={name} setName={setName} />
        </Route>
        <Route path="/chat">
          <Chat name={name} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
