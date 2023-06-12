import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectClass = () => {
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  const { refetch: refetch1, data: selectedClasses = [] } = useQuery({
    queryKey: ["selectedClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selectedClass?email=${user?.email}`);
      return res.data;
    },
  });
  return [selectedClasses, refetch1];
};

export default useSelectClass;
