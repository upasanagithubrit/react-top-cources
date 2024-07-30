import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { filterData, url } from "./data";
import "./App.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./component/Spinner";

function App() {
  const [courses, setCourses] = useState([]);           //cources ka data 
  const [loading, setLoading] = useState(true);               // loading icon
  const [category,setCategory]=useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(url);

      console.log("Fetch response:", res);

      let output = await res.json();
      //console.log("Parsed JSON response:", output);
      setCourses(output.data);
    } catch (error) {
      //console.error("Fetch error:", error);
      toast.error("network me dikkat hai");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter 
        filterData={filterData}
        category={category}
        setCategory={setCategory} />
      </div>
      <div className="cardssection">{loading ? <Spinner /> : <Cards category={category} courses={courses} />}</div>
    </div>
  );
}

export default App;
