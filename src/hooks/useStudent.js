import { useEffect, useState } from "react";

const useStudent = (email) => {
  const [isStudent, setIsStudent] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/student/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsStudent(data.isStudent);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isStudent, isAdminLoading];
};
export default useStudent;
