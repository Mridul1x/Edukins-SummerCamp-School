import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedItems = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectedItems = [] } = useQuery({
    queryKey: ["selectedItems", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selectedItems?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [selectedItems, refetch];
};
export default useSelectedItems;
