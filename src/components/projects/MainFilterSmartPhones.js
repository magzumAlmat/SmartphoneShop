import React, { useState } from 'react'
import Select from 'react-select'


const options = [
    { value: 'smartphones',  label: 'СМАРТФОНЫ'},
    { value: 'pads',  label: 'ПЛАНШЕТЫ'},
    { value: 'notebooks',   label: 'НОУТБУКИ'},
    { value: 'smart-watches',   label: 'СМАРТ-ЧАСЫ'},
    { value: 'headphones',   label: 'НАУШНИКИ'},
    { value: 'accessories', label: 'АКСЕССУАРЫ'},
    { value: 'technique',   label: 'ТЕХНИКА'},
  ]


  
  export default function MainFilter() {
    const [selectedOption, setSelectedOption] = useState(null);
  
    return (
      <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
      
    
    );
    
  
  }