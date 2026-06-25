
import { Metadata } from "next";
import JoinNowClient from "./client";

export const metadata: Metadata = {
  title: "Join Now",
  description: "Become a volunteer and join our mission to build a positive, conscious, and spiritually awakened world.",
  keywords: ["Volunteer Nepal", "Join LPM", "Apply", "NGO Volunteer"],
  openGraph: {
    title: "Join Now - Life Positive Mission",
    description: "Become a volunteer and make a difference.",
  },
};

export default function JoinNowPage() {
  return <JoinNowClient />;
}

