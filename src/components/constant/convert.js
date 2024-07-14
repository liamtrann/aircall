import moment from "moment";

export const convertTime = (date) => moment(date).format("hh:mm A");

export const truncateString = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + "...";
  }
  return str;
};

export const arrangeByDate = (data) => {
  if (!data.length) return {};
  const arrangedData = {};

  data.forEach((item) => {
    const formattedDate = moment(item.created_at).format("MMMM, D YYYY");
    if (!arrangedData[formattedDate]) {
      arrangedData[formattedDate] = [];
    }
    arrangedData[formattedDate].push(item);
  });

  Object.keys(arrangedData).forEach((date) => {
    const combinedData = {};

    arrangedData[date].forEach((item) => {
      if (!combinedData[item.via]) {
        combinedData[item.via] = { ...item, count: 1 };
      } else {
        if (
          moment(item.created_at).isAfter(combinedData[item.via].created_at)
        ) {
          combinedData[item.via] = {
            ...item,
            count: combinedData[item.via].count + 1,
          };
        } else {
          combinedData[item.via].count += 1;
        }
      }
    });

    // Convert combinedData back to an array sorted by created_at
    arrangedData[date] = Object.values(combinedData).sort((a, b) => {
      return moment(b.created_at).diff(moment(a.created_at));
    });
  });

  return arrangedData;
};
