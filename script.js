document.addEventListener("DOMContentLoaded", function(){

  console.log("loinked")
  var circ = document.getElementsByClassName("circle")[0]
  var body = document.body

  // var stopSize = function(id, count){
  //   if(parseInt($(id).css("width").match(/\d+/g))/2 <= $("#bottom").position().top + (body.scrollTop - $(id).offset().top)){
  //     console.log("stop size?")
  //
  //   }
  // }

  var smallChange = function(id){
      if($(id).css("width").match(/\d+/g) < 250 && !$(id).children().hasClass("smallCirc")){
        $(id).append("<div class='smallCirc'></div>")
        console.log("channnngngnngnge")
      }
  }

  var scrollTill = function(id){
    var count = ($("#bottom").position().top + (body.scrollTop - $(id).offset().top)) * 5

    if(parseInt($(id).css("width").match(/\d+/g))/2 <= $("#bottom").position().top + (body.scrollTop - $(id).offset().top)){
      // stickDiv(id)
      //stops the circle from growing

      //checks when the circle hits the top of the bottom div, and if the width of the circle is less that 500
    } else if(-(body.scrollTop - $(id).offset().top) < $("#bottom").position().top && parseInt($(id).css("width").match(/\d+/g)) <= 500){
      // console.log("first change")
      // console.log(count)
      $(id).css("width", (500 - count + "px"))
      $(id).css("height", (500 - count + "px"))
      $(id).css("border-radius", ((500 - count)/2 + "px"))
      // smallChange(id)
      // $(id + "text").css("line-height", (500 - count + "px"))
      // $(id).css("line-height", (500 - count + "px"))


    }
  }
  // var stickDiv = function(id){
  //   if(parseInt($(id).css("width").match(/\d+/g))/2 <= $("#bottom").position().top + (body.scrollTop - $(id).offset().top)){
  //     // var
  //     console.log("stikky")
  //     var top = $("#bottom").position().top - parseInt($(id).css("width").match(/\d+/g))/2
  //     $(id).css("position", "fixed")
  //     $(id).css("top", top + "px")
  //     $(id).css("margin-top", "0")
  //     $(id).css("margin-bottom", "0")
  //
  //   } else {
  //     console.log("stop?")
  //   }
  // }
  // var originalStyle = function(id){
  //   $(id)[0].style.position = "relative"
  //   $(id)[0].style.top = ""
  //   $(id)[0].style.left = ""
  //   $(id)[0].style.right = ""
  // }
  document.addEventListener("scroll", function(e){

    $(".circle").each(function(x,y){
      var id = y.id
      // console.log("#" + id)
      scrollTill("#" + id)

    })
    // stickDiv("#c1")
  })
})
