"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import moment from "moment";
import { getSessions } from "@/utils/api";
import Link from 'next/link';
import { GoogleOAuthProvider } from "@react-oauth/google";

interface Session {
    session_id: number;
    sections?: string[];
    topics?: string[];
    createdAt: string;
    duration: number | null;
    attempted_count: number;
    question_count: number;
    correct_count: number;
}

const Dashboard: React.FC = () => {
    const [sessions, setSessions] = useState<Session[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        fetchSessions();
    }, []);

    useEffect(() => {
        if (!loading && sessions.length === 0) {
            router.push("/create-session");
        }
    }, [loading, sessions, router]);

    const fetchSessions = async () => {
        try {
            setLoading(true);
            const response = await getSessions();
            if (response && response.data && Array.isArray(response.data)) {
                setSessions(response.data);
            } else {
                throw new Error("Invalid response format");
            }
        } catch (error) {
            console.error("Error fetching sessions:", error);
            setError("Failed to load sessions. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleStartNewSession = () => {
        router.push("/create-session");
    };

    const handleResumeSession = (sessionId: number) => {
        router.push(`/quiz?session_id=${sessionId}`);
    };

    const formatDuration = (duration: number | null) => {
        if (duration === null || duration === undefined) return "Untimed";
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        if (hours === 0) return `${minutes}mins`;
        return `${hours}h ${minutes}mins`;
    };

    const calculatePercentCorrect = (correct: number, attempted: number) => {
        if (!attempted || attempted === 0) return "Unlimited";
        return `${((correct / attempted) * 100).toFixed(2)}%`;
    };

    if (loading)
        return <div className="text-center mt-8 text-gray-600">Loading...</div>;
    if (error)
        return <div className="text-center mt-8 text-red-600">{error}</div>;

    return (
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-6 bg-home-gradient rounded-b-[24px] h-[90%] w-[95%] z-0"></div>
                    <div className="bg-white mx-auto rounded-xl max-w-5xl shadow-bigcard relative z-10">
                        <div className="w-full mx-auto px-8 py-4 flex justify-between items-center">
                            <Link href="/">
                                <h1 className="text-lg font-bold cursor-pointer">Practice GMAT</h1>
                            </Link>
                            <div className="flex items-center space-x-4">
                                {/* You can add additional navigation items here if needed */}
                            </div>
                        </div>
                    </div>
                    
                    {/* Main Content */}
                    <main className="max-w-5xl mx-auto relative z-10 flex-grow">
                        <div className="flex justify-center min-h-screen  p-8">
                            <div className="bg-white rounded-3xl flex flex-col gap-10 shadow-bigcard px-10 py-12 w-full max-w-3xl">
                                <h1 className="text-3xl font-bold mb-2">Sessions</h1>

                                <button
                                    onClick={handleStartNewSession}
                                    className="w-full bg-blue-100 text-black font-medium py-6 px-8 rounded-xl text-left flex justify-between items-center mb-6 hover:bg-blue-200 transition-colors"
                                >
                                    Start a new session
                                    <span className="text-xl">→</span>
                                </button>

                                <div>
                                    <h2 className="text-sm tracking-widest font-medium mb-8 text-gray-400">
                                        PREVIOUS SESSIONS
                                    </h2>
                                    <div className="flex flex-col gap-4">
                                        {sessions.map((session) => (
                                            <div
                                                key={session.session_id}
                                                className="border border-gray-100 rounded-xl p-4 mb-4"
                                            >
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-1">
                                                            Practice session #{session.session_id}
                                                        </h3>
                                                        <p className="text-sm italic text-gray-400">
                                                            {session.sections && session.sections.join(" / ")}
                                                            {session.sections && session.topics && " / "}
                                                            {session.topics && session.topics.join(" / ")}
                                                        </p>
                                                    </div>
                                                    <span className="text-sm text-gray-400">
                                                        {moment(session.createdAt).format("DD/MM/YYYY")}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex gap-8 flex-wrap">
                                                        <div>
                                                            <span className="text-sm font-medium text-gray-800 mr-1">
                                                                Duration:
                                                            </span>
                                                            <span className="text-sm text-gray-400">
                                                                {formatDuration(session.duration)}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm font-medium text-gray-800 mr-1">
                                                                Questions:
                                                            </span>
                                                            <span className="text-sm text-gray-400">
                                                                {session.attempted_count || 0}/
                                                                {session.question_count || 0}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm font-medium text-gray-800 mr-1">
                                                                % Correct:
                                                            </span>
                                                            <span className="text-sm text-gray-400">
                                                                {calculatePercentCorrect(
                                                                    session.correct_count,
                                                                    session.attempted_count
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {(session.attempted_count === 0 ||
                                                        session.attempted_count !== session.question_count) && (
                                                        <button
                                                            onClick={() => handleResumeSession(session.session_id)}
                                                            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                                                        >
                                                            Resume
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                
                {/* You can add the footer here if needed */}
            </div>
        </GoogleOAuthProvider>
    );
};

export default Dashboard;
