/*
A scatter plot is another type of visualization. 
It usually uses circles to map data points, which have two values each. 
These values tie to the x and y axes, 
and are used to position the circle in the visualization.

*/



const dataset = [
    [ 34,    78 ],
    [ 109,   280 ],
    [ 310,   120 ],
    [ 79,    411 ],
    [ 420,   220 ],
    [ 233,   145 ],
    [ 333,   96 ],
    [ 222,   333 ],
    [ 78,    320 ],
    [ 21,    123 ]
  ];


const w = 500;
const h = 500;

const svg = d3.select('body')
            .append('svg')
            .attr('width',w)
            .attr('height',h)

        svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            //circle has 3 attributes :cx  cy and r for radius
            .attr('cx',(d,i) => d[0])
            .attr('cy',(d,i) => h - d[1]) //substracted from height to let
            //the circle not inverted from the top of svg 
            //base of svg from the top not the bottom
            .attr('r',5)
        //add label to our circles using text element
        svg.selectAll('text')
            .data(dataset)
            .enter()
            .append('text')
            .attr('x',(d,i)=>d[0]+5)
            .attr('y',(d,i)=> h-d[1])
            .text((d)=> `${d[0]}, ${d[1]}`)


            
