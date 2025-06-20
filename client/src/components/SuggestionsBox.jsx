import React from 'react';

const SuggestionsBox = ({ suggestions }) => {
  return (
    <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
      <h3 className="font-bold text-yellow-800 mb-2">📌 Suggestions</h3>
      <pre className="whitespace-pre-wrap text-sm text-gray-700">{suggestions}</pre>
    </div>
  );
};

export default SuggestionsBox;
