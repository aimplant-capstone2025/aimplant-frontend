import React, { useState } from 'react';
import { ImplantResult } from './types';
import Header from '@/components/Header';
import PatientForm from '@/components/PatientForm';
import ResultsPanel from '@/components/ResultsPanel';

function App() {
  // State for results
  const [showResults, setShowResults] = useState<boolean>(false);
  const [totalImplants, setTotalImplants] = useState<number>(0);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [implantResults, setImplantResults] = useState<ImplantResult[]>([]);

  // Handle results from form submission
  const handleResultsReady = (results: {
    totalImplants: number;
    implantResults: ImplantResult[];
    processedImageUrl: string | null;
  }) => {
    setTotalImplants(results.totalImplants);
    setImplantResults(results.implantResults);
    setProcessedImageUrl(results.processedImageUrl);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className={`bg-white rounded-lg shadow-md p-6 ${showResults ? 'lg:col-span-1' : 'lg:col-span-2'}`}>
            <PatientForm onResultsReady={handleResultsReady} />
          </div>
          
          {/* Results Section */}
          {showResults && (
            <ResultsPanel
              totalImplants={totalImplants}
              processedImageUrl={processedImageUrl}
              implantResults={implantResults}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;