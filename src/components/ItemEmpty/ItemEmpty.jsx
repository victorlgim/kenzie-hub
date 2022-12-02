import React from "react";
import { DivEmptyMessage, GiphyEmpty, MessageEmpty } from "./style";

const ItemEmpty = () => {
  return (
    <DivEmptyMessage>
      <MessageEmpty>!YourTechnologies.length ^.^</MessageEmpty>
      <GiphyEmpty src="giphy.gif" />
    </DivEmptyMessage>
  );
};

export default ItemEmpty;
