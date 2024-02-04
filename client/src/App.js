import React, {useState,useEffect} from 'react'
import UploadFile from './components/uploadfile'
import Footer from './components/footer'
import Navbar from './components/header'
import Ads from './components/ads'
import DragAndDrop from './components/draganddrop'
//import DisplayFile from './components/displayfile';
function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [data,setData]=useState([])
 
  useEffect(()=>{
    console.log("Component rendered");
    fetch("http://localhost:5000/uploads").then(
      res=>res.json()

    ).then(
      data=>{
        setData(data)
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },[])

  return (
    
      <div className={`App ${theme}`}>
<div className='bprimary'>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
    
    <UploadFile />
    {/* <div> 
      {(typeof data.members==="undefined")?(
        <p>Loading...</p>
      ):(
        data.members.map((member,i)=>(
          <p key={i}>{member}</p>
        )
      )
      )}
    </div> 
   <DisplayFile /></> */}
<Ads theme={theme}/>
<Footer />
    </div></div>
  )
}

export default App
