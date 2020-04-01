import * as React from "react";
import { useHistory } from "react-router";

export const Map = () => {
    const history = useHistory();

    return (
      <div onClick={() => history.push("/show-list")}>
        <img src="/static/img/map.png" style={{ width: "100%", height: "auto" }} />
      </div>
    );
};