// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================
var header = {
  name: {
    firstname: 'Evgen',
    lastname: 'Mytsyk',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '800 $ в місяць',
  address: 'Ukraine Irpin, Zahidna str. 12.',
}

var footer = {
  social: {
    email: {
      text: 'evgeniymytsyk@gmail.com',
      href: 'mailto:evgeniymytsyk@gmail.com',
    },
    phone: {
      text: '+380504140502',
      href: 'tel:+380504140502',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/evgeniy-mytsyk/',
    },
  },
}
// ================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },

      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc..',
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 8,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Furniture construction',
          isMain: true,
        },
        {
          name: 'Marathon Running',
          isMain: true,
        },
        {
          name: 'Aircraft Traveling',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'Donbass State Technical Univelsity',
          year: '2003-2008',
          isEnd: true,
        },
        {
          name: 'Real Estate School',
          year: '20010-2011',
          isEnd: true,
        },
        {
          name: 'School IT Brains',
          year: '2023-till now',
          isEnd: false,
        },
      ],
      certificate: [
        {
          name: 'IT Brains',
          id: '123',
        },
        {
          name: 'EPAM',
          id: '234',
        },
        {
          name: 'HTML',
          id: '345',
        },
      ],
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    page: {
      title: 'Resume | My Work History',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://www.it-brains.com.ua/practicum/?utm=tg',
          },
          duration: {
            from: '10.10.2023',
            to: '01.01.2024',
          },
          prodjectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://www.resume.com.ua/',
              about: 'Description about prodject',
              stacksAmount: 4,
              awardsAmount: 5,

              stacks: [
                {
                  name: 'HTML',
                },
                {
                  name: 'Node.js',
                },
                {
                  name: 'React.js',
                },
              ],
              awards: [
                {
                  name: 'Description about award #1',
                },
                {
                  name: 'Description about award #2',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
