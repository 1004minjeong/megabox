let $select = {
  body: $("body"),
  overlay: $("#blackout"),
  modal: $("#trailerModal"),
  showButton: $("#showTrailer"),
  hideButton: $("#hideTrailer"),
};

let play = {
  obj: null,
  query: {
    autoplay: 1,
    controls: 0,
    iv_load_policy: 3,
  },
};

/* $select.showButton.click(function(){
    showPlayer()
}); 밑에랑 같은뜻(줄인거임)*/

$select.showButton.click(showPlayer);
$select.hideButton.click(hidePlayer);

function setPlayer(id) {
  play.obj = new YT.Player("trailer", {
    //#trailer를 불러서 사용   
    videoId: id,
    playerVars: play.query,
  });
  resizePlayer();
  //리사이즈,화면이회전되거나 화면의 사이즈를 바꿀때 다시설정
  $(window).on("resize orientationchange",function(){
    resizePlayer();
  })
}

function resizePlayer() {
  let viewport_w = $(window).width(); //현재화면의넓이
  let viewport_h = $(window).height(); //현재화면의높이

  let frame_w = viewport_w; //(16:10화면을만들떄)넓이가16일때
  let frame_h = viewport_w / 1.6; //10

  let modal_t = (viewport_h - frame_h)/2 + "px"; //화면에서 떨어지는공간
  let modal_l = 0;
  
  $select.modal.css({top:modal_t, left:modal_l});
  play.obj.setSize(frame_w, frame_h);
}

function showPlayer() {
  //console.log($select.showButton.data('youtube'))
  if (!play.obj) {
    setPlayer($select.showButton.data("youtube"));
  }
  $select.overlay.show();
}

function hidePlayer() {
  play.obj.stopVideo();
  $select.overlay.hide();
}