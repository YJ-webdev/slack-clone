import { useConvexAuth, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export function useCurrentUser() {
  const { isLoading: authLoading } = useConvexAuth(); // Convex auth loading state
  const user = useQuery(api.users.current); // Fetch the current user

  // Combine the loading states of Convex auth and user query
  const isLoading = authLoading || user === undefined;

  return {
    user,
    isLoading,
  };
}
