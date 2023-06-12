import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const EnrolledClass = () => {
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/payment").then((res) => setEnrolledClasses(res.data));
  }, []);



  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-3xl my-10">Enrolled Classes Name</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {enrolledClasses.map((item, index) => (
          <div key={item._id} className="border-2 border-black text-center p-5">
            {" "}
            {index + 1}. {item.className}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledClass;
