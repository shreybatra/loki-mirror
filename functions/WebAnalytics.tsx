import axios from "axios";

export const updateWebAnalytics = async (data: {
  type: string;
  eventId: string;
}) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_BASE_URL}/web-analytics`,
    data
  );
  return response.data;
};
