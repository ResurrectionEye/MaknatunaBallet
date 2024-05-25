const FontLoader = {
  /**
   * @description Loads fonts (PS: only google fonts platform is supported)
   */
  Load: (FontName, Size = -1) => {
    // Create blob
    const FontURL = `https://fonts.googleapis.com/css2?family=${String(FontName).replace(/\s/g, '+')}${Size === '*' ? ":wght@100" : ''}&display=swap`;
    const FontBlob = new Blob([`@import url('${FontURL}')`], { type: 'text/css' });
    const BlobURL = URL.createObjectURL(FontBlob);

    // Define font linker
    const FontLinker = document.createElement("link");
    FontLinker.rel = "stylesheet";
    FontLinker.href = BlobURL;

    // Append to head
    document.head.appendChild(FontLinker);
  },
  /**
   * @description Sets font by a name
   */
  Set: (FontName) => {
    document.body.style.fontFamily = FontName;
  }
}

export default FontLoader;