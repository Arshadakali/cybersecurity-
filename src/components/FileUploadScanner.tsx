
"use client";
import React, { useState } from 'react';

export default function FileUploadScanner() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
    setResult(null);
  };

  const handleScan = () => {
    if (!file) return;
    setLoading(true);
    setResult(null);
    // Simulate scan (replace with real API call)
    setTimeout(() => {
      setResult('File is safe. (Demo result)');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="p-4 border rounded mb-6">
      <h2 className="text-xl font-bold mb-2">File Upload Scanner</h2>
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <button onClick={handleScan} className="bg-blue-600 text-white px-4 py-2 rounded" disabled={!file || loading}>
        {loading ? 'Scanning...' : 'Scan File'}
      </button>
      {result && <div className="mt-3 text-green-700">{result}</div>}
    </div>
  );
}
