# PDF Browser App

The **PDF Browser App** is a web application that allows users to search, view, and access PDFs. It connects to a remote API to fetch a list of PDFs, displays the PDFs with their details, and allows users to view the PDF by selecting it from the list. The app provides an interactive interface where users can filter PDFs based on the author's name and view more information about the PDFs.

## Features

- **Search Functionality:** Users can search for PDFs by author name.
- **Display PDFs List:** PDFs are displayed with a thumbnail, title, author, and button  option to open the PDF.
- **PDF Viewer:** Clicking on a PDF opens it in a new tab for viewing.
- **Responsive Design:** The app is designed to be responsive and works across different screen sizes.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **CSS:** Styling for the app.
- **Fetch API:** Fetching PDF data from a remote server.
- **React State and Hooks:** Managing state and side effects with `useState` and `useEffect`.
- **React Components:** Modular components for rendering PDFs and handling search.

## Installation
npx create-react-app pdf
npm install react
npm install 
npm install react-pdf


## Project Structure
src/
├── Components/
│   ├── PDFReader.js    # Component to display the selected PDF
│   ├── PDFList.js      # Component to display the list of PDFs
├── App.js              # Component to display the list of PDFs
├── App.css             # Component to display the list of PDFs
└── index.js



