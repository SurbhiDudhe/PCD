
  function showPDF(pdfSrc, title) {
    document.getElementById("pdfTitle").innerText = title;
    document.querySelector(".pdf-embed").setAttribute("src", pdfSrc);
  }
