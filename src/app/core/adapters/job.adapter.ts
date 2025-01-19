import { Job, JobApi } from '../models/job';

export const JobTransform = (jobs_api: JobApi[]) => {
  const jobs: Job[] = jobs_api.map((job_api) => {
    return {
      id_elevator: job_api.ascensorId,
      job: job_api.trabajo,
      date: job_api.fecha,
    };
  });
  return jobs;
};
