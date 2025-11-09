"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "../app/config";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

const schema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  type: z.string().refine((val) => val === "Email" || val === "WhatsApp", {
    message: "Select type",
  }),
  description: z.string().min(5, { message: "Description is required" }),
});

type FormData = z.infer<typeof schema>;

export default function CampaignForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/api/campaign", data); // ✅ internal API route
      toast.success("Campaign created successfully!");
      router.push("/campaign");
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      const message = err.response?.data?.error || "Failed to create campaign";
      toast.error(message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md bg-white p-6 rounded shadow flex flex-col gap-3"
    >
      <input
        {...register("name")}
        placeholder="Campaign Name"
        className="border p-2 rounded"
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}

      <select {...register("type")} className="border p-2 rounded">
        <option value="">Select Type</option>
        <option value="Email">Email</option>
        <option value="WhatsApp">WhatsApp</option>
      </select>
      {errors.type && (
        <p className="text-red-500 text-sm">{errors.type.message}</p>
      )}

      <textarea
        {...register("description")}
        placeholder="Description"
        className="border p-2 rounded"
      />
      {errors.description && (
        <p className="text-red-500 text-sm">{errors.description.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {isSubmitting ? "Saving..." : "Save Campaign"}
      </button>
    </form>
  );
}
