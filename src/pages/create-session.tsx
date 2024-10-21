"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { getSections, getTopics, createSession } from "@/utils/api";

interface Section {
    section_id: number;
    title: string;
    count: number;
}

interface Topic {
    topic_id: number;
    title: string;
    count: number;
}

const CreateSession: React.FC = () => {
    const [sections, setSections] = useState<Section[]>([]);
    const [topics, setTopics] = useState<Topic[]>([]);
    const [selectedSections, setSelectedSections] = useState<Section[]>([]);
    const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
    const [questionOption, setQuestionOption] = useState<
        "all" | "incorrect" | "manual"
    >("all");
    const [manualQuestionCount, setManualQuestionCount] = useState<number>(1);
    const [durationOption, setDurationOption] = useState<"unlimited" | "manual">(
        "unlimited"
    );
    const [hours, setHours] = useState<number>(1);
    const [minutes, setMinutes] = useState<number>(0);
    const [sectionSearchTerm, setSectionSearchTerm] = useState<string>("");
    const [topicSearchTerm, setTopicSearchTerm] = useState<string>("");
    const [showSectionDropdown, setShowSectionDropdown] =
        useState<boolean>(false);
    const [showTopicDropdown, setShowTopicDropdown] = useState<boolean>(false);
    const router = useRouter();
    const sectionRef = useRef<HTMLDivElement>(null);
    const topicRef = useRef<HTMLDivElement>(null);
    const [sectionError, setSectionError] = useState<string>("");
    const [topicError, setTopicError] = useState<string>("");

    useEffect(() => {
        fetchSections();
        fetchTopics();

        const handleClickOutside = (event: MouseEvent) => {
            if (
                sectionRef.current &&
                !sectionRef.current.contains(event.target as Node)
            ) {
                setShowSectionDropdown(false);
            }
            if (
                topicRef.current &&
                !topicRef.current.contains(event.target as Node)
            ) {
                setShowTopicDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const fetchSections = async (search = "") => {
        try {
            const data = await getSections(search);
            setSections(data);
        } catch (error) {
            console.error("Error fetching sections:", error);
        }
    };

    const fetchTopics = async (search = "") => {
        try {
            const data = await getTopics(search);
            setTopics(data);
        } catch (error) {
            console.error("Error fetching topics:", error);
        }
    };

    const handleSectionSelect = (section: Section) => {
        const isSelected = selectedSections.some(
            (s) => s.section_id === section.section_id
        );
        if (isSelected) {
            setSelectedSections(
                selectedSections.filter((s) => s.section_id !== section.section_id)
            );
        } else {
            setSelectedSections([...selectedSections, section]);
        }
    };

    const handleTopicSelect = (topic: Topic) => {
        const isSelected = selectedTopics.some(
            (t) => t.topic_id === topic.topic_id
        );
        if (isSelected) {
            setSelectedTopics(
                selectedTopics.filter((t) => t.topic_id !== topic.topic_id)
            );
        } else {
            setSelectedTopics([...selectedTopics, topic]);
        }
        setTopicError(""); // Clear the error when a topic is selected
    };

    const handleStart = async () => {
        let hasError = false;

        if (selectedSections.length === 0) {
            setSectionError("Please select at least one section");
            hasError = true;
        } else {
            setSectionError("");
        }

        // if (selectedTopics.length === 0) {
        //     setTopicError("Please select at least one topic");
        //     hasError = true;
        // } else {
        //     setTopicError("");
        // }

        if (hasError) return;

        try {
            const sessionData = {
                topic_ids: null, //selectedTopics.map((topic) => topic.topic_id),
                section_ids: selectedSections.map((section) => section.section_id),
                number_of_questions:
                    questionOption === "manual" ? manualQuestionCount : null,
                duration_seconds:
                    durationOption === "manual" ? hours * 3600 + minutes * 60 : null,
            };

            const response = await createSession(sessionData);
            router.push(`/quiz?session_id=${response.session_id}`);
        } catch (error) {
            console.error("Error creating session:", error);
        }
    };

    return (
        <div className="min-h-screen bg-home-gradient py-6">
            <div className="flex flex-col gap-8 max-w-3xl mx-auto px-10 py-12 bg-white shadow-bigcard rounded-3xl">
                <h1 className="text-3xl font-bold mb-2">Configure Your Practice</h1>
                
                {/* Section Selector */}
                <div ref={sectionRef} className="relative">
                    <label className="block mb-2 font-semibold">Section <span className="text-red-500">*</span></label>
                    <div 
                        className={`w-full p-3 border ${sectionError ? 'border-red-500' : 'border-gray-300'} rounded-md cursor-pointer flex justify-between items-center bg-white`}
                        onClick={() => setShowSectionDropdown(!showSectionDropdown)}
                    >
                        <span className={selectedSections.length === 0 ? "text-gray-400" : "text-black"}>
                            {selectedSections.length > 0
                                ? selectedSections.map((s) => s.title).join(", ")
                                : "Select sections"}
                        </span>
                        <svg className={`w-5 h-5 text-gray-400 transition-transform ${showSectionDropdown ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    {sectionError && <p className="text-red-500 text-sm mt-1">{sectionError}</p>}
                    {showSectionDropdown && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                            {sections.map((section) => (
                                <div
                                    key={section.section_id}
                                    className={`p-2 cursor-pointer hover:bg-gray-100 flex items-center ${
                                        selectedSections.some((s) => s.section_id === section.section_id)
                                            ? "bg-blue-100"
                                            : ""
                                    }`}
                                    onClick={() => handleSectionSelect(section)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedSections.some((s) => s.section_id === section.section_id)}
                                        onChange={() => {}}
                                        className="mr-2"
                                    />
                                    <span>{section.title}</span>
                                    <span className="ml-auto text-gray-400">({section.count})</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Topic Selector */}
                {/* <div ref={topicRef} className="relative">
                    <label className="block mb-2 font-semibold">Topic <span className="text-red-500">*</span></label>
                    <div 
                        className={`w-full p-3 border ${topicError ? 'border-red-500' : 'border-gray-300'} rounded-md cursor-pointer flex justify-between items-center bg-white`}
                        onClick={() => setShowTopicDropdown(!showTopicDropdown)}
                    >
                        <span className={selectedTopics.length === 0 ? "text-gray-400" : "text-black"}>
                            {selectedTopics.length > 0
                                ? selectedTopics.map((t) => t.title).join(", ")
                                : "Select topics"}
                        </span>
                        <svg className={`w-5 h-5 text-gray-400 transition-transform ${showTopicDropdown ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    {topicError && <p className="text-red-500 text-sm mt-1">{topicError}</p>}
                    {showTopicDropdown && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                            {topics.map((topic) => (
                                <div
                                    key={topic.topic_id}
                                    className={`p-2 cursor-pointer hover:bg-gray-100 flex items-center ${
                                        selectedTopics.some((t) => t.topic_id === topic.topic_id)
                                            ? "bg-blue-100"
                                            : ""
                                    }`}
                                    onClick={() => handleTopicSelect(topic)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedTopics.some((t) => t.topic_id === topic.topic_id)}
                                        onChange={() => {}}
                                        className="mr-2"
                                    />
                                    <span>{topic.title}</span>
                                    <span className="ml-auto text-gray-400">({topic.count})</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div> */}

                <div>
                    <label className="block mb-2 font-semibold">
                        Number of questions
                    </label>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="all"
                                checked={questionOption === "all"}
                                onChange={(e) =>
                                    setQuestionOption(
                                        e.target.value as "all" | "incorrect" | "manual"
                                    )
                                }
                                className="mr-2"
                            />
                            All Questions
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="incorrect"
                                checked={questionOption === "incorrect"}
                                onChange={(e) =>
                                    setQuestionOption(
                                        e.target.value as "all" | "incorrect" | "manual"
                                    )
                                }
                                className="mr-2"
                            />
                            Questions answered incorrectly
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="manual"
                                checked={questionOption === "manual"}
                                onChange={(e) =>
                                    setQuestionOption(
                                        e.target.value as "all" | "incorrect" | "manual"
                                    )
                                }
                                className="mr-2"
                            />
                            Choose manually
                        </label>
                    </div>
                    {questionOption === "manual" && (
                        <input
                            type="number"
                            min={1}
                            value={manualQuestionCount}
                            onChange={(e) => setManualQuestionCount(parseInt(e.target.value))}
                            className="mt-2 p-2 w-20 border border-gray-300 rounded-md"
                        />
                    )}
                </div>
                <div>
                    <label className="block mb-2 font-semibold">Duration</label>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="unlimited"
                                checked={durationOption === "unlimited"}
                                onChange={(e) =>
                                    setDurationOption(e.target.value as "unlimited" | "manual")
                                }
                                className="mr-2"
                            />
                            Unlimited
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="manual"
                                checked={durationOption === "manual"}
                                onChange={(e) =>
                                    setDurationOption(e.target.value as "unlimited" | "manual")
                                }
                                className="mr-2"
                            />
                            Set manually
                        </label>
                    </div>
                    {durationOption === "manual" && (
                        <div className="flex items-center mt-2 space-x-2">
                            <input
                                type="number"
                                min={0}
                                value={hours}
                                onChange={(e) => setHours(parseInt(e.target.value))}
                                className="p-2 w-20 border border-gray-300 rounded-md"
                            />
                            <span>Hours</span>
                            <input
                                type="number"
                                min={0}
                                max={59}
                                value={minutes}
                                onChange={(e) => setMinutes(parseInt(e.target.value))}
                                className="p-2 w-20 border border-gray-300 rounded-md"
                            />
                            <span>Mins</span>
                        </div>
                    )}
                </div>
                <button
                    onClick={handleStart}
                    className="w-full mt-4 bg-black text-white p-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                >
                    Start
                </button>
            </div>
        </div>
    );
};

export default CreateSession;
