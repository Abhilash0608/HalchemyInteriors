import  { useEffect } from 'react';

const MetaTags = ({ title, description, canonical }) => {
  useEffect(() => {
    // Update the title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector("meta[name='description']");
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }

    // Update canonical link
    if (canonical) {
      let linkCanonical = document.querySelector("link[rel='canonical']");
      if (linkCanonical) {
        linkCanonical.setAttribute('href', canonical);
      } else {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        linkCanonical.href = canonical;
        document.head.appendChild(linkCanonical);
      }
    }
  }, [title, description, canonical]);

  return null; // No visual output
};

export default MetaTags;
