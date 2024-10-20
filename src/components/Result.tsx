import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

import { PiCampfire } from "react-icons/pi";

interface ResultProps {
  result: {
    solution_text: string;
  };
  onNextQuestion: () => void;
  timeTaken: number;
}

const Result: React.FC<ResultProps> = ({
  result,
  onNextQuestion,
  timeTaken,
}) => {
  if (!result) return null;

  const renderMathJaxWithTags = (text: string) => {
    const segments = text.split(/(<br>|<b>.*?<\/b>)/i);
    return segments.map((segment, index) => {
      if (segment.toLowerCase().startsWith('<br>')) {
        return <br key={index} />;
      } else if (segment.toLowerCase().startsWith('<b>')) {
        return (
          <b key={index}>
            <MathJaxContext><MathJax>{segment.slice(3, -4)}</MathJax></MathJaxContext>
          </b>
        );
      } else {
        return <MathJaxContext key={index}><MathJax>{segment}</MathJax></MathJaxContext>;
      }
    });
  };

  return (
    <div className="flex flex-row gap-4 mt-8 p-6 bg-gray-100 rounded-lg">
      <div className="text-lg pt-1.5">
        <PiCampfire />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Solution</h3>
        <div className="solution-text text-base leading-relaxed mb-4">
          {renderMathJaxWithTags(result.solution_text)}
        </div>
        <button
          onClick={onNextQuestion}
          className="bg-black text-white px-8 ml-auto py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Next Question →
        </button>
      </div>
    </div>
  );
};

export default Result;
