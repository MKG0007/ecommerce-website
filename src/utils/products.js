import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg03 from "../Images/double-sofa-03.png";

import productImg04 from "../Images/single-sofa-01.jpg";
import productImg05 from "../Images/single-sofa-02.jpg";
import productImg06 from "../Images/single-sofa-03.jpg";
import productImg007 from "../Images/single-sofa-04.png";

import productImg07 from "../Images/arm-chair-01.jpg";
import productImg08 from "../Images/arm-chair-02.jpg";
import productImg09 from "../Images/arm-chair-03.jpg";
import productImg10 from "../Images/arm-chair-01.jpg";

import phone01 from "../Images/phone-01.jpg";
import phone02 from "../Images/phone-02.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
import phone05 from "../Images/phone-05.jpg";
import phone06 from "../Images/phone-06.jpg";
import phone08 from "../Images/phone-08.png";

import watch01 from "../Images/watch-01.jpg";
import watch02 from "../Images/watch-02.jpg";
import watch03 from "../Images/watch-03.jpg";
import watch04 from "../Images/watch-04.jpg";

import wireless01 from "../Images/wireless-01.png";
import wireless02 from "../Images/wireless-02.png";
import wireless03 from "../Images/wireless-03.png";
import wireless04 from "../Images/wireless-04.png";

import sofaSlide from "../Images/hero-img.png";
import watchSlide from "../Images/watch-07.png";

