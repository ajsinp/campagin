"use client";
import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "system";

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

export default function SettingsPage() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (isTheme(saved)) return saved;
    }
    return "light";
  });

  const [notifications, setNotifications] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("notifications");
      return saved === "true";
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("notifications", String(notifications));
  }, [theme, notifications]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Theme Preference
        </label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System Default</option>
        </select>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <span className="text-gray-700 font-medium">Enable Notifications</span>
        <input
          type="checkbox"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
          className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
      </div>

      <div className="mt-8 bg-blue-50 text-blue-800 text-sm rounded-md p-3">
        <p>Your preferences are automatically saved in your browser.</p>
      </div>
    </div>
  );
}
