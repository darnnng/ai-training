import React, { useState, useEffect } from 'react';

export const Task3=() => {
  // State to store the result from the worker
  const [d, setD] = useState<number | null>(null);
  // State to store any error from the worker
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Create a new Web Worker for the heavy calculation
    const worker = new Worker(new URL('../workers/worker.ts', import.meta.url));

    // Listen for messages from the worker (result of the calculation)
    worker.onmessage = (event) => {
      setD(event.data);
      worker.terminate(); // Clean up the worker after finishing
    };

    // Handle any errors from the worker
    worker.onerror = (error) => {
      setError('Worker error: ' + error.message);
      worker.terminate();
    };

    // Start the calculation in the worker
    worker.postMessage(null);

    // Clean up the worker if the component unmounts
    return () => {
      worker.terminate();
    };
  }, []);

  if (error) return <div>Error: {error}</div>;
  return <div>{d !== null ? d : 'Computing...'}</div>;
}

// --- PERFORMANCE NOTES ---
// This component offloads a heavy calculation (sum of 1e8 numbers) to a Web Worker.
// This prevents the main UI thread from being blocked, so the app remains responsive.
// Using a worker is essential for keeping Total Blocking Time (TBT) low and avoiding UI jank.
//
// Metrics checklist for Lighthouse re-measure:
// [ ] Total Blocking Time (TBT) should be significantly reduced from 600ms
// [ ] First Contentful Paint (FCP) should remain stable or improve from 1.2s
// [ ] Largest Contentful Paint (LCP) should remain stable or improve from 1.8s
// [ ] Time to Interactive (TTI) should improve from 2.1s
// [ ] UI remains responsive during calculation
// [ ] Result is displayed after worker finishes

// --LIGHTHOUSE ANALYTICS
// The problem is that you have a computationally intensive loop running directly on the main thread during component initialization. The for loop that iterates 100 million times (1e8) is blocking the main thread, which:
// Prevents the browser from responding to user input
// Blocks rendering and other important browser tasks
// Directly contributes to the high Total Blocking Time metric
// Total Blocking Time (TBT) measures the total amount of time when the main thread was blocked for long enough to prevent input responsiveness. Any task that takes longer than 50ms is considered a "long task" and contributes to TBT.
