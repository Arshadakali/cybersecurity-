
"use client";
import React, { useState } from 'react';

export default function PhishingDetector() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    setLoading(true);
    setResult(null);
    // Simulate check (replace with real API call)
    setTimeout(() => {
      setResult('URL is safe. (Demo result)');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="p-4 border rounded mb-6">
      <h2 className="text-xl font-bold mb-2">Phishing URL Detector</h2>
      <input
        type="text"
        placeholder="Enter URL to check"
        value={url}
        onChange={e => setUrl(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={handleCheck} className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
        {loading ? 'Checking...' : 'Check'}
      </button>
      {result && <div className="mt-3 text-green-700">{result}</div>}
    </div>
  );
}
