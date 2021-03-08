import React, {useState} from "react";
import SideData from "./sideData";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import sortJsonArrayByProperty from '../lib/sorting';

function Content({allJobs}){

  // Count total number of jobs
    
    const [data, setData] =  useState(allJobs);
    let total = 0;
    data.jobs.forEach((job) => {
      total += job.items.length;
    });

    // Click event of hospital listitem
    
    const subitem = (e) => {
      const child_id = e.target.id.replace("parent_","child_");
      const child = document.getElementById(child_id);
      if(child.attributes[1].value === "block"){
        child.setAttribute('class','hidden');
      } else {
        child.setAttribute('class','block');
      }
    }

    // Click event of role listitem

    const showDetails = (e) =>{
      const child_id = e.target.id.replace("detail_parent","detail_child");
      const child = document.getElementById(child_id);
      if(child.attributes[1].value === "block"){
        child.setAttribute('class','hidden');
      } else {
        child.setAttribute('class','block');
      }
    }

    // Search event

    const wholeSearch = async e => {
      e.preventDefault();
      let searchKey = e.target.value;
      if(searchKey.length == 0){
        setData(allJobs);
      } else{
        let resultData = [];
        allJobs.jobs.map((each) => {
          let result = [], found_flag = false;
          for (let i = 0; i < each.items.length; i++) {
            const item = each.items[i];
            const getAllKeys = Object.keys(item);
            for (let j = 0; j < getAllKeys.length; j++) {
              const key = getAllKeys[j];
              if (item[key].toString().toLowerCase().includes(searchKey.toLowerCase())) {
                found_flag = true;
                result.push(item);
                break;
              }
            }
          }
          if (found_flag) {
            each.items = [...result];
            resultData.push(each);
          }
        });
        const Data={jobs:resultData};
        setData(Data);
      }
    }

    // Filter by various Sort by options

    const [role1, setRole1] = useState(0);
    const [role2, setRole2] = useState(0);
    const [role3, setRole3] = useState(0);
    const [role4, setRole4] = useState(0);
    const [role5, setRole5] = useState(0);

    const filterByButton = (e) => {
      let filterButtonName = e.target.getAttribute('name');
      let sortResult;
      switch(parseInt(filterButtonName)){
        case 1 :{
          if(role1 === 2) {
            setRole1(0); break;
          }
          setRole1(role1 + 1);
          if(role1 == 0){
            sortResult = sortJsonArrayByProperty(data.jobs, 'name');
          } else {
            sortResult = sortJsonArrayByProperty(data.jobs, 'name', -1);
          }
          const temp={jobs:sortResult};
          setData(temp);
          break;
        }
        case 2 : {
          if(role2 === 2) {
            setRole2(0); break;
          } else {
            setRole2(role2 + 1); 
            if(role2 == 0){
                sortResult = data.jobs.map((item)=>{
                  let temp = {};
                  temp = {"total_jobs_in_hospital":item["total_jobs_in_hospital"], "name": item['name'], "job_title": item['job_title']};
                  temp["items"] = sortJsonArrayByProperty(item.items, 'job_title');
                  return temp;
                });
            } else if(role2 == 1) {
              sortResult = data.jobs.map((item)=>{
                let temp = {};
                temp = {"total_jobs_in_hospital":item["total_jobs_in_hospital"], "name": item['name'], "job_title": item['job_title']};
                temp["items"] = sortJsonArrayByProperty(item.items, 'job_title', -1);
                return temp;
              });         
            }
            const temp={jobs:sortResult};
            setData(temp);
            console.log(temp);
            break;
          }
        }
        case 3 :{
          if(role3 === 2) {
            setRole3(0); break;
          } else {
            setRole3(role3 + 1); 
            if(role3 == 0){
                sortResult = data.jobs.map((item)=>{
                  let temp = {};
                  temp = {"total_jobs_in_hospital":item["total_jobs_in_hospital"], "name": item['name'], "job_title": item['job_title']};
                  temp["items"] = sortJsonArrayByProperty(item.items, 'department');
                  return temp;
                });
            } else if(role2 == 1) {
              sortResult = data.jobs.map((item)=>{
                let temp = {};
                temp = {"total_jobs_in_hospital":item["total_jobs_in_hospital"], "name": item['name'], "job_title": item['job_title']};
                temp["items"] = sortJsonArrayByProperty(item.items, 'department', -1);
                return temp;
              });         
            }
            const temp={jobs:sortResult};
            setData(temp);
            console.log(temp);
            break;
          }
        }
        case 4 : {
          if(role4 === 2) {
            setRole4(0); break;
          } else {
            setRole4(role4 + 1); 
            if(role4 == 1){
              sortResult = sortJsonArrayByProperty(data.jobs, 'name');
            } else {
              sortResult = sortJsonArrayByProperty(data.jobs, 'name', -1);
            }
            const temp={jobs:sortResult};
            setData(temp);
            break;
          }
        }
        case 5 : {
          if(role5 === 2) {
            setRole5(0); break;
          } else {
            if(role4 == 1){
              sortResult = sortJsonArrayByProperty(data.jobs, 'name');
            } else {
              sortResult = sortJsonArrayByProperty(data.jobs, 'name', -1);
            }
            const temp={jobs:sortResult};
            setData(temp);
            break;
          }
        }
      }
    }

    // Main content Rendering

    return (
        <div>
            <div className="m-5 mb-3">
                <div className="relative text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </span>
                    <input type="search" name="wholeSearch" onChange={wholeSearch} className="text-sm h-10 text-lg w-full text-black bg-white rounded-md pl-10 focus:outline-none focus:bg-white" placeholder="Search..." autoComplete="off"/>
                </div>
            </div>

            <div className="flex flex-auto rounded-md">
                <div className="hidden lg:block w-3/12 m-2 rounded-sm">
                    <SideData/> 
                </div>
                <div className="w-full lg:w-9/12 bg-white m-2 p-2 float-right">
                    <div className="flex hidden lg:block mt-4">
                        <span className="float-left w-4/12 text-lg"><span className="font-bold">{total}</span> job postings</span>
                        <div className="flex justify-end w-8/12">
                            <span className="text-gray-600 text-lg">Sort by : </span>
                            <ul className="flex">
                                <li className="ml-3 font-bold text-lg" onClick={filterByButton} name="1">Location<FaAngleDown className={role1 === 1? '' : 'hidden'}/><FaAngleUp className={role1 === 2? '' : 'hidden'}/></li>
                                <li className="ml-3 font-bold text-lg" onClick={filterByButton} name="2">Role<FaAngleUp className={role2 === 2? '' : 'hidden'}/><FaAngleDown className={role2 === 1? '' : 'hidden'}/></li>
                                <li className="ml-3 font-bold text-lg" onClick={filterByButton} name="3">Department<FaAngleDown className={role3 === 1? '' : 'hidden'}/><FaAngleUp className={role3 === 2? '' : 'hidden'}/></li>
                                <li className="ml-3 font-bold text-lg" onClick={filterByButton} name="4">Education<FaAngleDown className={role4 === 1? '' : 'hidden'}/><FaAngleUp className={role4 === 2? '' : 'hidden'}/></li>
                                <li className="ml-3 font-bold text-lg" onClick={filterByButton} name="5">Experience<FaAngleDown className={role5 === 1? '' : 'hidden'}/><FaAngleUp className={role5 === 2? '' : 'hidden'}/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="m-2">
                        <ul className="text-lg ml-3">
                          {data.jobs.map((each, key)=>{
                            return (
                              <div key={key} className="">
                                  <li className="m-4 h-10 " id={'parent_'+key} onClick={subitem}>
                                      <span className="w-10 bg-gray-500 rounded-md uppercase pt-1 pb-1 text-center float-left mr-5 text-white" id={'parent_'+key}>
                                          {each.name.slice(0,2)}
                                      </span> 
                                      <span className="m-5 mb-4 pt-1" id={'parent_'+key} >{Object.keys(each.items).length} jobs for
                                      {' '+each.name}</span>  
                                  </li>
                                <div id={ "child_"+key } className="hidden mt-5">
                                  { each.items.map((subitem, index)=>(
                                    <div key={index} className="ml-5 justify-between border-t py-4">
                                      <div id={"detail_parent"+key+"_"+index} onClick={showDetails}>
                                        <p className="font-semibold" id={"detail_parent"+key+"_"+index}>{subitem.job_title}</p>
                                        <span className="text-sm" id={"detail_parent"+key+"_"+index}>{subitem.job_type} | </span>
                                        <span className="text-sm" id={"detail_parent"+key+"_"+index}>
                                          ${subitem.salary_range[0]} - ${subitem.salary_range[1]} an
                                          hour |{" "}
                                        </span>
                                        <span className="text-sm" id={"detail_parent"+key+"_"+index}  >{subitem.city}</span>
                                      </div>
                                        <div id={"detail_child"+key+"_"+index} className="flex pt-5 hidden">
                                          <div className="mt-5">
                                            <div className="flex mb-3">
                                              <p className="font-semibold w-4/12">Department:</p>
                                              <p className="w-8/12">{subitem?.department.reduce((dept, value) => dept + ", " + value)}</p>
                                            </div>
                                            <div className="flex mb-3">
                                              <p className="font-semibold w-4/12">Hours / shifts:</p>
                                              <p className="w-8/12">
                                                {subitem?.hours[0]} hours / {subitem?.work_schedule}
                                              </p>
                                            </div>
                                            <div className="flex">
                                              <p className="font-semibold w-4/12">Summary:</p>
                                              <p className="w-8/12">{subitem?.description}</p>
                                            </div>
                                          </div>

                                          <div className="just-end" align="right">
                                            <div className="m-2 border rounded-lg border-blue-600 py-1 px-3 inline-block mr-4 cursor-pointer bg-blue-600">
                                              <p className="text-white text-sm py-1 px-1 text-center">
                                                Job details
                                              </p>
                                            </div>
                                            <div className="m-2 border rounded-lg border-blue-600 py-1 px-3 inline-block mr-4 cursor-pointer">
                                              <p className="text-blue-600 text-sm text-center py-1 px-1">Save Job</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                  ))}
                                </div>
                              </div>
                          )})}
                      </ul>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Content;