import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Swagger UI pour univers-mc.cloud</h1>
      </header>
      <main>
        <SwaggerUI url="backend/json/data.json" />
      </main>
    </div>
  );
}

export default App;