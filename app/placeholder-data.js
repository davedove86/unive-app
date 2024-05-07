const userDetails = {
  firstName: 'Jess',
  lastName: 'Doe',
  role: 'Student',
  avatar: '/icon.png', // profile image not showing using path
}

const notesData = [
  {
    id: 1,
    title: 'HTML',
    content: 'HTML is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. HTML elements are the building blocks of HTML pages, and are constructed using tags. HTML tags label pieces of content such as "heading", "paragraph", "table", and so on.',
    date: '01-02-2024',
  },
  {
    id: 2,
    title: 'CSS',
    content: 'CSS is a style sheet language used for describing the presentation of a document written in HTML. CSS is used to define styles for your web pages, including the design, layout, and variations in display for different devices and screen sizes.',
    date: '05-02-2024',
  },
  {
    id: 3,
    title: 'JavaScript',
    content: 'JavaScript is a programming language that enables interactive web pages. It is an essential technology for web development and is supported by all modern web browsers. JavaScript is used to create dynamic, interactive web pages that can respond to user input.',

    date: '12-02-2024',
  },
  {
    id: 4,
    title: 'React',
    content: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. It is a component-based, declarative, and efficient way of building large web applications. React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. It is a component-based, declarative, and efficient way of building large web applications. React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. It is a component-based, declarative, and efficient way of building large web applications.',
    date: '15-02-2024',
  },
  {
    id: 5,
    title: 'Next.js',
    content: 'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications. It is a popular choice for building web applications with React because it provides a great developer experience and performance. Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications. It is a popular choice for building web applications with React because it provides a great developer experience and performance. Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications. It is a popular choice for building web applications with React because it provides a great developer experience and performance.',
    date: '19-02-2024',
  },
];


export { userDetails, notesData };
