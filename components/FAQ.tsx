"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    question: "Do you sell to the public?",
    answer:
      "Yes. Homeowners, builders and makers are all welcome at the yard.",
  },
  {
    question: "Can you match an existing profile?",
    answer:
      "We grind custom knives regularly — bring a sample piece and we'll match it.",
  },
  {
    question: "How long does a custom table take?",
    answer:
      "Most tables run six to ten weeks depending on slab drying and finish.",
  },
  {
    question: "Do you deliver?",
    answer:
      "We deliver throughout the BebeWoodWork and can install decking, siding and flooring.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleFAQ(index: number) {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  }

  return (
    <section className="border-b border-line bg-cream py-14 md:py-20">
      <div className="container max-w-5xl">
        <Reveal>
          <span className="eyebrow">
            GOOD TO KNOW
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl">
            Common{" "}
            <span style={{ color: "var(--accent-oklab)" }}>
              questions
            </span>
          </h2>

          <p className="mt-4 text-[15px] text-muted font-sans normal-case">
            Still unsure? Call the shop and we&apos;ll talk it through.
          </p>
        </Reveal>

        <div className="mt-10 border-y border-line">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-line last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className={`
                    relative flex w-full
                    items-center justify-between
                    gap-4 overflow-hidden
                    px-5 py-7
                    text-left text-lg font-medium
                    outline-none
                    transition-colors duration-300
                    ${isOpen ? "text-white" : "text-ink"}
                  `}
                >
                  {/* Oklab background */}
                  <span
                    aria-hidden="true"
                    className={`
                      absolute inset-0 z-0
                      origin-top
                      transition-transform duration-700
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${
                        isOpen
                          ? "scale-y-100"
                          : "scale-y-0"
                      }
                    `}
                    style={{
                      backgroundColor:
                        "var(--accent-oklab)",
                    }}
                  />

                  {/* Question */}
                  <span
                    className="relative z-10 transition-colors duration-300"
                    style={{
                      color: isOpen ? "#fff" : undefined,
                    }}
                  >
                    {faq.question}
                  </span>

                  {/* Plus / X */}
                  <span
                    aria-hidden="true"
                    className={`
                      relative z-10
                      shrink-0
                      text-2xl
                      leading-none
                      transition-all
                      duration-500
                      ease-out
                      ${
                        isOpen
                          ? "rotate-45"
                          : ""
                      }
                    `}
                    style={{
                      color: isOpen
                        ? "#fff"
                        : "var(--accent-oklab)",
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid overflow-hidden
                    transition-[grid-template-rows]
                    duration-700
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                  style={{
                    backgroundColor:
                      "var(--accent-oklab)",
                  }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      className={`
                        px-5 pb-7
                        text-[16px]
                        leading-relaxed
                        font-sans
                        normal-case
                        transition-all
                        duration-500
                        ease-out
                        ${
                          isOpen
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }
                      `}
                      style={{
                        color: "#fff",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}