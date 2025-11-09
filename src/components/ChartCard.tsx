"use client";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import Card from "./ui/Card";
import Link from "next/link";


const data = [
  { name: "Jan", sent: 300 },
  { name: "Feb", sent: 500 },
  { name: "Mar", sent: 700 },
  { name: "Apr", sent: 400 },
];

export default function ChartSection() {
  return (
    <Card>
      <h3 className="font-semibold mb-3">Emails Sent (Monthly)</h3>
      <div className="overflow-x-auto flex justify-around">
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="sent" stroke="#2563eb" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
         <div>
        <div className="justify-between mb-4">
          <h1 className="text-2xl font-bold py-5">Campaigns</h1>
          <Link
            href="/campaign/new"
            className="bg-blue-600 text-white px-4 py-3 rounded"
          >
            + Create Campaign
          </Link>
        </div>
      </div>
      </div>
     
    </Card>
  );
}
