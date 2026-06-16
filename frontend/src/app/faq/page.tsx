import { Metadata } from "next";
import FAQClient from './client'
import React from "react";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Life Positive Mission.",
  keywords: ["FAQ", "Questions", "Help"],
};
export default function FAQPage() {
  return <FAQClient /> ;
 }
