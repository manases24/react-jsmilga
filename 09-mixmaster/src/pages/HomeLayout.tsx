import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const value = "some value"
  return (
    <div>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading"></div> : <Outlet context={{value}}/>}
      </section>
    </div>
  );
};
