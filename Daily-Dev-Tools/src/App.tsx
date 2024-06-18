import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Components/Home'
import JsonComparer from './Tool-Components/JsonComparer';
import JsonFormatter from './Tool-Components/JsonFormatter';
import SqlFormatter from './Tool-Components/SqlFormatter';
import RandomTextGenerator from './Tool-Components/RandomTextGenerator';
import TextComparer from './Tool-Components/TextComparer';
import JsonValidator from './Tool-Components/JsonValidator';
import CurlFormatter from './Tool-Components/CurlFormatter';
import CharacterCount from './Tool-Components/CharacterCount';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

export default function App() {
  return (

    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="JsonFormatter" element={<JsonFormatter />} />
        <Route path="JsonComparer" element={<JsonComparer />} />
        <Route path="SQLFormatter" element={<SqlFormatter />} />
        <Route path="RandomTextGenerator" element={<RandomTextGenerator />} />
        <Route path="TextComparer" element={<TextComparer />} />
        <Route path="JsonValidator" element={<JsonValidator />} />
        <Route path="CurlFormatter" element={<CurlFormatter />} />
        <Route path="CharacterCount" element={<CharacterCount />} />
      </Routes>
    </Router>

  )
}
