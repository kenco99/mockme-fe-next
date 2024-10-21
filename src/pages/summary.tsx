"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getSessionSummary } from "@/utils/api";
import moment from "moment";
import Link from 'next/link';


interface SummaryData {
  duration: number | null;
  createdAt: string;
  topics: string[];
  correct_count: string;
  total_answered: string;
  correct_percent: string;
}

const Summary: React.FC = () => {
  const [summary, setSummary] = useState<SummaryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { session_id } = router.query;
    if (session_id) {
      fetchSummary(session_id as string);
    }
  }, [router.query]);

  const fetchSummary = async (sessionId: string) => {
    try {
      setLoading(true);
      const response = await getSessionSummary(sessionId);
      if (response && response.data) {
        setSummary(response.data);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error fetching summary:", error);
      setError("Failed to load summary. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const formatDuration = (duration: number | null) => {
    if (duration === null || duration === undefined) return "Untimed";
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    if (hours === 0) return `${minutes}mins`;
    return `${hours}h ${minutes}mins`;
  };

  const handleRestart = () => {
    // Implement restart functionality
    console.log("Restart clicked");
  };

  const handleHome = () => {
    router.push("/dashboard");
  };

  if (loading) return <div className="text-center mt-8 text-gray-600">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-600">{error}</div>;
  if (!summary) return <div className="text-center mt-8 text-gray-600">No summary data available</div>;

  return (
    <div className="flex flex-col min-h-screen bg-home-gradient">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-xl font-bold text-gray-800">Practice GMAT</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/dashboard">
                <span className="bg-[#1E40AF] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Dashboard
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl flex flex-col gap-10 shadow-bigcard px-10 py-12 w-full max-w-xl">
          <div className="text-center">
            <h2 className="text-sm text-gray-500 mb-2">PRACTICE SESSION #{router.query.session_id}</h2>
            <h1 className="text-xl font-bold mb-2">{summary.topics.join(" / ")}</h1>
            <p className="text-sm text-gray-500">{moment(summary.createdAt).format("DD/MM/YYYY")}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {summary.duration !== null && (
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Duration</p>
                <p className="font-bold">{formatDuration(summary.duration)}</p>
              </div>
            )}
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Questions</p>
              <p className="font-bold">{summary.total_answered}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Correct answers</p>
              <p className="font-bold">{summary.correct_percent}%</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleHome}
              className="flex-1 bg-black text-white font-medium py-3 px-4 rounded-xl text-center hover:bg-gray-800 transition-colors"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
