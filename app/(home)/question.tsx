
"use client";

import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "How our Team Serve You Well",
    reponse:
      "Order beautiful premium quality live plants online for your home garden from Ugaoo and get it delivered safely to your doorstep",
  },
  {
    id: 2,
    question: "Fast and Accurate Plant Delivery",
    reponse:
      "We ensure your plants arrive at your doorstep within 48 hours, carefully packaged to survive the journey in perfect condition — roots intact, leaves pristine.",
  },
  {
    id: 3,
    question: "Plant Freshness Comes First",
    reponse:
      "Every plant is harvested and dispatched the same day your order is confirmed, so what reaches you is as fresh as it was in our nursery — never sitting in a warehouse.",
  },
];

function QuestionItem({
  question,
  isOpen,
  onToggle,
}: {
  question: { id: number; question: string; reponse: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-semibold text-back">{question.question}</h5>
        <button className="text-back text-xl" onClick={onToggle}>
          {isOpen ? "−" : "+"}
        </button>
      </div>
      <p className={`text-back mt-3 ${isOpen ? "block" : "hidden"}`}>
        {question.reponse}
      </p>
      <div className="w-full h-px bg-back my-6"></div>
    </div>
  );
}

export default function Question() {
  const [openId, setOpenId] = useState<number | null>(null);

  function handleToggle(id: number) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <div className="section-padding bg-back2">
      <div className="grid grid-cols-2 items-start">
        <div>
          <h4 className="text-3xl font-semibold text-back">
            You have Questions
            <br /> We Have Answers.
          </h4>
          <div className="w-full h-px bg-back my-6"></div>
          {questions.map((question) => (
            <QuestionItem
              key={question.id}
              question={question}
              isOpen={openId === question.id}
              onToggle={() => handleToggle(question.id)}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <img
            src="piecescozy.jpg"
            alt="IMAGE"
            className="w-80 h-95 rounded-2xl border-4 border-solid border-back3"
          />
        </div>
      </div>
    </div>
  );
}