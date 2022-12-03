import { useEffect, useState } from "react";

const useLibrarian = (email) => {
  const [isLibrarian, setIsLibrarian] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/librarian/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setIsLibrarian(data.isLibrarian);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isLibrarian, isAdminLoading];
};
export default useLibrarian;
