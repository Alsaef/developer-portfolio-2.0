import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Universally reliable worker setup for React-PDF (Fixes Vite build issues)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfView = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center mt-10 w-full overflow-hidden relative z-10">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 md:p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.15)] hover:border-[var(--color-primary)]/30">
        <Document 
          file="/al-saef-ratut-cv.pdf" 
          className="flex justify-center flex-col items-center"
          loading={
            <div className="flex justify-center items-center h-64">
              <p className="text-[var(--color-primary)] font-medium animate-pulse text-lg">
                Loading Document...
              </p>
            </div>
          }
          error={
            <div className="flex justify-center items-center h-64 text-center px-4">
              <p className="text-red-400 font-medium">
                Failed to load PDF. Please ensure "al-saef-ratut-cv.pdf" is in your public folder.
              </p>
            </div>
          }
        >
          {/* Subtle shadow on the PDF page itself */}
          <Page 
            pageNumber={1} 
            scale={width > 786 ? 1.4 : 0.6} 
            className="shadow-lg"
            renderTextLayer={false} 
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  );
};

export default PdfView;