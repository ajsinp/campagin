import { Campaign } from "@/types/campaign";

export default function CampaignTable({ campaigns }: { campaigns: Campaign[] }) {
  if (!campaigns.length) return <p>No campaigns available.</p>;

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border-collapse border bg-white rounded-lg shadow-md">
        <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
          <tr>
            <th className="border p-3 text-center">Name</th>
            <th className="border p-3 text-center">Type</th>
            <th className="border p-3 text-center">Description</th>
            <th className="border p-3 text-center">Status</th>
            <th className="border p-3 text-center">Created</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c) => (
            <tr
              key={c.id}
              className="hover:bg-gray-50 transition-colors even:bg-gray-50/50"
            >
              <td className="border p-3 text-center align-middle text-sm sm:text-base">{c.name}</td>
              <td className="border p-3 text-center align-middle text-sm sm:text-base">{c.type}</td>
               <td className="border p-3 text-center align-middle text-sm sm:text-base">{c.description}</td>
              <td className="border p-3 text-center align-middle text-sm sm:text-base">{c.status}</td>
              <td className="border p-3 text-center align-middle text-sm sm:text-base">
                {new Date(c.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       
    </div>
  );
}
