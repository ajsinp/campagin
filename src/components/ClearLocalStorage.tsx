"use client";
import { useEffect } from "react";
import { API_URL } from "@/app/config";
export default function ClearLocalStorage({ keyName }: { keyName: string }) {
  useEffect(() => {
  const clearData = async () => {
    localStorage.removeItem(keyName);
    await fetch(`${API_URL}/campaign`, { method: "DELETE" });
    console.log("🧹 Cleared campaigns from backend and localStorage");
  };
  clearData();
}, [keyName]);

}
