"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import CampaignTable from "@/components/CampaignTable";
import { Campaign } from "@/types/campaign";
import Link from "next/link";

export default function CampaignPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await axios.get("/api/campaign");
        const arr = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.campaigns)
          ? res.data.campaigns
          : [];
        setCampaigns(arr);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) return <p>Loading campaigns...</p>;

  return (
    <div className="p-6">
      {/* ✅ Header row with title & button side by side */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">All Campaigns</h1>

        <Link
          href="/campaign/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
        >
          + Create Campaign
        </Link>
      </div>

      {/* ✅ Table section */}
      <CampaignTable campaigns={campaigns} />
    </div>
  );
}
