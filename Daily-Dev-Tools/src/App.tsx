import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Components/Home'
import JsonComparer from './Tool-Components/JsonComparer';
import JsonFormatter from './Tool-Components/JsonFormatter';
import SqlFormatter from './Tool-Components/SqlFormatter';
import LoremIpsum from './Tool-Components/LoremIpsum';
import TextComparer from './Tool-Components/TextComparer';
import JsonValidator from './Tool-Components/JsonValidator';

export default function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="JsonFormatter" element={<JsonFormatter />} />
        <Route path="JsonComparer" element={<JsonComparer />} />
        <Route path="SQLFormatter" element={<SqlFormatter />} />
        <Route path="LoremIpsum" element={<LoremIpsum />} />
        <Route path="TextComparer" element={<TextComparer />} />
        <Route path="JsonValidator" element={<JsonValidator />} />
      </Routes>
    </Router>

  )
}
