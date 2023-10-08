const dayConflict = (days1, days2) => days1 ? days1.split('').some((day) => days2.includes(day)) : false
const timeConflict = (time1, time2) => {
  const [timeStart1, timeEnd1] = time1.split("-");
  const [timeStart2, timeEnd2] = time2.split("-");
  return timeStart1 < timeEnd2 && timeEnd1 > timeStart2;
};

// Given a list of meetings and a meeting, see if there are conflicts.
export const hasConflictWithMeetingList = (meetingList, meeting2) =>

 meetingList.some((meeting1) => {
    
      const [days1, time1] = meeting1 ? meeting1.split(" "): [null, null]
      const [days2, time2] = meeting2.split(" ");
      console.log("days1, days2:", days1, days2);
      return dayConflict(days1, days2) && timeConflict(time1, time2);
    } 
  );
