
import React,{useState} from 'react';
import './App.css';
import Grid from './components/Grid'
import  initialData from "./data.json";
import Form from './components/Form';



function App() {

  const [selectedGender,setSelectedGender]=useState([]);
  const  [filterText,setFilterText]=useState("");

  const [data,setData]=useState(initialData)

  const handleFilterChange=(value)=>{
    setFilterText(value)
  }

  const genderChangeAdd=(value)=>{
  setSelectedGender([...selectedGender,value])

  }
  const genderChangeRemove=(value)=>{
    setSelectedGender(selectedGender.filter(item=>item!==value))
  }

  const genderChangeHandler=(isSelected,val)=>{
    if(isSelected)
      genderChangeAdd(val)
    else
      genderChangeRemove(val)
  }
  return (
    <div >
     <h2>Candidates</h2>
     <div className='dataUpdaters'>
<div>
      <input onClick={(e)=>{
        const isSelected=e.target.checked;
        genderChangeHandler(isSelected,"Male")
      }}  type={"checkbox"}/>Male
      </div>
      <div>

      <input  onClick={(e)=>{
        const isSelected=e.target.checked;
        genderChangeHandler(isSelected,"Female")
      }}type="checkbox"/>Female
      </div>
      <div>

      <input onChange={(e=>handleFilterChange(e.target.value))} value={filterText} type="text" placeholder='Whom are you looking for ?'/>
      </div>
      
     </div>
     <div>
        <Grid data={data} filterText={filterText} selectedGender={selectedGender}/>
      </div>
      <div>
      <Form data={data} setData={setData}/>
      </div>
    </div> 
  );
}

export default App;
