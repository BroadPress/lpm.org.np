import { Metadata } from "next";
import TeamClient from "./client";
import React from "react";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet our dedicated leaders and volunteers at Life Positive Mission.",
  keywords: ["Team LPM", "Leadership", "Volunteers"],
};

export default function TeamPage() {
  return <TeamClient />;
}
