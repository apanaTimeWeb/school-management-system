import type { StudentEventsData } from '../student_events_types/student_events_types';

export const MOCK_EVENTS_DATA: StudentEventsData = {
  upcomingEvents: [
    {
      id: "evt_1",
      title: "Annual Inter-School Athletics Meet",
      category: "Sports",
      date: "Oct 15, 2024",
      time: "08:00 AM - 04:00 PM",
      venue: "Main Sports Ground",
      description: "Join the biggest sports event of the year. Categories include 100m sprint, relay, long jump, and shot put.",
      isRegistrationOpen: true,
      registrationDeadline: "Oct 05, 2024",
      imageColor: "bg-blue-500"
    },
    {
      id: "evt_2",
      title: "Science & Innovation Fair 2024",
      category: "Competition",
      date: "Nov 02, 2024",
      time: "10:00 AM - 02:00 PM",
      venue: "School Auditorium",
      description: "Showcase your innovative science projects. Top 3 projects will be selected for the state-level exhibition.",
      isRegistrationOpen: true,
      registrationDeadline: "Oct 25, 2024",
      imageColor: "bg-purple-500"
    },
    {
      id: "evt_3",
      title: "Diwali Cultural Fest",
      category: "Cultural",
      date: "Oct 28, 2024",
      time: "05:00 PM - 09:00 PM",
      venue: "Open Air Theatre",
      description: "Celebrate the festival of lights with dance, music, and drama performances by students across all grades.",
      isRegistrationOpen: false, // Walk-in or closed
      imageColor: "bg-orange-500"
    },
    {
      id: "evt_4",
      title: "Robotics Workshop (Beginners)",
      category: "Workshop",
      date: "Sep 20, 2024",
      time: "02:00 PM - 05:00 PM",
      venue: "Computer Lab 2",
      description: "A hands-on workshop to learn the basics of Arduino and robotics. Limited to 30 seats.",
      isRegistrationOpen: true,
      registrationDeadline: "Sep 18, 2024",
      imageColor: "bg-emerald-500"
    }
  ],
  myParticipations: [
    {
      id: "part_1",
      eventId: "evt_4",
      eventTitle: "Robotics Workshop (Beginners)",
      category: "Workshop",
      date: "Sep 20, 2024",
      status: "Registered"
    },
    {
      id: "part_2",
      eventId: "evt_old_1",
      eventTitle: "Inter-House Debate Competition",
      category: "Competition",
      date: "Aug 15, 2024",
      status: "Registered"
    }
  ],
  results: [
    {
      id: "res_1",
      eventId: "evt_old_1",
      eventTitle: "Inter-House Debate Competition",
      category: "Competition",
      date: "Aug 15, 2024",
      rankOrScore: "1st Place",
      hasCertificate: true
    },
    {
      id: "res_2",
      eventId: "evt_old_2",
      eventTitle: "Annual Marathon 5K",
      category: "Sports",
      date: "Jan 10, 2024",
      rankOrScore: "Participant",
      hasCertificate: true
    }
  ]
};
