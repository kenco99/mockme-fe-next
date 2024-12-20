"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Question from "../components/Question";
import Result from "../components/Result";
import { getQuestion, submitAnswer } from "@/utils/api";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import PaymentModal from "../components/Rzp";
import { useRouter } from 'next/router';

interface QuestionData {
  id: string;
  question_text: string;
  section: string;
  options: Array<{ option: string }>;
}

interface SessionInfo {
  session_id: string;
  attempted_count: number;
  question_count: number;
  time_left: number | null;
}

interface ResultData {
  answer: string;
  solution_text: string;
}

const QuizApp: React.FC = () => {
  const [question, setQuestion] = useState<QuestionData | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [result, setResult] = useState<ResultData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sessionInfo, setSessionInfo] = useState<SessionInfo | null>(null);
  const [questionTime, setQuestionTime] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();

  const fetchQuestion = useCallback(
    async (params: { sessionId?: string; questionId?: string }) => {
      try {
        setLoading(true);
        const response = await getQuestion(params);
        
        if (response.code === 201) {
          // Session completed, redirect to summary page
          const sessionId = params.sessionId || searchParams.get("session_id");
          if (sessionId) {
            router.push(`/summary?session_id=${sessionId}`);
          } else {
            console.error("Session ID not found for redirection");
            setError("Unable to load summary. Please try again.");
          }
          return;
        }
        
        setQuestion(response.data);
        if (response.session_info) {
          setSessionInfo(response.session_info);
          setTotalTime(response.session_info.time_left);
        }
        setLoading(false);
        setSelectedOption("");
        setResult(null);
        setQuestionTime(0);
      } catch (error: any) {
        if (error.status === 403) {
          setIsPaymentModalOpen(true);
        } else {
          setError("Failed to fetch question. Please try again.");
        }
        setLoading(false);
      }
    },
    [router, searchParams]
  );

  useEffect(() => {
    const sessionId = !!searchParams ? searchParams.get("session_id") : null;
    const questionId = !!searchParams ? searchParams.get("question_id") : null;

    console.log("Session ID:", sessionId, "Question ID:", questionId);

    if (sessionId) {
      fetchQuestion({ sessionId });
    }

    if (questionId) {
      fetchQuestion({ questionId });
    }
  }, [searchParams, fetchQuestion]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (sessionInfo && !loading && !result) {
      intervalId = setInterval(() => {
        setQuestionTime((prevTime) => prevTime + 1);
        if (totalTime !== null) {
          setTotalTime((prevTime) => (!!prevTime ? prevTime : 1) - 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [sessionInfo, loading, result, totalTime]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleConfirm = async () => {
    if (!selectedOption) {
      alert("Please select an option");
      return;
    }

    try {
      setLoading(true);
      const data = await submitAnswer(selectedOption, question!.id);
      setResult(data);
      setLoading(false);
    } catch (error) {
      setError("Failed to submit answer. Please try again.");
      setLoading(false);
    }
  };

  const handleNextQuestion = () => {
    if (sessionInfo) {
      fetchQuestion({ sessionId: sessionInfo.session_id });
    } else {
      window.location.reload();
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const renderMathJaxWithTags = (text: string) => {
    const segments = text.split(/(<br>|<b>.*?<\/b>)/i);
    return segments.map((segment, index) => {
      if (segment.toLowerCase().startsWith('<br>')) {
        return <br key={index} />;
      } else if (segment.toLowerCase().startsWith('<b>')) {
        return (
          <b key={index}>
            <MathJax>{segment.slice(3, -4)}</MathJax>
          </b>
        );
      } else {
        return <MathJax key={index}>{segment}</MathJax>;
      }
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="py-10 min-h-screen bg-home-gradient">
      <div className="max-w-6xl mx-auto mb-10 flex justify-between items-center ">
        <h1 className="text-sm font-medium text-gray-400 tracking-widest">
          {question?.section.toUpperCase()} REVIEW
        </h1>
        {sessionInfo && (
          <div className="flex flex-row gap-8 items-center">
            {/* <button className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm hover:bg-gray-300 transition-colors">
              Pause session II
            </button> */}
            <span>This question: {formatTime(questionTime)}</span>
            {totalTime !== null && <span>Total: {formatTime(totalTime)}</span>}
          </div>
        )}
      </div>
      <div className="max-w-6xl mx-auto p-8 bg-white rounded-3xl shadow-bigcard">
        {sessionInfo && (
          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>
              Question {sessionInfo.attempted_count + 1}/
              {sessionInfo.question_count}
            </span>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {question && <Question question={question} />}
          <div className="flex flex-col gap-6">
            {question?.options.map((option, index) => {
              const optionLetter = String.fromCharCode(65 + index);
              const isCorrect = result && result.answer === optionLetter;
              const isSelected = selectedOption === optionLetter.toLowerCase();
              return (
                <label
                  key={index}
                  className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all
                                                   ${
                                                     isCorrect
                                                       ? "bg-green-100 border-green-400"
                                                       : ""
                                                   }
                                                   ${
                                                     isSelected &&
                                                     !isCorrect &&
                                                     result
                                                       ? "bg-red-100 border-red-400"
                                                       : ""
                                                   }
                                                   ${
                                                     isSelected && !result
                                                       ? "bg-gray-200"
                                                       : ""
                                                   }
                                                   ${
                                                     !isSelected && !result
                                                       ? "hover:bg-gray-100"
                                                       : ""
                                                   }`}
                >
                  <input
                    type="radio"
                    name="option"
                    value={optionLetter.toLowerCase()}
                    checked={isSelected}
                    onChange={() =>
                      handleOptionSelect(optionLetter.toLowerCase())
                    }
                    disabled={result !== null}
                    className="mr-4"
                  />
                  <MathJaxContext>
                    {renderMathJaxWithTags(option.option)}
                  </MathJaxContext>
                </label>
              );
            })}
            {!result && (
              <button
                className="w-full bg-black text-white py-3 mt-8 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                onClick={handleConfirm}
              >
                Submit
              </button>
            )}
          </div>
        </div>

        {result && (
          <Result
            result={result}
            onNextQuestion={handleNextQuestion}
            timeTaken={questionTime}
          />
        )}
      </div>
      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </div>
  );
};

export default QuizApp;
