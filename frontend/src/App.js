import React from 'react';
import { Button } from 'tenebra-ui';

function App() {
  return (
    <div className="App">
      <Button variant="primary" size="lg">
        Hello from UI Library!
      </Button>
      <Button variant="secondary" onClick={() => alert('Clicked!')}>
        Secondary Button
      </Button>
    </div>
  );
}

export default App;