import React from 'react'; // ✅ This is required
import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

const App = () => {
  const [resumeData, setResumeData] = useState(null);
  const [suggestions, setSuggestions] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Smart Resume Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ResumeForm
          onDataSubmit={setResumeData}
          onSuggestionsUpdate={setSuggestions}
        />
        {resumeData && (
          <ResumePreview
            data={resumeData}
            suggestions={suggestions}
          />
        )}
      </div>
    </div>
  );
};

export default App;
