import { ReactNode } from "react";

const getInt = (num: string) => {
  try {
    return parseInt(num);
  } catch (error) {
    return null;
  }
};

const monthNames: Record<number, { short: string; long: string } | undefined> =
  {
    1: { short: "Jan", long: "January" },
    2: { short: "Feb", long: "February" },
    3: { short: "Mar", long: "March" },
    4: { short: "Apr", long: "April" },
    5: { short: "May", long: "May" },
    6: { short: "Jun", long: "June" },
    7: { short: "Jul", long: "July" },
    8: { short: "Aug", long: "August" },
    9: { short: "Sep", long: "September" },
    10: { short: "Oct", long: "October" },
    11: { short: "Nov", long: "November" },
    12: { short: "Dec", long: "December" },
  };

interface DateOptions extends Intl.DateTimeFormatOptions {
  // showTime?: boolean;
  formatBy?:
    | void
    | ((obj: {
        date: string;
        month: string;
        year: string;
        sup: string;
        // time: string;
      }) => string | ReactNode);
  addnth?: boolean;
  onError?: (error: string) => string;
}
export const formatDate = (
  dateObj: Date | string | number,
  {
    // showTime,
    formatBy = ({ date, month, year }) => `${date} ${month} ${year}`,
    addnth,
    onError,
    ...options
  }: DateOptions = {}
): string | ReactNode => {
  try {
    if (dateObj === 0) return "NA";
    if (typeof dateObj === "string" || typeof dateObj === "number")
      return formatDate(new Date(dateObj), {
        // showTime,
        formatBy,
        addnth,
        onError,
        ...options,
      });
    const opt: DateOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      // ...(showTime ? timeDefaults : {}),
      ...options,
    };
    const dateString = dateObj.toISOString();
    const [day] = dateString.split("T");
    const [year, monthNum, date] = day.split("-");
    const month =
      opt.month === "short"
        ? monthNames[Number(monthNum)]?.short ?? monthNum
        : opt.month === "long"
        ? monthNames[Number(monthNum)]?.long ?? monthNum
        : monthNum;
    if (dateString === "Invalid Date")
      return onError?.(dateString) || dateString;

    if (!formatBy) return dateString;
    const n = getInt(date);
    const nth =
      addnth && n !== null
        ? n === 1 || n === 21 || n === 31
          ? "st"
          : n === 22
          ? "nd"
          : n === 3 || n === 23
          ? "rd"
          : "th"
        : "";

    return formatBy({
      date,
      month,
      year: year.replace(",", ""),
      sup: nth,
      // time: showTime ? time?.toUpperCase() || '' : '',
    });
  } catch (error) {
    return onError?.(dateObj.toString()) || "Invalid Date";
  }
};
