"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const definitions = [
  [
    "Website",
    "The Life Positive Mission website, including its pages, forms, media, and related content.",
  ],
  [
    "User",
    "Any visitor, member, volunteer, donor, or person who interacts with the website.",
  ],
  [
    "Content",
    "Text, images, video, graphics, documents, and other materials published on the website.",
  ],
  [
    "Program",
    "Any event, initiative, campaign, workshop, or service shared by Life Positive Mission.",
  ],
  [
    "Contribution",
    "Any form submission, message, review, donation, or other material sent through the website.",
  ],
  [
    "Terms",
    "The rules, conditions, and explanations set out on this page and any updated version of it.",
  ],
];

const sections = [
  {
    title: "Agreement to Terms",
    body: [
      "By accessing or using this website, you agree to these Terms and Terminologies. If you do not agree, please stop using the website.",
      "These terms apply to the public pages, contact forms, informational pages, and other website features made available by Life Positive Mission.",
    ],
  },
  {
    title: "Website Purpose",
    body: [
      "This website is maintained to share information about Life Positive Mission, its mission, programs, volunteering opportunities, events, and community-focused work.",
      "The website is intended to be informative and helpful. It is not a substitute for direct communication when a matter requires confirmation, clarification, or support.",
    ],
  },
  {
    title: "Terminology Guide",
    body: [
      "The definitions below are provided so visitors can understand the words commonly used across the website, forms, and program pages.",
    ],
  },
  {
    title: "Content Accuracy",
    body: [
      "We try to keep the information on this website accurate and up to date, but content may change without notice.",
      "Visitors should confirm important details before relying on them for decisions, registrations, donations, or participation in any program.",
    ],
  },
  {
    title: "Volunteering and Donations",
    body: [
      "Any volunteer or donation information shown on the website is provided for convenience.",
      "If a form or support channel is available, please use it honestly, respectfully, and only for its intended purpose.",
    ],
  },
  {
    title: "User Responsibilities",
    body: [
      "Users must not misuse forms, impersonate others, submit false information, or interfere with the operation or security of the website.",
      "Any use of the website should be lawful, respectful, and consistent with the mission and values of Life Positive Mission.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Unless otherwise noted, the website content belongs to Life Positive Mission and is protected by applicable intellectual property laws.",
      "You may view the content for personal, non-commercial use. Copying, redistributing, or reusing the content without permission is not allowed.",
    ],
  },
  {
    title: "Prohibited Activities",
    body: [
      "You may not use the website to upload harmful code, spam, misleading information, or any material that could disrupt service or harm others.",
      "You may not attempt to bypass security, scrape restricted content, or use the website for unauthorized commercial purposes.",
    ],
  },
  {
    title: "User Generated Contributions",
    body: [
      "If you submit a message, review, form entry, comment, or other contribution, you are responsible for the accuracy and legality of that content.",
      "By submitting content, you confirm that you have the necessary rights to share it and that it does not violate the rights of any other person or organization.",
    ],
  },
  {
    title: "Contribution License",
    body: [
      "To the extent allowed by law, you grant Life Positive Mission the right to use, store, display, and process your contributions for website operation, communication, and organizational purposes.",
      "This license is limited to what is needed to support the website and its mission, unless a separate agreement says otherwise.",
    ],
  },
  {
    title: "Term and Termination",
    body: [
      "These Terms remain in effect while you use the website.",
      "We may suspend or limit access to any user who violates these Terms, misuses the website, or creates a security or operational risk.",
    ],
  },
  {
    title: "Modifications and Interruptions",
    body: [
      "We may update, change, or remove website content at any time without notice.",
      "We do not guarantee that the website will always be available without interruption, delay, or error.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms are intended to be interpreted in a way that is consistent with the laws applicable to Life Positive Mission and the jurisdiction in which it operates.",
      "If a dispute requires formal review, the applicable law and venue will be determined according to the organization’s governing framework.",
    ],
  },
  {
    title: "Dispute Resolution",
    body: [
      "If you have a concern about the website, we encourage you to contact us first so we can review the issue directly.",
      "We believe most concerns can be resolved through respectful communication before any formal process is needed.",
    ],
  },
  {
    title: "Corrections",
    body: [
      "The website may occasionally contain typographical errors, outdated references, or incomplete details.",
      "We reserve the right to correct such information at any time without prior notice.",
    ],
  },
  {
    title: "Disclaimer",
    body: [
      "The website and its content are provided on an as-is basis and are made available for general informational purposes only.",
      "We do not guarantee that every page, form, or reference will be complete, current, or suitable for every situation.",
    ],
  },
  {
    title: "Limitations of Liability",
    body: [
      "To the fullest extent allowed by law, Life Positive Mission is not responsible for indirect, incidental, special, or consequential damages arising from your use of the website.",
      "This includes issues caused by downtime, data loss, technical errors, or reliance on website content without verification.",
    ],
  },
  {
    title: "Indemnification",
    body: [
      "You agree to protect and hold Life Positive Mission harmless from claims, losses, liabilities, and expenses that arise from your misuse of the website or violation of these Terms.",
    ],
  },
  {
    title: "User Data",
    body: [
      "We may store and process information you submit through the website in accordance with our privacy practices and operational needs.",
      "Please review the Privacy Policy for more information about how user data is collected, used, and protected.",
    ],
  },
  {
    title: "Electronic Communications",
    body: [
      "When you contact us through the website, submit a form, or otherwise communicate electronically, you agree that such communication may satisfy any required written notice where permitted by law.",
    ],
  },
  {
    title: "Miscellaneous",
    body: [
      "If any part of these Terms is found unenforceable, the remaining sections will continue to apply.",
      "Our decision not to enforce a particular section at any time does not mean we give up the right to enforce it later.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about these Terms and Terminologies, please contact Life Positive Mission through the website contact page or the official email address listed in the footer.",
    ],
  },
];

export default function TermsAndTerminologiesClient() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <section className="border-b border-gray-200 dark:border-gray-800 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 pb-14 md:pt-24 md:pb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600 dark:text-orange-400">
            Website Terms
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            Terms and Terminologies
          </h1>
          <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
            Last updated: July 2026
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-700 dark:text-gray-300">
            This page explains the terms that apply to your use of the Life
            Positive Mission website and defines the key words used across our
            pages, forms, and program information.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border text-white border-orange-200 bg-black px-5 py-2.5 text-sm font-semibold text-orange-700 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white dark:border-orange-900/50 dark:bg-gray-950 dark:text-orange-300 dark:hover:border-orange-600 dark:hover:bg-orange-500 dark:hover:text-white"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/join-now"
              className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2.5 text-sm font-semibold text-orange-700 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white dark:border-orange-900/50 dark:bg-gray-950 dark:text-orange-300 dark:hover:border-orange-600 dark:hover:bg-orange-500 dark:hover:text-white"
            >
              Become a Volunteer
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Definitions
          </h2>
          <div className="space-y-5">
            {definitions.map(([term, description]) => (
              <div
                key={term}
                className="border-b border-gray-200 pb-5 dark:border-gray-800"
              >
                <dt className="text-base font-semibold text-gray-900 dark:text-white">
                  {term}
                </dt>
                <dd className="mt-2 text-base leading-8 text-gray-700 dark:text-gray-300">
                  {description}
                </dd>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 space-y-12">
          {sections.map((section, index) => (
            <section key={section.title} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {index + 1}. {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-8 text-gray-700 dark:text-gray-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
