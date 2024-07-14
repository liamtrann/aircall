import React, { useMemo } from "react";
import { ArchivedButton, MissedCall } from "../components/common";
import moment from "moment";
import { arrangeByDate } from "../components/constant/convert";
import { ARCHIVE_ALL_CALL } from "../components/constant";

const Activity = ({ page, dataCall }) => {
  const missedCalls = useMemo(() => arrangeByDate(dataCall), [dataCall]);

  return (
    <>
      <ArchivedButton page={page} typeCall={ARCHIVE_ALL_CALL}/>
      {Object.keys(missedCalls).map((date) => (
        <>
          <div className="date-time-call">{date}</div>
          {missedCalls[date].map((call) => (
            <MissedCall key={call.id} dataCall={call} />
          ))}
        </>
      ))}
    </>
  );
};

export default Activity;
