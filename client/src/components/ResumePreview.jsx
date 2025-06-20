import React from 'react';

const ResumePreview = ({ data }) => {
  if (!data) return <div className="text-gray-600 italic">No resume data to preview yet.</div>;

  return (
    <div className="bg-white p-6 rounded shadow mb-4 print:bg-white">
      <h2 className="text-2xl font-bold">{data.fullName}</h2>
      <p className="text-sm text-gray-600">{data.email} | {data.phone} | {data.location}</p>
      <p className="text-sm text-blue-600">{data.linkedin}</p>
      <p className="text-sm text-blue-600">{data.github}</p>

      <section className="mt-4">
        <h3 className="font-semibold text-gray-800">Career Objective</h3>
        <p>{data.objective}</p>
      </section>

      <section className="mt-4">
        <h3 className="font-semibold text-gray-800">Education</h3>
        <p>{data.education}</p>
      </section>

      <section className="mt-4">
        <h3 className="font-semibold text-gray-800">Skills</h3>
        <p>{data.skills}</p>
      </section>

      <section className="mt-4">
        <h3 className="font-semibold text-gray-800">Experience</h3>
        <p>{data.experience}</p>
      </section>

      <section className="mt-4">
        <h3 className="font-semibold text-gray-800">Projects</h3>
        <p>{data.projects}</p>
      </section>
    </div>
  );
};

export default ResumePreview;
