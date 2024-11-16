import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import ClientList from "./ClientList";
import Numbers from "./Numbers";

function Clients() {
  return (
    <Layout>
      <div>
        <Intro />
        <ClientList />
        <Numbers />
      </div>
    </Layout>
  );
}

export default Clients;
