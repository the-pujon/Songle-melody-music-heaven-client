import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useClasses = () => {
  const { user } = useAuth();

  //  console.log(user.email);

  const { refetch: refetch2, data: allClasses = [] } = useQuery({
    queryKey: ["Classes"],
    queryFn: async () => {
      const res = await fetch(`https://backend-songle.vercel.app/classes`);
      return res.json();
    },
  });
  return [allClasses, refetch2];
};

export default useClasses;
