export const TEACHER_SYLLABUS_LIST = [
  {
    id: 'SYL-001',
    class: 'Class 10 A',
    subject: 'Mathematics',
    overallProgress: 65,
    chapters: [
      {
        id: 'CH-1',
        name: 'Real Numbers',
        progressPercent: 100,
        topics: [
          { id: 'T-1-1', name: 'Euclid\'s Division Lemma', isCompleted: true, completionDate: '2023-04-10', remarks: 'Good grasp.' },
          { id: 'T-1-2', name: 'Fundamental Theorem of Arithmetic', isCompleted: true, completionDate: '2023-04-12' },
          { id: 'T-1-3', name: 'Revisiting Irrational Numbers', isCompleted: true, completionDate: '2023-04-15' },
        ]
      },
      {
        id: 'CH-8',
        name: 'Introduction to Trigonometry',
        progressPercent: 40,
        topics: [
          { id: 'T-8-1', name: 'Trigonometric Ratios', isCompleted: true, completionDate: '2023-10-18' },
          { id: 'T-8-2', name: 'Trigonometric Ratios of Specific Angles', isCompleted: true, completionDate: '2023-10-20' },
          { id: 'T-8-3', name: 'Trigonometric Identities', isCompleted: false },
        ]
      },
      {
        id: 'CH-9',
        name: 'Applications of Trigonometry',
        progressPercent: 0,
        topics: [
          { id: 'T-9-1', name: 'Heights and Distances', isCompleted: false },
        ]
      }
    ]
  },
  {
    id: 'SYL-002',
    class: 'Class 11 Sci',
    subject: 'Physics',
    overallProgress: 45,
    chapters: [
      {
        id: 'CH-1',
        name: 'Physical World',
        progressPercent: 100,
        topics: [
          { id: 'T-1-1', name: 'Physics, scope and excitement', isCompleted: true, completionDate: '2023-05-10' },
        ]
      },
      {
        id: 'CH-5',
        name: 'Laws of Motion',
        progressPercent: 60,
        topics: [
          { id: 'T-5-1', name: 'Intuitive concept of force', isCompleted: true, completionDate: '2023-10-10' },
          { id: 'T-5-2', name: 'Inertia, Newton\'s first law', isCompleted: true, completionDate: '2023-10-12' },
          { id: 'T-5-3', name: 'Momentum and Newton\'s second law', isCompleted: true, completionDate: '2023-10-15' },
          { id: 'T-5-4', name: 'Law of conservation of momentum', isCompleted: false },
        ]
      }
    ]
  }
];
