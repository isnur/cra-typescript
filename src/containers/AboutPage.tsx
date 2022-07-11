import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../interfaces/states";
import { setLoading } from "../redux/actions/common";

function AboutPage() {
  const loading = useSelector<IAppState>((state) => state.common.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>loading...</div>;

  return <div>AboutPage</div>;
}

export default AboutPage;
