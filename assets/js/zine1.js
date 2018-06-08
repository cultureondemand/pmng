var bbbbbb;
/**
 * scrollVis - encapsulates
 * all the code for the visualization
 * using reusable charts pattern:
 * http://bost.ocks.org/mike/chart/
 */
var scrollVis = function() {
  // constants to define the size
  // and margins of the vis area.

var width = window.innerWidth,
    height = window.innerHeight;

  var margin = {top:10, left:20, bottom:80, right:10};

  // Keep track of which visualization
  // we are on and which was the last
  // index activated. When user scrolls
  // quickly, we want to call all the
  // activate functions that they pass.
  var lastIndex = -1;
  var activeIndex = 0;

 
  // main svg used for visualization
  var svg = null;

  // d3 selection that will be used
  // for displaying visualizations
  var g = null;
  


  // When scrolling to a new section
  // the activation function for that
  // section is called.
  var activateFunctions = [];
  // If a section has an update function
  // then it is called while scrolling
  // through the section with the current
  // progress through the section.
  var updateFunctions = [];

  /**
   * chart
   *
   * @param selection - the current d3 selection(s)
   *  to draw the visualization in. For this
   *  example, we will be drawing it in #vis
   */
  var chart = function(selection) {
     selection.each(function() {
   

      setupSections();

   });
  };


  /**
   * setupVis - creates initial elements for all
   * sections of a visualization.
   */
  setupVis = function() {
   
 
  };

  /**
   * setupSections - each section is activated
   * by a separate function. Here we associate
   * these functions to the sections based on
   * the section's index.
   *
   */
  setupSections = function() {
    // activateFunctions are called each
    // time the active section changes
 

    activateFunctions[0] = showTitle0;
    activateFunctions[1] = showTitle1;
    activateFunctions[2] = showTitle2;
    activateFunctions[3] = showTitle3;
    activateFunctions[4] = showTitle4;
    activateFunctions[5] = showTitle5;



    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for(var i = 0; i < (numrows+1); i++) {
      updateFunctions[i] = function() {};
    }
 ////////////////////////////   updateFunctions[13] = updateCough;
  };

  /**
   * ACTIVATE FUNCTIONS
   *
   * These will be called their
   * section is scrolled to.
   *
   * General pattern is to ensure
   * all content for the current section
   * is transitioned in, while hiding
   * the content for the previous section
   * as well as the next section (as the
   * user may be scrolling up or down).
   *
   */

  /**
   * showTitle - initial title
   *
   * hides: count title
   * (no previous step to hide)
   * shows: intro title
   *
   */
  function showTitle0() {


    
 
 //////////////
 ////////////
 /////////


    var container0 = document.getElementById( 'container0' );
       container0.setAttribute("style", "display:inline-block; ");


    var container1 = document.getElementById( 'container1' );
       container1.setAttribute("style", "display:none; ");

    var container2 = document.getElementById( 'container2' );
       container2.setAttribute("style", "display:none; ");

    var container3 = document.getElementById( 'container3' );
       container3.setAttribute("style", "display:none; ");

    var container4 = document.getElementById( 'container4' );
       container4.setAttribute("style", "display:none; ");

    var container5 = document.getElementById( 'container5' );
       container5.setAttribute("style", "display:none; ");


 
/*

var videoplay = document.getElementById('bgvid0');
       videoplay.setAttribute("style", "display:inline-block; ");
       videoplay.setAttribute("style", "z-index:10; ");

var promise = videoplay.play();

// promise won’t be defined in browsers that don't support promisified play()
if (promise === undefined) {
  console.log('Promisified video play() not supported');
} else {
  promise.then(function() {
    console.log('Video playback successfully initiated, returning a promise');
  }).catch(function(error) {
    console.log('Error initiating video playback: ', error);
  });
}

bgvid0.onloadedmetadata = function() {
  var fileName = this.currentSrc.replace(/^.*[\\\/]/, '');
  document.querySelector('#big0');
};

*/


/////////////////////////////

  
 
 
         

/////////////////////////
////////
 
  


/////////////////////////
////////
 
 
 
 ///////////
 ///////////

 
 


  }

  /**
   * showFillerTitle - filler counts
   *
   * hides: intro title
   * hides: square grid
   * shows: filler count title
   *
   */
  function showTitle1() {

 

////////////////////////////////////////////
////////// Video item to turn off
//////////
///////// var videoplay = document.getElementById('bgvid0');
///////// videoplay.setAttribute("style", "display:none; ");
///////////////////////////////////////////




 
    var scrollimg = document.getElementById( 'scrollimg' );

       scrollimg.setAttribute("style", "display:none; ");




  }


  /**
   *
   *
   */
  


  /**
   *
   */
  



  /**
   *
   */

  function showTitle2() {



 //////

 var width = window.innerWidth,
      height = window.innerHeight;



 ////////


  

 d3.select("#container3").select("svg").remove();


////
/////

 


  
 

//////////////////////////////////////////////// 


 


  }



/////////////
//////////



  /**
   *
   */
  function showTitle3() {

 
  


 

  
//////////////////////////
//////////////// force 1

var width = window.innerWidth,
      height = window.innerHeight,
    rootX;




 



var path = d3.geo.path(),

    force = d3.layout.force().size([width, height]);

var svg = d3.select('#big3').append("svg")
///////////var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("data/us.json", function(error, us) {
  if (error) throw error;


 

  var states = topojson.feature(us, us.objects.states),
      nodes = [],
      links = [];

  states.features.forEach(function(d, i) {
    if (d.id === 2 || d.id === 15 || d.id === 72) return; // lower 48
    var centroid = path.centroid(d);
    if (centroid.some(isNaN)) return;
    centroid.x = centroid[0];
    centroid.y = centroid[1];
    centroid.feature = d;
    nodes.push(centroid);
  });

  d3.geom.voronoi().links(nodes).forEach(function(link) {
    var dx = link.source.x - link.target.x,
        dy = link.source.y - link.target.y;
    link.distance = Math.sqrt(dx * dx + dy * dy);
    links.push(link);
  });

  force
      .gravity(.00001)
    ///  .charge(.001)
      .nodes(nodes)
      .links(links)
      .linkDistance(function(d) { return d.distance; })
      .start();

  var link = svg.selectAll("line")
      .data(links)
    .enter().append("line")
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  var node = svg.selectAll("g")
      .data(nodes)
    .enter().append("g")
      .attr("transform", function(d) { return "translate(" + -d.x + "," + -d.y + ")"; })
      .call(force.drag)
    .append("path")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .attr("d", function(d) { return path(d.feature); });

  force.on("tick", function(e) {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });
  });
});


 
   }


