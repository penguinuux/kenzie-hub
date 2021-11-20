import { Redirect } from "react-router-dom";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return <h1>Dashboard</h1>;
};

export default Dashboard;
