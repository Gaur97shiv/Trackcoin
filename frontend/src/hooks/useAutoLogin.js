import { useState, useEffect } from "react";
import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
function useAutoLogin() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
    async function autoLoginApiCall() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_INTERNAL_API_PATH}/refresh`,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        const user = {
          id: response.data.user._id,
          email: response.data.user.email,
          username: response.data.user.username,
          auth: response.data.auth,
        };

        dispatch(setUser(user));
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
     autoLoginApiCall() ;

    
  }, []);
  return loading;
}
export default useAutoLogin;
