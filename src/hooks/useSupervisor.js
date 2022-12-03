import { useEffect, useState } from "react";

const useSupervisor = (email) => {
  const [isSupervisor, setIsSupervisor] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/supervisor/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsSupervisor(data.isSupervisor);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isSupervisor, isAdminLoading];
};
export default useSupervisor;
