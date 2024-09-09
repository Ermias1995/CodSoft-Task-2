import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";

function Home() {
  const [selectCategory, setSelectCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");

    const handleInputChange = (event) =>{
        setQuery(event.target.value);
        console.log(event.target.value);
  }

  useEffect(()=>{
    fetch("jobs.json").then(res => res.json()).then(data=>{
      setJobs(data);
    })
  },[]);

  const filteredJobs = jobs.filter((job)=> job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  
  //Radio Filters
  const handleChange = (event) => {
    setSelectCategory(event.target.value);
  }
  const handleClick = (event) => {
    setSelectCategory(event.target.value);
  }
  const filteredData = (jobs, selected, query) => {
    let filteredItems = jobs;

    if(query){
      filteredItems = filteredJobs;
    }

    if(selected){
      filteredItems = filteredItems.filter(({jobLocation, employmentType})=>(
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      ));
      console.log(filteredItems);
    }

    return filteredItems.map((data,i)=> <Card key={i} data={data}/>)
  }

  const result = filteredData(jobs, selectCategory, jobs);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>

      {/* Home page */}
      <div className="bg-gray-100 md:grid grid-cols-3 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded col-span-1">
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
        </div>
        <div className="col-span-2 bg-white p-4"><Jobs result={result}/></div>
      </div>
    </div>
  )
}
export default Home