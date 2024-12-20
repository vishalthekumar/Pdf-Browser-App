import React from "react";

function PDFList({ pdfs }) {
  if (pdfs.length === 0) {
    return <p>No PDFs found.</p>; // if no pdf found 
  }

  return (
    <div className="pdf-list">
      {pdfs.map(({ id, name, author, thumbnail, link })=>(
        <div key={id} className="pdf-item">
          <img src={thumbnail}  className="thumbnail" /> 
          <h1>{id}</h1>
          <h3>{name}</h3>
          <p>{author}</p>
          <a href={link} target="blank" >
            <button>Open PDF</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default PDFList;
