import React, { useEffect } from 'react';

const GitHubDiscussions = ({ repo, issueTerm = 'pathname', label = 'discussion', theme = 'github-light' }) => {
  useEffect(() => {
    // Cleanup existing script to reconfigure or reinitialize when props change
    const existingScript = document.getElementById('github-discussion-script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'github-discussion-script'; // Unique ID for the script tag
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', repo);
    script.setAttribute('issue-term', issueTerm);
    script.setAttribute('label', label);
    script.setAttribute('theme', theme);
    script.crossOrigin = 'anonymous';

    const anchor = document.getElementById('github-discussions');
    if (anchor) {
      anchor.innerHTML = ''; // Clear previous content
      anchor.appendChild(script);
    }

    // Cleanup function to remove script on component unmount
    return () => {
      script.remove();
    };
  }, [repo, issueTerm, label, theme]);  // Re-run the effect if these props change

  return <div id="github-discussions"></div>;
};

export default GitHubDiscussions;
