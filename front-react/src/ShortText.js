import React, { useState } from 'react';

const soMuchText =
  'React context and state hook are two new concept of the React API. This post show you how to mesh the two concepts together, so you can consume parent context in functional components.Context API uses a provider/consumer pattern, which allow top level component to pass data to children. State hook let you augment functional (stateless) components and make them stateful. Here is a quick example of state hook from React docs. We will use this as the basis for context integration.';


export default function ShowMoreFunction() {
  const shortText = soMuchText.slice(0, 50);
  const [expanded, setExpanded] = useState(false);


  return (
    <div>
      {expanded ? soMuchText : shortText}
      <button
        type="button"
        onClick={() =>
          setExpanded((!expanded))}
      >
        {expanded ? 'Less' : 'More'}
      </button>
    </div>
  );  
}
