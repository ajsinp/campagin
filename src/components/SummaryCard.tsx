import Card from "./ui/Card";

const stats = [
  { label: "Active Campaigns", value: 8 },
  { label: "Emails Sent", value: 1250 },
  { label: "Replies", value: 320 },
  { label: "Meetings Booked", value: 58 },
];

export default function SummaryCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item) => (
        <Card key={item.label}>
          <p className="text-sm text-gray-500">{item.label}</p>
          <p className="text-2xl font-bold">{item.value}</p>
        </Card>
      ))}
    </div>
  );
}
