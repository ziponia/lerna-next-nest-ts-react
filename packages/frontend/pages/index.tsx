import React from "react";
import { Button } from "@example/ui";
import { NextPage } from "next";
import axios from "axios";

type Props = {
  users: any[];
};

const IndexPage: NextPage<Props> = (props) => {
  return (
    <div>
      <Button />

      <ul>
        {props.users &&
          props.users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

IndexPage.getInitialProps = async (ctx) => {
  const { data } = await axios.get("http://localhost:4000/user");
  return {
    users: data,
  };
};

export default IndexPage;
