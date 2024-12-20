import React, { useState, useEffect } from 'react';
import './App.css';
import PDFReader from './Components/PDFReader';
import PDFList from './Components/PDFList';

function App() {
  const [pdfs, setPdfs] = useState([]);         
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedPdf, setSelectedPdf] = useState(''); 

  
  useEffect(() => {
    fetch('https://api.npoint.io/dee51ea017d20efdfcc8')
      .then((response) => response.json())
      .then((data) => setPdfs(data)) 
      .catch((error) => console.error('Error fetching PDFs:', error)); 
  }, []); 

  // filter pdf based on search query
  const filteredPdfs = pdfs.filter((pdf) =>
    (pdf.author || '').toLowerCase().includes(searchQuery.toLowerCase()) // Search by author
  );


  return (
    <div className="App">
      <h1>PDF Browser App</h1>

      {/* search bar to filter pdf by author*/}
      <input type="text" placeholder="Search PDFs by author..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-bar"/>



      {/* render PDFReader if a PDF is selected,otherwise render PDFList*/}
      {selectedPdf ? (
        <PDFReader pdf={selectedPdf} setSelectedPdf={setSelectedPdf} />
      ) : (
        <PDFList pdfs={filteredPdfs} setSelectedPdf={setSelectedPdf} />
      )}
    </div>
  );
}

export default App;
// 