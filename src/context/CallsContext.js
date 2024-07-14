import React, { createContext, useState, useContext, useEffect } from "react";
import { ARCHIVE_A_CALL } from "../components/constant";

// Create the context
const CallsContext = createContext();

// Create a provider component
export const CallsProvider = ({ children }) => {
  const [unArchivedCalls, setUnArchivedCalls] = useState([]);
  const [archivedCalls, setArchivedCalls] = useState([]);

  const handleUnArchiveAllCall = async () => {
    try {
      const response = await fetch(
        `https://aircall-backend.onrender.com/reset`,
        {
          method: "PATCH",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Call archived successfully");
    } catch (error) {
      console.error("Error archiving call:", error);
    }
    getCalls();
  };

  const handleArchiveAllCall = () => {
    const allId = unArchivedCalls.map((call) => call.id);
    allId.map((id) => {
      handleACALL(ARCHIVE_A_CALL, id);
    });
  };

  const handleACALL = async (typeCall, id) => {
    try {
      const response = await fetch(
        `https://aircall-backend.onrender.com/activities/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ is_archived: typeCall === ARCHIVE_A_CALL }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Successfully");
    } catch (error) {
      console.error("Error archiving call:", error);
    }
    getCalls();
  };

  const getCalls = async () => {
    try {
      const response = await fetch(
        "https://aircall-backend.onrender.com/activities"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch calls");
      }
      const data = await response.json();
      const unArchived = data.filter((call) => !call.is_archived);
      const archived = data.filter((call) => call.is_archived);
      setUnArchivedCalls(unArchived);
      setArchivedCalls(archived);
    } catch (error) {
      console.error("Error fetching call data:", error);
    }
  };

  useEffect(() => {
    getCalls();
  }, []);

  return (
    <CallsContext.Provider
      value={{
        unArchivedCalls,
        archivedCalls,
        handleArchiveAllCall,
        handleUnArchiveAllCall,
        handleACALL,
      }}
    >
      {children}
    </CallsContext.Provider>
  );
};

// Custom hook to use the CallsContext
export const useCalls = () => {
  return useContext(CallsContext);
};
