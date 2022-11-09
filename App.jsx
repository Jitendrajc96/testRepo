// import React from 'react';
// import Heading from './Heading';
// import Paragraph from './Paragraph';
// import List from './List';
// function App(){
//     return (
//         <>
//         <Heading />
//         <Paragraph />
//         <List />
//         </>
//     )
// }
// export default App;


import React from 'react';
function App(){
    let time = new Date(2020, 5, 5, 20).getHours();
    let greeting = '';
    let cssStyle= { };
    if(time>=1 && time<12){
        greeting = 'Good Morning';
        cssStyle.color='green'
      }else if(time>=12 && time<19){
        greeting = 'Good Afternoon';
        cssStyle.color='red';
      }else{
        greeting = 'Good Night';
        cssStyle.color='black';
      }
      return (
        <>
        <div>
        <h1>Hello Jitendra, <span style={cssStyle}> {greeting} </span> </h1>
        </div>
        </>
      );
}
export default App;