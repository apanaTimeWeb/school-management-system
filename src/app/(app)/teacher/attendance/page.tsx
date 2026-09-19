import TeacherAttendanceMain from './attendance_components/TeacherAttendanceMain';
import AttendanceCorrectionRequest from './AttendanceCorrectionRequest';

export default function TeacherAttendancePage() {
  return (
    <div className="w-full h-full relative">
      <TeacherAttendanceMain />
          <AttendanceCorrectionRequest />
    </div>
  );
}
