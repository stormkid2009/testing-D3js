/*
it s complicated to explain but u can scale domain[input information] and range 
[output information ] then  chain them together as we will see
*/
const scale = d3.scaleLinear();
        scale.domain([100,200]);
        scale.range([0,10]);
const output= scale(130);//output will be 3 >>
//100>>0  , 110>>1 ,120>>2 ...........etc
d3.select('body')        
    .append('h1')
    .text(output)

//we can get max and min of domain:
const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
const output2 = d3.max(positionData,(d)=>d[2]); 
    d3.select("body")
      .append("h2")
      .text(output2)