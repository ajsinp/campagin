import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return <div className="bg-white rounded-lg shadow p-4 border">{children}</div>;
}
