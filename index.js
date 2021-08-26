//select method >>> to select first html element or return empty
//notice we can use class name or id too
//append method >>> to append element to the DOM
//text method >>> to add inner text or html to an element
//style method >>> to add style to the selected element
//attr method >>> to add attribute to the selected element
// d3.select('body')
//     .append('p')
//     .text('first paragraph is here')
//     .style("color","blue")
//     .attr("class","first-paragraph")

// d3.select('.first-paragraph')
//     .style("background-color","gray")

//selectAll method >>> to select all kinds of selected element
// d3.select('body').append('div').text("new div is here")
// d3.select('body').append('div').text("new div is here")
// d3.select('body').append('div').text("new div is here")
// d3.selectAll('div').style("color","red")

//const dataset=[1,2,3,4,5]


//using dataset with our node elements
// d3.select('body').selectAll('p')
//     .data(dataset)
//     .enter()
//     .append('p')
//     //.text('awesome text with data set') //we can use callback function instead of string
//     .text((d)=>`awesome text num ${d}`)


//simple way to display charts using data set:
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// d3.select('body').selectAll('div')
//     .data(dataset) //other methods do not need loop cuz data iterate over each element
//     for each method.
//     .enter()
//     .append('div')
//     .attr('class','bar')
//     .style('margin','2px')
//     .style('height',(d)=>`${d*5}px`)

//display charts using SVG:
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const coding = ["C","PY","C#","R","JV","CP","JS","PH","VB"]
const w = 500;
const h = 100;
const svg = d3.select('body')
    .append('svg')
    .attr('width',w)
    .attr('height',h)
svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr("class","bar")
    .attr("x",(d,i)=> i*30) //moving towards right side x direction
    .attr("y",(d,i)=>h-3*d)
    .attr("width", 25)
    .attr("height", (d,i)=>d*3)
    //.attr("fill","red") //choose the color attribute  for svg.
    //adding tool tip for charts columns using SVG title element
    .append("title")
    .text((d) => d)

//we will use the text attr>>> for label the charts
svg.selectAll('text')
    .data(dataset)
    .enter()
    .append("text")
    .attr("x",(d,i)=> i*30)
    .attr("y",(d,i)=>h-3*d+3)
    .text((d)=>d)
    .attr("fill","navy")
