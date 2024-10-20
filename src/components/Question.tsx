import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

interface QuestionProps {
  question: {
    question_text: string;
  };
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  if (!question) return null;

  const renderMathJaxWithBoldAndBreaks = (text: string) => {
    // First, split by <br> tags
    const segments = text.split(/(<br>)/i);
    
    return segments.map((segment, segmentIndex) => {
      if (segment.toLowerCase() === '<br>') {
        return <br key={`br-${segmentIndex}`} />;
      }

      // Then handle bolding within each segment
      const parts = segment.split(/(<b>.*?<\/b>)/);
      const renderedParts = parts.map((part, partIndex) => {
        if (part.startsWith('<b>') && part.endsWith('</b>')) {
          return <strong key={`bold-${segmentIndex}-${partIndex}`}>{part.slice(3, -4)}</strong>;
        }
        return (
          <MathJaxContext key={`math-${segmentIndex}-${partIndex}`}>
            <MathJax inline>{part}</MathJax>
          </MathJaxContext>
        );
      });

      return <React.Fragment key={`segment-${segmentIndex}`}>{renderedParts}</React.Fragment>;
    });
  };

  return (
    <div className="leading-relaxed">
      {renderMathJaxWithBoldAndBreaks(question.question_text)}
    </div>
  );
};

export default Question;
