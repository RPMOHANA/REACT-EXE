1.
mport React from 'react';

const App=()=>{
  return(
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};
export default App;

2.
import React from 'react';

const Message =()=>
{
    return(
      <>
        <h1 style={{color:'green'}}>Inline Style in JSX Example</h1>
        <div style={{background:'lightblue',color:'darkblue',padding:'10px',border:'1px solid blue',borderRadius:'5px'}}>
          <p style={{color:'darkblue',fontSize:'16px'}}>This is a paragraph with inline styles applied.</p>
        </div>
      </>
    );
};
export default Message;
