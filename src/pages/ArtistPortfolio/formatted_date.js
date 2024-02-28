export function formatDateRange(startDate, endDate) {
  const options = { day: "2-digit", month: "long", year: "numeric" };

  const start = new Date(startDate);
  const end = new Date(endDate);

  const formattedStart = start.toLocaleDateString("en-US", options);
  const formattedEnd = end.toLocaleDateString("en-US", options);

  const rearrangeDate = (dateString, includeYear) => {
    const [month, day, year] = dateString.split(" ");
    return includeYear
      ? `${day.replace(",", "")} ${month}, ${year}`
      : `${day} ${month}`.replace(",", "");
  };

  const startYear = start.getFullYear();
  const endYear = end.getFullYear();
  const includeYearInStart = startYear !== endYear;

  return [
    rearrangeDate(formattedStart, includeYearInStart),
    rearrangeDate(formattedEnd, true),
  ].sort((a, b) => new Date(a) - new Date(b));
}
