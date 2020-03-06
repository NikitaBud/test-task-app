import React from 'react';
import './App.scss';
import Header from "./components/header/header";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
