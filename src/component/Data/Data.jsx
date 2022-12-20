import React from "react";
import "./Data.css"
import { useState } from "react";


function Data() {
  const [inputList, setinputList]= useState([{debit:'', credit:''}]);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [inputList];
    list[index][name]= value;
    setinputList(list);

  }

  // function MyLoad(){
  //   const cols = document.getElementsByTagName("input");
  //   for(let index = 0; index < cols.length; index++){

  //     cols[index].addEventListener('change' , function(){
  //       var ls_nm= cols[index].name;
  //       Total(ls_nm);
  //     });
  //   }
  // }

  function Total(ls_nm) {
    var base = document.getElementsByName(ls_nm);
  
    var ls_sum = 0;
    for(let index = 0; index < base.length; index++){
      var ls_base = base[index].value;
  
      ls_sum = +ls_sum + +ls_base;
  
    }
  
    document.getElementsById(ls_nm + "_total").value = ls_sum;
    
  }
 
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, { debit:'', credit:''}]);
  }
  return (
    <div>
      <div className="container">
        <div className="">
          <div className="header">
          <h1 className="account">Accounts</h1>
          <h1 className="debit">Debit Amount</h1>
          <h1 className="debit">Credit Amount</h1>
          </div>
          { 
              inputList.map( (x,i)=>{
                return(
                  <div className="form">
                    <div>
                      <select name="account" className="accountForm">
                        <option value="">Select Account</option>
                        <option value="debit">ABC</option>
                        <option value="credit">XYZ</option>
                      </select>
                    </div>
                    <div>
                      <input type="text"  name="ls_nm" class="form-control" className="debitForm" onChange={ e=>handleinputchange(e,i)} />
                    </div>
                    <div>
                      <input type="text"  name="credit" class="form-control" className="debitForm" onChange={ e=>handleinputchange(e,i) }/>
                    </div>
                    <div>
                    {
                      inputList.length!==0 &&
                      <button className="delete" onClick={()=> handleremove(i)}><i class="fa fa-trash"></i></button>
                    }
                    </div>
                  </div>
                );
              })
            } 
          <button className="Add" onClick={ handleaddclick}>+Add Row</button>
          
        </div>
      </div>
    </div>
  );
}


export default Data;