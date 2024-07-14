import React from "react";
import { BsArchive } from "react-icons/bs";
import "./styles/MissedCall.css";
import {
  ARCHIVE_A_CALL,
  ARCHIVED_PAGE,
  UNARCHIVE_A_CALL,
  UNARCHIVED_PAGE,
} from "../constant";
import { useCalls } from "../../context/CallsContext";

const ArchivedButton = ({ page, typeCall, id = undefined }) => {

  const { handleArchiveAllCall, handleACALL, handleUnArchiveAllCall } =
    useCalls();
  const handleArchive = () => {
    if (page === UNARCHIVED_PAGE) handleArchiveAllCall();
    if (page === ARCHIVED_PAGE) handleUnArchiveAllCall();
    if (typeCall === ARCHIVE_A_CALL) handleACALL(typeCall, id);
    if (typeCall === UNARCHIVE_A_CALL) handleACALL(typeCall, id);
  };
  return (
    <div className="wrapped-item" onClick={handleArchive}>
      <BsArchive style={{ fontSize: "1.5em" }} />
      <div style={{ marginLeft: "10px" }}>
        {page === UNARCHIVED_PAGE
          ? "Archive all calls"
          : page === ARCHIVED_PAGE
          ? "UnArchive all calls"
          : typeCall === ARCHIVE_A_CALL
          ? "Archive the call"
          : typeCall === UNARCHIVE_A_CALL
          ? "Unachirve the call"
          : ""}
      </div>
    </div>
  );
};

export default ArchivedButton;
