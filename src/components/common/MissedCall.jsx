import React from "react";
import { FcEndCall } from "react-icons/fc";
import "./styles/MissedCall.css";
import { convertTime, truncateString } from "../constant/convert";
import { useNavigate } from "react-router-dom";

const MissedCall = ({ dataCall }) => {
  const [timeStamp, period] = convertTime(dataCall).split(" ");

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/call-detail/${dataCall.id}`, { state: { dataCall } });
  };

  return (
    <div className="call-detail" onClick={handleDetail}>
      <div
        className="wrapped-item"
        style={{ justifyContent: "space-between", paddingRight: "0" }}
      >
        <div className="missed-call">
          <FcEndCall style={{ fontSize: "1.5em" }} />
          <div style={{ marginLeft: "10px", display: "inline" }}>
            <div className="call-number">
              <div style={{ marginRight: "10px" }}>{dataCall.via}</div>
              {dataCall.count > 1 && (
                <div className="number-calls">{dataCall.count}</div>
              )}
            </div>
            <div className="call-name">{`tried to call on ${truncateString(
              dataCall.from,
              10
            )}`}</div>
          </div>
        </div>
        <div className="date-call">
          <div>{timeStamp}</div>
          <div className="time">{period}</div>
        </div>
      </div>
    </div>
  );
};

export default MissedCall;
