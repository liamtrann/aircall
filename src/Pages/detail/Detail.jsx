import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Detail.css";
import { IoPerson } from "react-icons/io5";
import { ARCHIVE_A_CALL, UNARCHIVE_A_CALL } from "../../components/constant";
import { ArchivedButton } from "../../components/common";

const Detail = () => {
  const location = useLocation();
  const { dataCall } = location.state;
  const { id } = useParams();

  return (
    <div className="detail">
      <div className="detail-content">
        <div className="avatar">
          <IoPerson style={{ fontSize: "5em" }} />
        </div>
        <div className="name">{dataCall.from}</div>
        <div className="phone-number">{dataCall.via}</div>
      </div>
      <div>
        <ArchivedButton
          typeCall={dataCall.is_archived ? UNARCHIVE_A_CALL : ARCHIVE_A_CALL}
          id={id}
        />
      </div>
    </div>
  );
};

export default Detail;
