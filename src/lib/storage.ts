import type { Campaign } from "@/types/campaign";

const KEY = "campaign";

export function getCampaigns(): Campaign[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(KEY);
    return stored ? (JSON.parse(stored) as Campaign[]) : [];
  } catch (error) {
    console.error("Error loading campaigns:", error);
    return [];
  }
}

export function saveCampaign(data: Omit<Campaign, "id" | "status" | "sent" | "replies" | "createdAt">) {
  const existing = getCampaigns();
  const newCampaign: Campaign = {
    ...data,
    id: Date.now(),
    status: "Active",
    sent: Math.floor(Math.random() * 1000),
    replies: Math.floor(Math.random() * 100),
    createdAt: new Date().toLocaleDateString(),
  };
  localStorage.setItem(KEY, JSON.stringify([...existing, newCampaign]));
}
