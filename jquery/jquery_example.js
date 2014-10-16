$(document).ready(function(){
 
//RELEASE 0: 
  //link the image
 
//RELEASE 1:

  //Link this script and the jQuery library to the jquery_example.html file and analyze what this code does. 
 
$('body').css({'background-color': 'pink'})

//RELEASE 2:
bodyElement = $('body')
h1Element = $('h1')
imageElement = $('img')

headerTest = $(':header')
 
everyThing = $('*')

//RELEASE 3: 
$('body > h1').css({border: '5px solid red', color: 'green', visibility: 'hidden'})
$('div.mascot h1').html('Largemouth Bass')
 
 
//RELEASE 4: Event Listener
 // $('img').on('mouseenter', function(e){
 //     e.preventDefault()
 //    $(this).attr('src', '../../imgs/lmbassbig.jpg')
 //  })
 
 // $('img').on('mouseenter', function(e){
	//  e.preventDefault()
 //    $(this).attr('src', '../../imgs/lmbassbig.jpg')
 //  })

 // $('img').on('mouseleave', function(e){
	//  e.preventDefault()
 //    $(this).attr('src', '../../imgs/dbc_logo.jpg')
 //  })
 
 
//RELEASE 5: Experiment on your own
 
  $( "img" ).animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
 
 
 
 
})  // end of the document.ready function: do not remove or write DOM manipulation below this.
