import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader'
const queryClient = new QueryClient()

async function startApp() {
  // Record all sessions on localhost, staging stacks and preview URLs
  
    // Start the Meticulous recorder before you initialise your app.
    // Note: all errors are caught and logged, so no need to surround with try/catch
    await tryLoadAndStartRecorder({
      projectId: 'VtmwqwwjcneICsCY0NqdGDlHV0XzU6JTzvq0DMyz',
      isProduction: false,
    });
  

  // // Initalise app after the Meticulous recorder is ready, e.g.
  // ReactDOM.render(component, document.getElementById('root'));
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <div className='App'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </React.StrictMode>
  );
  
}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
startApp();


