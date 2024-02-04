import React, {useState} from 'react'

function DisplayFile() {
    const [asciiOutput, setAsciiOutput] = useState('');
  
    const fetchAsciiOutput = async () => {
      try {
        const response = await fetch('http://localhost:5000/generate', {
          method: 'POST',
          body: new FormData(),
        });
        const data = await response.json();
        setAsciiOutput(data.ascii_output);
      } catch (error) {
        console.error('Error fetching ASCII output:', error);
      }
    };
  
    return (<></>
    //   <div>
    //   ////  <button onClick={fetchAsciiOutput}>Get ASCII Output</button>
    //     <pre>{asciiOutput}</pre>
    //   </div>
    );
  }
export default DisplayFile;  