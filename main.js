function cl (a){
console.log (a);
}

$.get('playlist.php', function(data) {
	$.each(data, function(dir, filenames) {
		// console.log(dir);
		// console.log(filenames);
		buildList(dir, filenames);
	});
});




function buildList(dir, filenames) {
		var container = $('main');

	var playlist = $('<div>', {class: "playlist"});

	var poster = buildPoster(dir, filenames);
	poster.appendTo(playlist);

	buildListSong(dir, filenames,playlist);
}


function buildListSong(dir, filenames,playlist) {
 
var container = $('main_row');


// var main_row = $('<div>', {class: "main_row"});
// main_row.appendTo(container);

var newDirName = `${dir}`.replace('data/', 'DirNameIS');

var col = $('<div>', {class: "col-xs-12 col-md-5  folderBox"} ).attr('id', newDirName);

col.appendTo(main_row);

	var listContainer = $('<ul>', {
		text: dir .replace('data/', ''),
		class: "listSong"

	}).appendTo(playlist);



	$.each(filenames.filter(v => v.includes('.mp3')), function(index, val) {




		$('<li>', {
			html: $('<button>', {
				text: val.replace('.mp3', ''),
				class: 'btnListSong',
				click: playSong, 
			}).attr('data-src', `${dir}/${val}`), 
		}).appendTo(listContainer);

	});
	playlist.appendTo(col);


}


function playSong(e,newDirName) {
	var pressedBtn = e.target;
	 

$('button').removeClass('activeSong ');
$(pressedBtn).addClass('activeSong ');
$(pressedBtn).parent('li').parent('ul').parent('div').parent('div').next().removeClass('activeSong ');
$(pressedBtn).parent('li').parent('ul').parent('div').parent('div').addClass('activeSong ');




	var audio = $('audio')[0];
	audio.src = pressedBtn.dataset.src;
	audio.play();



	$(audio).on('ended', function (e) {
		$(pressedBtn).parent('li').next().find('button').trigger('click');
	})
}

function playAllSong(e) {
	var pressedBtn = e.target;
console.log(e.target);
var ff = $(pressedBtn).find('button').trigger('click');
	var audio = $('audio')[0];
	audio.src = pressedBtn.dataset.src;
	audio.play();

	$(audio).on('ended', function (e) {
		$(pressedBtn).parent('li').next().find('button').trigger('click');
	})
}


function buildPoster(dir, filenames) {
	var imagePath = filenames.filter(function (val) {
		return val.includes('.jpg') || val.includes('.png');
	})[0];


	// console.log(imagePath);



	return $('<img>', {
		src: `${dir}/${imagePath}`,
		width: 100,
		alt: imagePath, 
		click: playAllSong, 
		// error: function () {
		// 	// this.src = 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/rounded-glossy-black-icons-people-things/066156-rounded-glossy-black-icon-people-things-people-girl88-sc54.png';
		// }, 

	AlternateImage
	});

	
}

		function AlternateImage(){
			console.log('check');
		var goro =	$('img'.src) ;
			if(  goro  =='data/${dir}/undefined'){
				console.log('undefined IMG');

				// (goro,{
				//  	src: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/rounded-glossy-black-icons-people-things/066156-rounded-glossy-black-icon-people-things-people-girl88-sc54.png'
				//   	})  ;

				}
		}





makeDir()
function makeDir() {


cl('jjjjjjjj');
	var makeDir = document.querySelector('#makeDir');  
    makeDir.addEventListener('click', function (e) {
 
$folder_name = 'data/11111';
mkdir($folder_name, 0777, true)


    });


}



 