///////
///////




  /**
   * showFillerTitle - filler counts
   *
   *
   */
  function showTitle4() {
 



 d3.select("#container3").select("svg").remove();
 



 
 


  }





/////
////////


  /**
   *
   */
  function showTitle5() {
  







  }


////////////////
/////////////////////////
///////////////////////







  /**
   * UPDATE FUNCTIONS
   *
   * These will be called within a section
   * as the user scrolls through it.
   *
   * We use an immediate transition to
   * update visual elements based on
   * how far the user has scrolled
   *
   */

  /**



  /**
   * DATA FUNCTIONS
   *
   * Used to coerce the data into the
   * formats we need to visualize
   *
   */
 
  

  /**
   * activate -
   *
   * @param index - index of the activated section
   */
  chart.activate = function(index) {
    activeIndex = index;
    var sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
    var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(function(i) {
      activateFunctions[i]();
    });
    lastIndex = activeIndex;
  };

  /**
   * update
   *
   * @param index
   * @param progress
   */
  chart.update = function(index, progress) {
    updateFunctions[index](progress);
  };

  // return chart function
  return chart;
};


/**
 * display - called once data
 * has been loaded.
 * sets up the scroller and
 * displays the visualization.
 *
 * @param data - loaded tsv data
 */
function display() {
  // create a new plot and
  // display it
  var plot = scrollVis();
  d3.select("#vis")
  ////  .datum(data)
    .call(plot);

  // setup scroll functionality
  var scroll = scroller()
    .container(d3.select('#graphic'));

  // pass in .step selection as the steps
  scroll(d3.selectAll('.step'));

  // setup event handling
  scroll.on('active', function(index) {
    // highlight current step text
    d3.selectAll('.step')
      .style('opacity',  function(d,i) { return i == index ? 1 : 0; });


////////////////document.body.style.backgroundImage = "url("+index+".jpg)";

 d3.selectAll('#container'+index)
       .style('display',  function(d,i) { return i == index ? 'none' : 'inline-block'; });

    
 d3.selectAll('#container'+(index-1))
      .style('display',  function(d,i) { return i == index ? 'inline-block' : 'none'; });

    
 d3.selectAll('#container'+(index+1))
      .style('display',  function(d,i) { return i == index ? 'inline-block' : 'none'; });

    
 ///////////var getBG = document.getElementById( 'container'+index );
 ///////    getBG.setAttribute("style", "background-image:url("+index+".jpg); "  );



 
 
 

 console.log(index);

 
    // activate current section
    plot.activate(index);
  });

  scroll.on('progress', function(index, progress){
    plot.update(index, progress);
  });
}

// load data and display
display();




//////
//////
