    
    function updateSize() {
        let oFiles = this.files,
            nFiles = oFiles.length;


        const reader = new FileReader();
        reader.onload = function() {
          console.log(reader.result);
          document.getElementById("fileOutput").innerHTML = reader.result;
          document.getElementById('uploadInput').style.display = "none"
        };
        reader.readAsText(oFiles[0]);
        
      }
    
document.getElementById("uploadInput").addEventListener("change", updateSize, false);