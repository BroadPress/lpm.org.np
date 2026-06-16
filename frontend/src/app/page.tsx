import { Metadata } from "next";
import Home from "./HomeClient";

export const metadata: Metadata = {
  title: "Home",
  description: "Life Positive Mission is a volunteer-driven international public charitable non-profit organization committed to building a positive, conscious, and spiritually awakened world.",
  keywords: ["NGO Nepal", "Volunteer", "Positive Energy", "Spiritual Awakening"],
  openGraph: {
    title: "Life Positive Mission - Home",
    description: "Join us in building a positive and conscious world.",
  },
};

export default function HomePage() {
  return <Home />;
}