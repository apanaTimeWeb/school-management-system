import type { StudentHostelData } from '../student_hostel_types/student_hostel_types';

export const MOCK_HOSTEL_DATA: StudentHostelData = {
  isHosteler: true, // Conditional check
  details: {
    hostelName: "Boys Hostel Block A",
    roomNumber: "A-204",
    bedNumber: "B2",
    wardenName: "Mr. Rajendra Prasad",
    wardenPhone: "+91 98765 43210",
    feeStatus: "Paid",
    attendancePercentage: 96.5
  },
  leaves: [
    {
      id: "hl_1",
      leaveType: "Going Home",
      startDate: "Oct 20, 2024",
      endDate: "Oct 25, 2024",
      reason: "Diwali Vacation",
      status: "Approved"
    },
    {
      id: "hl_2",
      leaveType: "Night Out",
      startDate: "Sep 15, 2024",
      endDate: "Sep 16, 2024",
      reason: "Attending cousin's birthday party",
      status: "Rejected"
    }
  ],
  visitors: [
    {
      id: "vis_1",
      visitorName: "Suresh Kumar",
      relation: "Father",
      visitDate: "Oct 10, 2024",
      timeSlot: "04:00 PM - 06:00 PM",
      status: "Approved"
    },
    {
      id: "vis_2",
      visitorName: "Ramesh Sharma",
      relation: "Uncle",
      visitDate: "Aug 05, 2024",
      timeSlot: "10:00 AM - 12:00 PM",
      status: "Completed"
    }
  ],
  notices: [
    {
      id: "hn_1",
      date: "Today, 10:00 AM",
      title: "Mess Timing Update",
      content: "Dinner timings have been shifted from 7:30 PM to 8:00 PM due to winter schedule.",
      isUrgent: false
    },
    {
      id: "hn_2",
      date: "Yesterday, 04:00 PM",
      title: "Room Inspection Tomorrow",
      content: "All students are requested to keep their rooms clean. A surprise inspection will be conducted tomorrow morning.",
      isUrgent: true
    }
  ]
};
