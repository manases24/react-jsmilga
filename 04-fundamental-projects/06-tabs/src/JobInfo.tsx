import { Duties } from "./Duties";
import { JobType } from "./types";

export const JobInfo = ({ title, dates, duties, company }: JobType) => {
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
