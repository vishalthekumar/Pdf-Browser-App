import React from "react";

function PDFList({ pdfs }) {
  return (
    <div className="pdf-list">
      {pdfs.map((pdf) => (
        <div
          key={pdf.id} className="pdf-item"
          onClick={() => window.open(pdf.pdfUrl, "blank")} 
        >
          <h3>{pdf.title}</h3>
          <p>{pdf.author}</p>
        </div>
      ))}
    </div>
  );
}

export default PDFList;
