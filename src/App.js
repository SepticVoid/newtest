import React from "react";
const api = {
  key: "9df0e40659c2e326c1963fc4eaf221d4",
  base: "http://api.openweathermap.org/data/2.5",
};

function App() {
  return (
    <div ClassName="app warm">
      <main>
        <div ClassName="search-box">
          <input type="text" ClassName="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
