import { axiosWithCreds } from "./axiosInstances";

export const createSubscriptionApi = async (planId) => {
  const data = await axiosWithCreds.post(`/create/subscription`, {
    planId,
  });
  return data;
};