export const SliderData = [
  {
    id: 1,
    title: "50% Off For Your First Shopping",
    desc: "Discover unbeatable deals and exclusive discounts on your first purchase with us!",
    cover: sofaSlide,
  },
  {
    id: 2,
    title: "50% Off For Your First Shopping",
    desc: "Enjoy amazing offers and shop top-quality products at half the price for your first order!",
    cover: phone08,
  },
  {
    id: 3,
    title: "50% Off For Your First Shopping",
    desc: "Kickstart your shopping journey with us and get incredible savings on your first buy!",
    cover: wireless01,
  },
  {
    id: 4,
    title: "50% Off For Your First Shopping",
    desc: "Join the shopping revolution and grab 50% off on your first purchase with us!",
    cover: watchSlide,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    subtitle: "Enjoy free delivery on all orders.",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe Payment",
    subtitle: "Pay securely with trusted methods.",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Secure Payment",
    subtitle: "Your transactions are fully protected.",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: "Back Guarantee",
    subtitle: "Get hassle-free returns on your orders.",
    bg: "#d6e5fb",
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Stone and Beam Westview ",
    imgUrl: productImg01,
    category: "sofa",
    price: 19300,
    discount: 30,
    shortDesc: "A stylish and comfortable sofa to elevate your living room.",
    description: "Enjoy the perfect blend of comfort and style with the Stone and Beam Westview sofa. Ideal for lounging and creating a cozy atmosphere in your home.",
    reviews: [
      {
        rating: 4.7,
        text: "Great sofa, extremely comfortable and stylish.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 25000,
    discount: 20,
    shortDesc: "Sleek and modern design for any contemporary space.",
    description: "The Rivet Bigelow sofa offers a contemporary look with high-quality fabric and a modern silhouette that will fit perfectly in your living room.",
    reviews: [
      {
        rating: 4.8,
        text: "This sofa is everything I was looking for. So stylish!",
      },
      {
        rating: 4.8,
        text: "Comfortable and looks amazing in my living room.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 890,
    discount: 15,
    shortDesc: "A perfect addition to your home office or lounge area.",
    description: "The Baltsar Chair combines elegance and comfort, offering great support for those long working hours or relaxing evenings.",
    reviews: [
      {
        rating: 4.6,
        text: "Perfect chair for my home office. Highly recommend!",
      },
      {
        rating: 4.9,
        text: "Amazing chair, comfortable and sturdy.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 1000,
    discount: 35,
    shortDesc: "A luxurious chair designed for comfort and style.",
    description: "The Helmar Chair brings both comfort and modern aesthetics to any room. Its sleek design and soft upholstery make it the perfect addition to your home.",
    reviews: [
      {
        rating: 4.6,
        text: "Great quality and very comfortable!",
      },
      {
        rating: 4.9,
        text: "This chair is just perfect for my living room.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 10000,
    discount: 10,
    shortDesc: "A sleek smartphone with powerful features and performance.",
    description: "The Realme 8 is designed for those who demand high performance in a sleek package. Enjoy powerful performance, stunning visuals, and a great camera.",
    reviews: [
      {
        rating: 4.8,
        text: "An amazing phone with a great camera!",
      },
      {
        rating: 4.9,
        text: "Absolutely love this phone, great value for the price.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 30000,
    discount: 5,
    shortDesc: "Smartphone packed with features for the tech-savvy.",
    description: "One Plus Nord delivers a top-tier mobile experience with a stunning display, powerful performance, and an exceptional camera for those who want it all.",
    reviews: [
      {
        rating: 4.8,
        text: "The performance is incredible, and the camera is top-notch.",
      },
      {
        rating: 4.9,
        text: "Super fast and smooth, one of the best phones I've owned.",
      },
    ],
    avgRating: 4.8,
  },
];

export const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview",
    imgUrl: productImg01,
    category: "sofa",
    price: 19000,
    shortDesc: "A comfortable and stylish sofa with a modern design, perfect for your living room.",
    description: "The Stone and Beam Westview sofa offers a blend of style and comfort. Crafted with durable materials and designed to fit in with both contemporary and classic home decor, this sofa is ideal for lounging, reading, or entertaining guests. The soft fabric and plush cushions provide exceptional comfort while the sturdy frame ensures long-lasting use.",
    reviews: [
      {
        rating: 4.7,
        text: "A fantastic addition to my living room! Very comfortable and stylish."
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Rivet Bigelow Modern",
    imgUrl: productImg02,
    category: "sofa",
    price: 25300,
    shortDesc: "A modern, sleek sofa that combines style and functionality for a contemporary living space.",
    description: "The Rivet Bigelow Modern sofa brings a fresh, contemporary touch to your living room. Its clean lines, deep seats, and luxurious upholstery provide both comfort and elegance. Perfect for those who appreciate a minimalist aesthetic, this sofa adds a modern flair to any room while offering all-day comfort.",
    reviews: [
      {
        rating: 4.8,
        text: "Absolutely love this sofa! It's the perfect balance of style and comfort."
      },
      {
        rating: 4.8,
        text: "Great addition to my home. Looks amazing and feels really comfortable."
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Amazon Brand Modern Sofa",
    imgUrl: productImg03,
    category: "sofa",
    price: 17300,
    shortDesc: "A budget-friendly modern sofa offering comfort and style without breaking the bank.",
    description: "The Amazon Brand Modern Sofa is designed for those seeking a stylish and affordable seating option. Its modern silhouette, paired with soft cushions and a durable frame, makes it an excellent choice for living rooms or small apartments. Offering great value for money, this sofa delivers comfort and style without compromising on quality.",
    reviews: [
      {
        rating: 4.6,
        text: "A great sofa for the price! Comfortable and looks great in my living room."
      },
      {
        rating: 4.9,
        text: "Very happy with this purchase. It's comfortable and perfect for our space."
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "Rivet Bigelow Modern",
    imgUrl: productImg02,
    category: "sofa",
    price: 25300,
    shortDesc: "A modern, sleek sofa that combines style and functionality for a contemporary living space.",
    description: "The Rivet Bigelow Modern sofa brings a fresh, contemporary touch to your living room. Its clean lines, deep seats, and luxurious upholstery provide both comfort and elegance. Perfect for those who appreciate a minimalist aesthetic, this sofa adds a modern flair to any room while offering all-day comfort.",
    reviews: [
      {
        rating: 4.8,
        text: "Absolutely love this sofa! It's the perfect balance of style and comfort."
      },
      {
        rating: 4.8,
        text: "Great addition to my home. Looks amazing and feels really comfortable."
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Fluffy Sheep Sofa",
    imgUrl: productImg04,
    category: "sofa",
    price: 16300,
    shortDesc: "A cozy and plush sofa perfect for relaxing after a long day.",
    description: "The Fluffy Sheep Sofa offers the ultimate in comfort with its ultra-soft cushions and inviting design. Perfect for cozy evenings, this sofa is ideal for those who want to relax in style. Its soft fabric and ergonomic design provide comfort while complementing a variety of home decor styles.",
    reviews: [
      {
        rating: 4.6,
        text: "Incredibly comfortable and perfect for unwinding at the end of the day!"
      },
      {
        rating: 4.9,
        text: "This sofa is pure luxury. So soft and cozy, I can't get enough of it."
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Faux Velvet Sofa",
    imgUrl: productImg05,
    category: "sofa",
    price: 16300,
    shortDesc: "A luxurious faux velvet sofa that adds elegance to any room.",
    description: "The Faux Velvet Sofa combines elegance and comfort with its rich velvet upholstery. This sofa is perfect for those who want to elevate their living space with a touch of luxury. Its sleek lines and soft feel provide both style and comfort, making it a great choice for modern homes.",
    reviews: [
      {
        rating: 4.6,
        text: "The faux velvet is so soft, and it adds a touch of luxury to my living room."
      },
      {
        rating: 4.9,
        text: "I love the rich look of this sofa. It makes my living room feel so elegant."
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "06",
    productName: "Fluffy Sheep Sofa",
    imgUrl: productImg06,
    category: "sofa",
    price: 16300,
    shortDesc:
      "This luxurious Fluffy Sheep Sofa offers a cozy and stylish addition to your living room. Perfect for those who love comfort and elegance!",
    description:
      "The Fluffy Sheep Sofa combines both comfort and style with its plush, soft cushions and modern design. Its versatile design fits any interior, making it an ideal choice for your home or office. Whether you're lounging or hosting friends, this sofa is sure to impress!",
    reviews: [
      {
        rating: 4.6,
        text: "Great sofa! Extremely comfortable and adds a touch of elegance to my living room.",
      },
      {
        rating: 4.9,
        text: "I love this sofa! It's perfect for relaxing after a long day, and the design is sleek and stylish.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Sakarias Armchair",
    imgUrl: productImg07,
    category: "chair",
    price: 990,
    shortDesc:
      "The Sakarias Armchair combines comfort with a sleek design, perfect for both modern and classic living spaces.",
    description:
      "This armchair provides exceptional comfort with its ergonomic design and durable upholstery. The timeless design of the Sakarias Armchair will complement any room, whether it’s your living room, study, or office. A must-have for those who value both comfort and style.",
    reviews: [
      {
        rating: 4.6,
        text: "A very comfortable armchair! It’s stylish and fits perfectly in my living room.",
      },
      {
        rating: 4.9,
        text: "I couldn’t be happier with this chair. It’s extremely sturdy, and the design is beautiful!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "27",
    productName: "Modern Arm Sofa",
    imgUrl: productImg007,
    category: "sofa",
    price: 17300,
    shortDesc:
      "The Modern Arm Sofa is perfect for those seeking contemporary style and unbeatable comfort.",
    description:
      "Featuring a minimalist yet chic design, the Modern Arm Sofa is both practical and stylish. Its high-quality materials ensure comfort and durability, while its modern aesthetic makes it the perfect addition to any contemporary living room or office space.",
    reviews: [
      {
        rating: 4.6,
        text: "A perfect blend of modern design and comfort. It looks great in my living room!",
      },
      {
        rating: 4.9,
        text: "Love this sofa! It’s comfortable, stylish, and fits perfectly with my decor.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 890,
    shortDesc:
      "The Baltsar Chair combines sleek design with comfort, perfect for any modern home.",
    description:
      "With its contemporary design and ergonomic build, the Baltsar Chair ensures comfort and style. Made from high-quality materials, it’s designed to last and complement any room, from the living room to the office. The unique aesthetic of this chair will elevate your space effortlessly.",
    reviews: [
      {
        rating: 4.6,
        text: "The Baltsar Chair is incredibly comfortable and looks fantastic in my home office.",
      },
      {
        rating: 4.9,
        text: "Such a stylish and sturdy chair. I’m very impressed with its design and comfort.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 1120,
    shortDesc:
      "The Helmar Chair offers a combination of ergonomic design and modern appeal, ideal for any space.",
    description:
      "The Helmar Chair brings both style and comfort to your home. Its sleek design, ergonomic structure, and high-quality materials make it a standout piece that will enhance any living space. Whether in your office, lounge, or study, this chair delivers both function and form.",
    reviews: [
      {
        rating: 4.6,
        text: "The Helmar Chair is both stylish and supportive. It fits perfectly in my living room.",
      },
      {
        rating: 4.9,
        text: "Comfortable and modern design, ideal for my study. Highly recommend it!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "10",
    productName: "Apple iPhone 12 Pro",
    imgUrl: phone01,
    category: "mobile",
    price: 7990,
    shortDesc:
      "The Apple iPhone 12 Pro combines powerful features, sleek design, and advanced technology.",
    description:
      "The iPhone 12 Pro brings you the latest in mobile technology, with an improved camera system, OLED display, and powerful A14 Bionic chip. Whether you're using it for work or play, this phone is designed to meet your needs with speed, style, and innovation. A must-have for those who demand the best from their technology.",
    reviews: [
      {
        rating: 4.8,
        text: "Amazing phone! The camera quality is fantastic, and it runs incredibly fast.",
      },
      {
        rating: 4.9,
        text: "Best phone I’ve ever owned. The design is sleek, and the features are top-notch.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "Sakarias Armchair",
    imgUrl: productImg10,
    category: "chair",
    price: 990,
    shortDesc:
      "A stylish, comfortable armchair perfect for any modern living space.",
    description:
      "The Sakarias Armchair offers unmatched comfort with its ergonomic design and plush fabric. Its clean lines and timeless aesthetic make it suitable for any room, from a living room to an office. Durable, comfortable, and stylish, this armchair is a great addition to your home or workspace.",
    reviews: [
      {
        rating: 4.6,
        text: "Very comfortable armchair, and it looks great in my living room.",
      },
      {
        rating: 4.9,
        text: "A fantastic addition to my home. Stylish and very comfortable!",
      },
    ],
    avgRating: 4.7,
  },

  
    {
      id: "11",
      productName: "Apple iPhone 12 Max",
      imgUrl: phone02, // Replace with actual image URL
      category: "mobile",
      price: 7990,
      shortDesc:
        "The Apple iPhone 12 Max delivers top-tier performance with its powerful A14 Bionic chip, fantastic camera setup, and a large 6.7-inch Super Retina XDR display.",
      description:
        "The iPhone 12 Max is a powerhouse, featuring the A14 Bionic chip for incredibly fast performance. It offers a 6.7-inch Super Retina XDR display with stunning color accuracy and a 1200 nits peak brightness. The dual-camera system, including a 12MP Ultra-Wide and a 12MP Wide lens, captures exceptional photos in both low-light and bright conditions. 5G capabilities ensure lightning-fast download speeds, and the Ceramic Shield front cover enhances durability. With iOS, you're guaranteed smooth software integration and regular updates.",
      reviews: [
        {
          rating: 4.8,
          text: "Excellent performance, incredible display, and great camera quality. The battery life is impressive too!",
        },
        {
          rating: 4.9,
          text: "This phone is amazing! I love the screen size, and the A14 chip makes everything smooth and fast. Highly recommend it!",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "12",
      productName: "Realme 8",
      imgUrl: phone03, // Replace with actual image URL
      category: "mobile",
      price: 5990,
      shortDesc:
        "Realme 8 combines a sleek design with solid performance, featuring a 64MP quad-camera setup and a 6.4-inch Super AMOLED display.",
      description:
        "Realme 8 offers a 6.4-inch Super AMOLED display that produces vibrant colors and deep contrasts. It is powered by the MediaTek Helio G95 processor, ensuring smooth performance for both multitasking and gaming. The quad-camera setup includes a 64MP main sensor, an ultra-wide 119° lens, and two additional lenses for portrait and macro shots. The 5000mAh battery provides long-lasting usage, and it supports 30W fast charging to get you back up and running in no time.",
      reviews: [
        {
          rating: 4.8,
          text: "This phone is a great deal for the price. The camera quality is outstanding, and the display is bright and clear.",
        },
        {
          rating: 4.9,
          text: "Realme 8 is perfect for those looking for a budget phone with premium features. The fast charging and battery life are excellent!",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "13",
      productName: "One Plus Nord",
      imgUrl: phone04, // Replace with actual image URL
      category: "mobile",
      price: 25000,
      shortDesc:
        "One Plus Nord offers a balanced mix of performance, design, and camera capabilities, making it one of the best mid-range smartphones.",
      description:
        "The One Plus Nord boasts a 6.44-inch Fluid AMOLED display with a 90Hz refresh rate, offering a smooth and immersive experience. Powered by the Qualcomm Snapdragon 765G, it handles demanding applications with ease. The 48MP quad-camera setup captures great photos with rich details, while the 4115mAh battery lasts all day and supports 30T Warp Charge for quick recharging. OxygenOS offers a clean and user-friendly interface with regular software updates.",
      reviews: [
        {
          rating: 4.8,
          text: "The One Plus Nord is fantastic! Great value for money, with an amazing display, fast performance, and excellent cameras.",
        },
        {
          rating: 4.9,
          text: "Super smooth experience with the 90Hz display, and the battery lasts for a full day of heavy use. The camera setup is great for all types of shots.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "14",
      productName: "Apple iPhone 13 Pro",
      imgUrl: phone05, // Replace with actual image URL
      category: "mobile",
      price: 20000,
      shortDesc:
        "Apple iPhone 13 Pro offers a stunning 6.1-inch Super Retina XDR display, enhanced by ProMotion 120Hz, and is powered by the new A15 Bionic chip.",
      description:
        "The iPhone 13 Pro features a 6.1-inch Super Retina XDR display with ProMotion technology, providing a buttery-smooth 120Hz refresh rate. Powered by the A15 Bionic chip, it delivers incredible speed and performance. The camera system includes a 12MP triple-lens setup with an ultra-wide, wide, and telephoto lens, capable of capturing stunning photos in all conditions. The phone also features 5G capabilities, longer battery life, and MagSafe compatibility for wireless charging.",
      reviews: [
        {
          rating: 4.8,
          text: "The iPhone 13 Pro is a great upgrade, especially with the ProMotion display. The camera system is amazing for both photos and videos.",
        },
        {
          rating: 4.9,
          text: "Best iPhone I've ever used! The A15 Bionic chip makes a noticeable difference, and the ProMotion display is incredibly smooth.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "15",
      productName: "Samsung Galaxy S22",
      imgUrl: phone06, // Replace with actual image URL
      category: "mobile",
      price: 6990,
      shortDesc:
        "Samsung Galaxy S22 delivers excellent performance with a 6.1-inch Dynamic AMOLED 2X display and a powerful Snapdragon 8 Gen 1 chipset.",
      description:
        "The Samsung Galaxy S22 offers a 6.1-inch Dynamic AMOLED 2X display with a 120Hz refresh rate, providing a super-smooth viewing experience. Powered by the Snapdragon 8 Gen 1 processor, it offers top-tier performance for gaming, multitasking, and content consumption. The triple-camera system, including a 50MP main sensor, delivers sharp and detailed images. The phone also supports 25W fast charging, ensuring you'll get power quickly when needed. It also features 5G support for faster download speeds and improved future-proofing.",
      reviews: [
        {
          rating: 4.8,
          text: "The Samsung Galaxy S22 is a powerhouse. Great display, excellent camera quality, and the Snapdragon 8 Gen 1 chipset makes everything smooth.",
        },
        {
          rating: 4.9,
          text: "This phone is perfect for all kinds of tasks. Fast, smooth, and reliable. The camera system is top-notch, and the battery lasts long enough to get through a day of heavy use.",
        },
      ],
      avgRating: 4.8,
    },
  
      {
        id: "16",
        productName: "Rolex Watch",
        imgUrl: watch01, // replace with actual image URL
        category: "watch",
        price: 2999,
        shortDesc: "A luxury timepiece with impeccable craftsmanship and precision.",
        description: "The Rolex Watch is a symbol of elegance and luxury. Featuring high-quality stainless steel construction, a precision mechanical movement, and a timeless design, it is a perfect blend of form and function. Whether for casual wear or formal occasions, this watch ensures you make a statement wherever you go.",
        reviews: [
          {
            rating: 4.8,
            text: "An exceptional watch with great attention to detail and a classic design.",
          },
          {
            rating: 4.9,
            text: "A masterpiece! The craftsmanship is unrivaled and it keeps perfect time.",
          },
        ],
        avgRating: 4.8,
      },
      {
        id: "17",
        productName: "Timex Easy Reader Watch",
        imgUrl: watch02, // replace with actual image URL
        category: "watch",
        price: 2999,
        shortDesc: "An easy-to-read, classic watch with a comfortable fit.",
        description: "The Timex Easy Reader Watch combines a sleek design with practicality. Featuring a large, easy-to-read face and comfortable strap, it's perfect for those who value clarity and simplicity. Whether you're running errands or attending meetings, this watch will always be reliable and stylish.",
        reviews: [
          {
            rating: 4.8,
            text: "I love how clear the numbers are and how comfortable it feels on my wrist.",
          },
          {
            rating: 4.9,
            text: "This is exactly what I was looking for in a watch—simple yet stylish!",
          },
        ],
        avgRating: 4.8,
      },
      {
        id: "18",
        productName: "Rolex Watch",
        imgUrl: watch03, // replace with actual image URL
        category: "watch",
        price: 3000,
        shortDesc: "A refined and prestigious timepiece for discerning individuals.",
        description: "Crafted with precision and elegance, the Rolex Watch is a hallmark of luxury. With a classic design and a reliable movement, it offers timeless style for those who appreciate fine craftsmanship. Whether worn at a business meeting or a special event, the Rolex Watch exudes sophistication.",
        reviews: [
          {
            rating: 4.8,
            text: "A true symbol of excellence. The quality is remarkable, and it looks stunning on my wrist.",
          },
          {
            rating: 4.9,
            text: "The perfect watch for any occasion—elegant, precise, and durable.",
          },
        ],
        avgRating: 4.8,
      },
      {
        id: "19",
        productName: "Apple Watch",
        imgUrl: watch04, // replace with actual image URL
        category: "watch",
        price: 3999,
        shortDesc: "A cutting-edge smartwatch that combines technology and style.",
        description: "The Apple Watch is the ultimate fusion of technology and fashion. With advanced health monitoring features, fitness tracking, and a sleek design, it's the perfect companion for a modern lifestyle. Stay connected, track your fitness goals, and enjoy seamless functionality—all from your wrist.",
        reviews: [
          {
            rating: 4.8,
            text: "A game changer in wearable technology. It keeps me on top of my health and connected with ease.",
          },
          {
            rating: 4.9,
            text: "Absolutely love the versatility and features of the Apple Watch. It has everything I need in one device.",
          },
        ],
        avgRating: 4.8,
      },
      {
        id: "20",
        productName: "Beat Studio Wireless",
        imgUrl: wireless01, // replace with actual image URL
        category: "wireless",
        price: 1999,
        shortDesc: "Wireless headphones with superior sound quality and comfort.",
        description: "The Beat Studio Wireless headphones deliver premium sound quality and exceptional comfort. Designed for long listening sessions, these headphones feature noise-canceling technology to provide an immersive audio experience. Whether you’re working out or relaxing, the Beat Studio Wireless headphones are your perfect companion.",
        reviews: [
          {
            rating: 4.8,
            text: "Incredible sound and the noise cancellation is fantastic! Perfect for both work and play.",
          },
          {
            rating: 4.9,
            text: "These headphones provide the best listening experience I’ve had. Totally worth the investment.",
          },
        ],
        avgRating: 4.8,
      },
      {
        id: "21",
        productName: "Beat EP Headphones",
        imgUrl: wireless03, // replace with actual image URL
        category: "wireless",
        price: 1999,
        shortDesc: "Lightweight and durable headphones with a rich sound experience.",
        description: "The Beat EP Headphones offer a perfect balance of quality, comfort, and durability. With a sleek design and high-performance sound, they are built to last while providing an immersive audio experience. Whether you're at home or on the go, these headphones will keep you connected to your music in style.",
        reviews: [
          {
            rating: 4.8,
            text: "I’m impressed by the sound quality. Perfect for everyday use and the price is great too.",
          },
          {
            rating: 4.9,
            text: "These headphones are comfortable and sound amazing. Great for music lovers.",
          },
        ],
        avgRating: 4.8,
      },
      {
        id: "22",
        productName: "Black Headphones",
        imgUrl: wireless02, // replace with actual image URL
        category: "wireless",
        price: 1699,
        shortDesc: "Stylish black headphones with powerful sound and comfort.",
        description: "The Black Headphones offer a sleek and modern design combined with rich sound quality. Whether you’re on a conference call, watching movies, or listening to music, these headphones provide superior comfort and an immersive experience. The lightweight design ensures you can wear them all day without discomfort.",
        reviews: [
          {
            rating: 4.8,
            text: "These are my go-to headphones. Stylish, comfortable, and the sound is top-notch!",
          },
          {
            rating: 4.9,
            text: "Love the design and sound quality. Perfect for any occasion.",
          },
        ],
        avgRating: 4.8,
      },
      {
        id: "23",
        productName: "Bluetooth Headphones",
        imgUrl:   wireless04, // replace with actual image URL
        category: "wireless",
        price: 1399,
        shortDesc: "Affordable and high-quality Bluetooth headphones for everyday use.",
        description: "The Bluetooth Headphones provide an excellent combination of value and performance. With Bluetooth connectivity, they allow you to enjoy your music wirelessly with crystal-clear sound. The comfortable, foldable design makes them easy to carry around, making them perfect for daily commutes, workouts, or leisure time.",
        reviews: [
          {
            rating: 4.8,
            text: "Great value for the price. These headphones work well and sound great.",
          },
          {
            rating: 4.9,
            text: "I’m very impressed with the sound quality for the price. A great budget-friendly option.",
          },
        ],
        avgRating: 4.8,
      },
    ];
    