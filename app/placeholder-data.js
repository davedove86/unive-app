const userDetails = {
  firstName: 'Jane',
  lastName: 'Doe',
  role: 'Student',
  avatar: '/icon.png', // profile image not showing using path
}

const notesData = [
  {
    id: 1,
    title: 'HTML',
    content: 'HTML is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript.',
    date: '01/02/2024',
  },
  {
    id: 2,
    title: 'CSS',
    content: 'CSS is a style sheet language used for describing the presentation of a document written in HTML. CSS is used to define styles for your web pages, including the design, layout, and variations in display for different devices and screen sizes.',
    date: '05/02/2024',
  },
  {
    id: 3,
    title: 'JavaScript',
    content: 'JavaScript is a programming language that enables interactive web pages. It is an essential technology for web development and is supported by all modern web browsers. JavaScript is used to create dynamic, interactive web pages that can respond to user input.',

    date: '12/02/2024',
  },
  {
    id: 4,
    title: 'React',
    content: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
    date: '15/02/2024',
  },
  {
    id: 5,
    title: 'Next.js',
    content: 'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.',
    date: '19/02/2024',
  },
];

const coursesData = [
  {
    id: 1,
    course: 'Web Development',
    subject: 'HTML & CSS Fundamentals',
    date: '01-02-2024',
    time: '10:00',
    currentGrade: 'A',
    gradeAverage: 'A',
    icon: '/icon.png',
  },
  {
    id: 2,
    course: 'Web Development',
    subject: 'Javascript & The DOM',
    date: '05-02-2024',
    time: '10:00',
    currentGrade: 'A',
    gradeAverage: 'B',
    icon: '/icon.png',
  },
  {
    id: 3,
    course: 'Computer Science',
    subject: 'Python Basics',
    date: '12-02-2024',
    time: '10:00',
    currentGrade: 'C',
    gradeAverage: 'A',
    icon: '/icon.png',
  },
  {
    id: 4,
    course: 'Computer Science',
    subject: 'React & Redux',
    date: '15-02-2024',
    time: '10:00',
    currentGrade: 'B',
    gradeAverage: 'A',
    icon: '/icon.png',
  },
  {
    id: 5,
    course: 'Computer Science',
    subject: 'The Next.js Framework',
    date: '19-02-2024',
    time: '10:00',
    currentGrade: 'C',
    gradeAverage: 'B',
    icon: '/icon.png',
  },
];

const messagesData = [
  {
    id: 1,
    name: 'Paul James',
    message: 'Hello, how are you?',
    date: '01/02/2024',
  },
  {
    id: 2,
    name: 'Paul James',
    message: 'I am good, thank you.',
    date: '05/02/2024',
  },
  {
    id: 3,
    name: 'Paul James',
    message: 'That is good to hear.',
    date: '12/02/2024',
  },
  {
    id: 4,
    name: 'Paul James',
    message: 'Yes, it is.',
    date: '15/02/2024',
  },
  {
    id: 5,
    name: 'Paul James',
    message: 'What are you working on?',
    date: '19/02/2024',
  },

  {
    id: 6,
    name: 'Paul James',
    message: 'I am working on my React project.',
    date: '01/02/2024',
  },
  {
    id: 7,
    name: 'Paul James',
    message: 'That sounds interesting.',
    date: '05/02/2024',
  },
];


export { userDetails, notesData, coursesData, messagesData };
