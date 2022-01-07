export interface AttendanceModel {
  guestID:number;
  eventID:number;
  attendanceTime?:string;
  typeID: {typeId: number};
}
