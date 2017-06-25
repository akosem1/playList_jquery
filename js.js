
function cl (a){console.log (a);}



createList()
function createList(dir, filenames) {
	

// var allFolderSongs = allNote.activistsNotes

  // for (var i = 0; i < allFolderSongs.length; i++) {


var main = document.querySelector('main'); 
    // var titleNote = an[i].title;
    // var bodyNote = an[i].body;
    // var dateNote = an[i].date;
    // var timeNote = an[i].time;
   
    var folder = document.createElement("div"); 
        folder.className="newfolder";

      main.appendChild(folder);



    var ul = document.createElement('ul'); 
    folder.appendChild(ul);


    var listSong = document.createElement('li'); 
      

      ul.appendChild(listSong);




	var btn = document.createElement('button'); 
      
      btn.textContent="✘"
      btn.onclick = playSong;
      listSong.appendChild(btn);

}



function playSong() {
	
	}