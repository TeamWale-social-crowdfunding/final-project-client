/**
 * This function is use for return the time diff in string, for example: 2 days ago
 * @param timestamp This param is the created time in Js time type
 * @returns "2 hours ago" (assuming the current time is 2023-08-12T16:33:26.191Z)
 */
export const getTimeDiffString = (timestamp: string): string => {
  const currentTime = new Date();
  const postTime = new Date(timestamp);
  const timeDiff = currentTime.getTime() - postTime.getTime();
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }
};
