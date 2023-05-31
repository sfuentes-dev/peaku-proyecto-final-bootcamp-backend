import db from './db/connection.js'

import Todo from './models/todo.js'
import Blog from './models/blog.js'
import Discount from './models/discount.js'
import Plan from './models/plan.js'
import Testimonial from './models/testimonial.js'

const createTalbes = async () => {
  try {
    await db.sync({ force: true })
    console.log('Tables created!')
    await seedData()
    process.exit()
  } catch (error) {
    console.error('Error creating tables', error)
  }
}

const seedData = async () => {
  try {
    await Todo.bulkCreate([
      {
        title: 'Sign Up',
        text: 'Completes all the work associated with planning and processing.',
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685050580/sign-up_ztm36z.png',
      },
      {
        title: 'Worth of Money',
        text: 'After successful access then book from exclusive deals & pricing.',
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685050580/money_lqvdoc.png',
      },
      {
        title: 'Exciting Travel',
        text: 'Start and explore a wide range of exciting travel experience.',
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685050580/travel_ocqt8r.png',
      },
    ])

    await Blog.bulkCreate([
      {
        title: 'The Amazing Difference a Year of Travelling.',
        date: 'July 27, 2021',
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685397344/blog-8_agdeiv.png',
      },
      {
        title: 'Travel far enough, you meet yourself.',
        date: 'August 27, 2021',
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685397344/blog-7_iirlxw.png',
      },
      {
        title: 'How to Save Money While Visiting Africa.',
        date: 'September 27, 2021',
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685397343/blog-5_i5orcy.png',
      },
      {
        title: 'Reflections on 5 Months of Travel: Time to Hang.',
        date: 'Octuber 27, 2021',
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685397343/blog-3_xxqg50.png',
      },
      {
        title: 'Tips for travelling in Europe.',
        date: 'December 27, 2021',
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685397343/blog-6_hgqv9j.png',
      },
      {
        title: 'The beauty and the great idea of travelling to Kyoto.',
        date: 'January 27, 2022',
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685397343/blog-2_dlfkas.png',
      },
      {
        title: 'Do you want to know Mexico? Start in Cancun.',
        date: 'February 27, 2022',
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685397343/blog-4_sw2npn.png',
      },
      {
        title: 'Tips for travelling in Japan.',
        date: 'March  27, 2022',
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685397343/blog-1_wlh3vj.png',
      },
    ])

    await Discount.bulkCreate([
      {
        city: 'Madrid',
        country: 'Spain',
        rating: 4.8,
        price: 950,
        discount: 850,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/madrid_vrjie3.jpg',
      },
      {
        city: 'Firenze',
        country: 'Italy',
        rating: 4.5,
        price: 850,
        discount: 750,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/Firenze_tz5uln.jpg',
      },
      {
        city: 'Paris',
        country: 'France',
        rating: 4.4,
        price: 699,
        discount: 599,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/paris_ogojvu.jpg',
      },
      {
        city: 'London',
        country: 'UK',
        rating: 4.8,
        price: 850,
        discount: 750,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/london_zkrldm.jpg',
      },
      {
        city: 'Otawa',
        country: 'Canada',
        rating: 4.9,
        price: 890,
        discount: 790,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/otawa_irn0wu.jpg',
      },
      {
        city: 'Kioto',
        country: 'Japan',
        rating: 5.0,
        price: 1050,
        discount: 950,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/kioto_n3xmwf.jpg',
      },
      {
        city: 'Tokyo',
        country: 'Japan',
        rating: 4.9,
        price: 1100,
        discount: 980,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/tokyo_ao6h6n.jpg',
      },
      {
        city: 'Reikiavik',
        country: 'Iceland',
        rating: 4.8,
        price: 750,
        discount: 650,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/Reikiavik_sjqzrr.jpg',
      },
    ])

    await Plan.bulkCreate([
      {
        city: 'Rome',
        country: 'Italy',
        price: 5.42,
        duration: '10 Days Trip',
        rating: 4.8,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685393431/rome_ped1ew.jpg',
      },
      {
        city: 'London',
        country: 'UK',
        price: 2.42,
        duration: '7 Days Trip',
        rating: 4.7,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/london_zkrldm.jpg',
      },
      {
        city: 'Osaka',
        country: 'Japan',
        price: 5.42,
        duration: '10 Days Trip',
        rating: 4.8,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685393431/Osaka_stengg.jpg',
      },
      {
        city: 'Paris',
        country: 'France',
        price: 4.35,
        duration: '7 Days Trip',
        rating: 4.9,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/paris_ogojvu.jpg',
      },
      {
        city: 'Orlando',
        country: 'USA',
        price: 5.25,
        duration: '9 Days Trip',
        rating: 4.9,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685393431/Orlando_onw4bb.jpg',
      },
      {
        city: 'Kioto',
        country: 'Japan',
        price: 4.5,
        duration: '10 Days Trip',
        rating: 5.0,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/kioto_n3xmwf.jpg',
      },
      {
        city: 'Cancun',
        country: 'Mexico',
        price: 4.8,
        duration: '10 Days Trip',
        rating: 4.9,
        imgUrl:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685393431/Cancun_lgr1ex.jpg',
      },
    ])

    await Testimonial.bulkCreate([
      {
        avatar:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685405604/avatar-1_lviojy.png',
        description:
          'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
        name: 'Mike Taylor',
        city: 'Lahore',
        country: 'Pakistan',
      },
      {
        avatar:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685405804/avatar-2_hwizjh.png',
        description:
          'Kyoto is a beautiful, classic city, rich in Japanese history and resplendent in temples, shrines, and natural beauty.',
        name: 'Janeth Smith',
        city: 'London',
        country: 'UK',
      },
      {
        avatar:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685405736/avatar-3_fifoy5.png',
        description:
          'Paris is known for its stunning architecture, and it definitely deserves the hype of the travel.',
        name: 'John Doe',
        city: 'Berlin',
        country: 'Germany',
      },
      {
        avatar:
          'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685405803/avatar-4_o6vjto.png',
        description:
          'If you are looking for a beautiful, tropical destination with swim up bars and lots of activities, Cancún is worth visiting for you.',
        name: 'Samantha Moreau',
        city: 'Montpellier',
        country: 'France',
      },
    ])

    console.log('Seed data inserted successfully')
  } catch (error) {
    console.log('Error inserting seed data:', error)
  } finally {
  }
}

createTalbes()
