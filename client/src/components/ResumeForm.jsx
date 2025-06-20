//import React from 'react';
import React, { useState } from 'react';
import axios from 'axios';

const ResumeForm = ({ onDataSubmit, onSuggestionsUpdate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    location: '',
    objective: '',
    education: '',
    skills: '',
    experience: '',
    projects: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    onDataSubmit(formData);
    try {
      const res = await axios.post('http://localhost:5000/api/suggestions', formData);
      onSuggestionsUpdate(res.data.suggestions);
    } catch (err) {
      console.error('Suggestion API error:', err);
      onSuggestionsUpdate('❌ Failed to give suggestions.');
    }
  };

  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">🧑‍💼 Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input" name="fullName" placeholder="Full Name" onChange={handleChange} />
        <input className="input" name="email" placeholder="Email" onChange={handleChange} />
        <input className="input" name="phone" placeholder="Phone" onChange={handleChange} />
        <input className="input" name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} />
        <input className="input" name="github" placeholder="GitHub/Portfolio URL" onChange={handleChange} />
        <input className="input" name="location" placeholder="Location (City, Country)" onChange={handleChange} />
      </div>

      <textarea className="input mt-4" name="objective" placeholder="Career Objective" onChange={handleChange} rows="3" />

      <h2 className="text-xl font-semibold mt-6">🎓 Education</h2>
      <textarea className="input" name="education" placeholder="E.g., B.Tech in AI from XYZ University (2019–2023), CGPA 8.5" onChange={handleChange} />

      <h2 className="text-xl font-semibold mt-6">🛠 Skills</h2>
      <textarea className="input" name="skills" placeholder="Python, JavaScript, React, Git, Leadership" onChange={handleChange} />

      <h2 className="text-xl font-semibold mt-6">💼 Experience</h2>
      <textarea className="input" name="experience" placeholder="Intern at ABC Corp (Jan 2023 – May 2023)\n- Developed X\n- Improved Y" onChange={handleChange} />

      <h2 className="text-xl font-semibold mt-6">🧪 Projects</h2>
      <textarea className="input" name="projects" placeholder="Smart Resume Builder\n- Built using React & Node.js" onChange={handleChange} />

      <button onClick={handleSubmit} className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Generate Preview & Suggestions
      </button>
    </div>
  );
};

export default ResumeForm;
