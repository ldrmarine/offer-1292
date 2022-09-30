$(".form__label2").hover(function(){
    $(".form__label2").addClass("active");
})
$(".form__label3").hover(function(){
    $(".form__label3").addClass("active");
})
/* */
$( function() {
  var progressbar = $( "#progressbar" ),
    progressLabel = $( ".progress-label" );

  progressbar.progressbar({
    value: false,
    change: function() {
      progressLabel.text( progressbar.progressbar( "value" ) + "%" );
    },
    complete: function() {
      progressLabel.text( "90%" );
    }
  });

  function progress() {
    var val = progressbar.progressbar( "value" ) || 0;

    progressbar.progressbar( "value", val + 2 );

    if ( val < 99 ) {
      setTimeout( progress, 80 );
    }
  }

  setTimeout( progress, 10000 );
  
} );


/**/

$( function() {
  var progressbar = $( "#progressbar2" ),
    progressLabel = $( ".progress-label2" );

  progressbar.progressbar({
    value: false,
    change: function() {
      progressLabel.text( progressbar.progressbar( "value" ) + "%" );
    },
    complete: function() {
      progressLabel.text( "85%" );
    }
  });

  function progress() {
    var val = progressbar.progressbar( "value" ) || 0;

    progressbar.progressbar( "value", val + 2 );

    if ( val < 99 ) {
      setTimeout( progress, 80 );
    }
  }

  setTimeout( progress, 10000 );
  
} );
/**/

$( function() {
  var progressbar = $( "#progressbar3" ),
    progressLabel = $( ".progress-label3" );

  progressbar.progressbar({
    value: false,
    change: function() {
      progressLabel.text( progressbar.progressbar( "value" ) + "%" );
    },
    complete: function() {
      progressLabel.text( "79%" );
    }
  });

  function progress() {
    var val = progressbar.progressbar( "value" ) || 0;

    progressbar.progressbar( "value", val + 2 );

    if ( val < 99 ) {
      setTimeout( progress, 80 );
    }
  }

  setTimeout( progress, 10000 );
  
} );

/* */
const tabs = document.getElementById('reviews-btns');
const contents = document.getElementById('reviews-content');

const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e =>{
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < contents.children.length; i++){
        contents.children[i].classList.remove('active');
        if(contents.children[i].dataset.content == currTab){
            contents.children[i].classList.add('active');
        }
    }
})