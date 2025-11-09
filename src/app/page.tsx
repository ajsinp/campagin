import SummaryCards from "@/components/SummaryCard";
import ChartSection from "@/components/ChartCard";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <SummaryCards />
      <div className="mt-6">
        <ChartSection />
      </div>
    </div>
  );
}
