import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from './About';
import Chat from './Chat';

// Footer
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
);

export default App;