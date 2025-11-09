export type Campaign = {
  id: number;
  name: string;
  type: "Email" | "WhatsApp";
  description: string;
  status: string;
  sent: number;
  replies: number;
  createdAt: string;
};
