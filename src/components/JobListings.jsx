import React from 'react';
import jobsData from '../jobs.json'; // Rename to jobsData to avoid confusion
import JobListing from './JobListing';

const JobListings = ({ isHome = false }) => {
    // Access the jobs array within jobsData
    const jobs = jobsData.jobs; 

    // Filter the jobs based on isHome
    const filteredJobs = isHome ? jobs.slice(0, 3) : jobs;

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Browse Jobs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredJobs.map((job) => (
                        <JobListing key={job.id} job={job} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobListings;
