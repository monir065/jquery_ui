$(document).ready(function(){


  // draggable start
  $("#dragg").draggable();
  // draggable end
  // dragg and drop start 
  $("#dragga").draggable();
  $("#dropp").droppable({
    drop: function(event, ui){
      $(this)
      .addClass("ui-state-highlight")
      .fingd("p")
      .html("Dropped");
    }
  });
  // dragg and drop end
  // selectable start 
  $("#select").selectable();
  // selectable end
  // sortable start 
  $("#sortable").sortable();
  // accordion start 
  $("#accordion").accordion();
  // autocomplete start 
  var availableTags = [
    "Asp",
    "AppleScript",
    "BASIC",
    "C",
    "C++",
    "Java",
    "JavaScript",
    "PHP",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy"
  ];
  $("#tags").autocomplete({
    source: availableTags
  });
  // datepickep start 
  $("#datepik").datepicker();
  // tabs start 
  $("#tabs").tabs();
  // tooltip start 
  $("#tooltip").tooltip();
  // add class start 
  $("#btn0").on("click", function(){
    $("#effect0").addClass("newClass0", 1000, callback0);
  });
  function callback0(){
    setTimeout(function(){
      $("#effect0").removeClass("newClass0");
    }, 1500);
  }
  // Hide 
  function runEffect1(){
    var selectedEffact1 = $("#effectTypes1").val();

    var options1 = {};
    if (selectedEffact1 === "scale"){
      options1 = {percent: 50};
    }else if (selectedEffact1 === "size"){
      options1 = {to:{width:200, height:60}};
    }
    $("#effect1").hide(selectedEffact1, options1, 1000, callback1);

  };
  function callback1(){
    setTimeout(function(){
      $("#effect1").removeAttr("style").hide().fadeIn();
    }, 1000);
  };
  $("#btn1").on("click", function(){
    runEffect1();
  });
  // remove 
  $("#btn2").on("click", function(){
    $("#effect2").removeClass("newClass1", 1000, callback);
  });
  function callback(){
    setTimeout(function(){
      $("#effect2").addClass("newClass1");
    }, 1500);
  }
  // show 
  function runEffect3(){
    var selectedEffact3 = $("#effectTypes3").val();

    var options3 = {};
    if (selectedEffact3 === "scale"){
      options3 = {percent: 50};
    }else if (selectedEffact3 === "size"){
      options3 = {to:{width:200, height:185}};
    }
    $("#effect3").show(selectedEffact3, options3, 500, callback3);

  };
  function callback3(){
    setTimeout(function(){
      $("#effect3:visible").removeAttr("style").fadeOut();
    }, 1000);
  };
  $("#btn3").on("click", function(){
    runEffect3();
  });
  $("#effect3").hide();


  // switch 
  $("#btn4").on("click", function(){
    $(".newClass4").switchClass("newClass4", "anotherNewclass4", 1000);
    $(".anotherNewclass4").switchClass("anotherNewclass4", "newClass4", 1000);
  });
});