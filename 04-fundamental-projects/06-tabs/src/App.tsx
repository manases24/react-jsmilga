import { useEffect, useState } from "react";
import { JobType } from "./types";
import { JobInfo } from "./JobInfo";
import { BtnContainer } from "./BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [currentItem, setCurrentItem] = useState(0);

  async function fetchJobs() {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo {...jobs[currentItem]} />
    </section>
  );
}

export default App;
