// import React from "react";
// import { Metadata } from "next";
// import PrivacyPolicyClient from "./page";

// export const metadata: Metadata = {
//   title: "Privacy Policy",
//   description: "Learn about our privacy policy and how we protect your data.",
// };

// export default function PrivacyPolicyPage() {
//   return <PrivacyPolicyClient />;
// }


"use client";

import { staggerContainer } from "@/components/animations/variants";
import { motion } from "framer-motion";
import {
  Lock,
  Eye,
  Users,
  FileText,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export default function PrivacyPolicyPage() {

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Privacy Policy Content */}
      <div className="py-6 md:py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-2xl p-6 md:p-10 lg:p-12"
          >
            {/* Header Section */}
            <motion.div variants={sectionVariants}   transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <Lock className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                Privacy Policy for LPM
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At LPM, accessible from our website, one of our main priorities
                is the privacy of our visitors. This Privacy Policy document
                contains types of information that is collected and recorded by
                LPM and how we use it.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                If you have additional questions or require more information
                about our Privacy Policy, do not hesitate to contact us.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in LPM. This policy
                is not applicable to any information collected offline or via
                channels other than this website.
              </p>
            </motion.div>

            {/* Consent */}
            <motion.div variants={sectionVariants}   transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                Consent
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By using our website, you hereby consent to our Privacy Policy
                and agree to its terms.
              </p>
            </motion.div>

            {/* Information Collection */}
            <motion.div variants={sectionVariants}   transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                Information We Collect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The personal information that you are asked to provide, and the
                reasons why you are asked to provide it, will be made clear to
                you at the point we ask you to provide your personal
                information.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                If you contact us directly, we may receive additional
                information about you such as your name, email address, phone
                number, the contents of the message and/or attachments you may
                send us, and any other information you may choose to provide.
              </p>
              <div className="mt-3 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-600 dark:border-blue-400">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">
                    When you register for an account
                  </strong>
                  , we may ask for your contact information, including items
                  such as name, company name, address, email address, and
                  telephone number.
                </p>
              </div>
            </motion.div>

            {/* How We Use Information */}
            <motion.div variants={sectionVariants}   transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                <Eye className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                How We Use Your Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We use the information we collect in various ways, including to:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {[
                  "Provide, operate, and maintain our website",
                  "Improve, personalize, and expand our website",
                  "Understand and analyze how you use our website",
                  "Develop new products, services, features, and functionality",
                  "Communicate with you, either directly or through one of your partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes",
                  "Send you emails",
                  "Find and prevent fraud",   
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Log Files */}
            <motion.div variants={sectionVariants}   transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                <FileText className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                Log Files
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                LPM follows a standard procedure of using log files. These files
                log visitors when they visit websites. All hosting companies do
                this and a part of hosting services&apos; analytics. The
                information collected by log files include internet protocol
                (IP) addresses, browser type, Internet Service Provider (ISP),
                date and time stamp, referring/exit pages, and possibly the
                number of clicks. These are not linked to any information that
                is personally identifiable. The purpose of the information is
                for analyzing trends, administering the site, tracking
                users&apos; movement on the website, and gathering demographic
                information.
              </p>
            </motion.div>

            {/* Advertising Partners */}
            <motion.div variants={sectionVariants}   transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Advertising Partners Privacy Policies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You may consult this list to find the Privacy Policy for each of
                the advertising partners of LPM.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                Third-party ad servers or ad networks use technologies like
                cookies, JavaScript, or Web Beacons that are used in their
                respective advertisements and links that appear on LPM, which
                are sent directly to users&apos; browser. They automatically
                receive your IP address when this occurs. These technologies are
                used to measure the effectiveness of their advertising campaigns
                and/or to personalize the advertising content that you see on
                websites that you visit.
              </p>
              <div className="mt-3 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-600 dark:border-yellow-400">
                <p className="text-gray-700 dark:text-gray-300">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 inline mr-2" />
                  Note that LPM has no access to or control over these cookies
                  that are used by third-party advertisers.
                </p>
              </div>
            </motion.div>

            {/* Third Party Policies */}
            <motion.div variants={sectionVariants}   transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Third Party Privacy Policies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                LPM&apos;s Privacy Policy does not apply to other advertisers or
                websites. Thus, we are advising you to consult the respective
                Privacy Policies of these third-party ad servers for more
                detailed information. It may include their practices and
                instructions about how to opt-out of certain options.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                You can choose to disable cookies through your individual
                browser options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers&apos; respective websites.
              </p>
            </motion.div>

            {/* CCPA Rights */}
            <motion.div variants={sectionVariants}   transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                CCPA Privacy Rights (Do Not Sell My Personal Information)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Under the CCPA, among other rights, California consumers have
                the right to:
              </p>
              <ul className="space-y-2 mt-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Request that a business that collects a consumer&apos;s
                    personal data disclose the categories and specific pieces of
                    personal data that a business has collected about consumers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Request that a business delete any personal data about the
                    consumer that a business has collected.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Request that a business that sells a consumer&apos;s
                    personal data, not sell the consumer&apos;s personal data.
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>
            </motion.div>

            {/* GDPR Rights */}
            <motion.div variants={sectionVariants}   transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                GDPR Data Protection Rights
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We would like to make sure you are fully aware of all of your
                data protection rights. Every user is entitled to the following:
              </p>
              <div className="space-y-3 mt-3">
                {[
                  {
                    title: "The right to access",
                    desc: "You have the right to request copies of your personal data. We may charge you a small fee for this service.",
                  },
                  {
                    title: "The right to rectification",
                    desc: "You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.",
                  },
                  {
                    title: "The right to erasure",
                    desc: "You have the right to request that we erase your personal data, under certain conditions.",
                  },
                  {
                    title: "The right to restrict processing",
                    desc: "You have the right to request that we restrict the processing of your personal data, under certain conditions.",
                  },
                  {
                    title: "The right to object to processing",
                    desc: "You have the right to object to our processing of your personal data, under certain conditions.",
                  },
                  {
                    title: "The right to data portability",
                    desc: "You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
                  },
                ].map((right, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <p className="font-semibold text-gray-800 dark:text-white">
                      {right.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      {right.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>
            </motion.div>

            {/* Children's Information */}
            <motion.div variants={sectionVariants}   transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                Children&apos;s Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.
              </p>
              <div className="mt-3 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-l-4 border-red-600 dark:border-red-400">
                <p className="text-gray-700 dark:text-gray-300">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 inline mr-2" />
                  LPM does not knowingly collect any Personal Identifiable
                  Information from children under the age of 13. If you think
                  that your child provided this kind of information on our
                  website, we strongly encourage you to contact us immediately
                  and we will do our best efforts to promptly remove such
                  information from our records.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
