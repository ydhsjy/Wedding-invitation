import { assetPath } from "@/lib/utils";

export type Couple = {
  role: string;
  name: string;
  parents: string;
  image: string;
  background: string;
};

export type WeddingEvent = {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
  image: string;
};

export type TimelineStory = {
  year: string;
  title: string;
  description: string;
};

export type Wish = {
  name: string;
  attendance: "Hadir" | "Berhalangan";
  message: string;
};

export const wedding = {
  coupleNames: "Yudha & Alda",
  groomFirstName: "Yudha",
  brideFirstName: "Alda",
  dateLabel: "Jumat, 26 Juni 2026",
  isoDate: "2026-06-26T11:00:00+07:00",
  location: "Kupang, Nusa Tenggara Timur",
  quote:
    "Dan mereka keduanya akan menjadi satu daging, jadi mereka tidak lagi menjadi dua orang, melainkan satu. Oleh karena itu apa yang telah dipersatukan Tuhan, janganlah manusia memisahkan.",
  quoteSource: "Markus 10:8-9",
  marriageQuote:
    "A great marriage is not when the 'perfect couple' comes together. It is when an imperfect couple learns to enjoy their differences.",
  audio: assetPath("/assets/assetsmusicmp3.mp3"),
  images: {
    openingSlides: [
      assetPath("/assets/Slide1.jpg"),
      assetPath("/assets/Slide2.jpg"),
      assetPath("/assets/Slide3.jpg"),
      assetPath("/assets/Slide4.jpg"),
      assetPath("/assets/Slide5.jpg"),
      assetPath("/assets/Slide6.jpg"),
      assetPath("/assets/Slide7.jpg"),
      assetPath("/assets/Slide8.jpg")
    ],
    opening: assetPath("/assets/awal.jpeg"),
    desktop: assetPath("/assets/Desktop.jpeg"),
    hero: assetPath("/assets/kanan%20awal.jpeg"),
    quote: assetPath("/assets/bg1.jpeg"),
    countdown: assetPath("/assets/bg%20quote.jpg"),
    marriageQuote: assetPath("/assets/quote.jpeg"),
    closing: assetPath("/assets/ending.jpeg")
  },
  couples: [
    {
      role: "Mempelai Wanita",
      name: "Arnalda Janssencia Lopes",
      parents: "Putri kedua dari Bapak Kristovao Lopes & Ibu Josefa Adolfina Thani",
      image: assetPath("/assets/Bride.jpeg"),
      background: assetPath("/assets/bg%20bride.jpg")
    },
    {
      role: "Mempelai Pria",
      name: "Albertus Yudha Sanjaya",
      parents: "Putra kedua dari Bapak Budiharso & Ibu Waldetrudis",
      image: assetPath("/assets/Groom.jpg"),
      background: assetPath("/assets/bg%20groom.jpg")
    }
  ] satisfies Couple[],
  events: [
    {
      title: "Pemberkatan",
      date: "Jumat, 26 Juni 2026",
      time: "11.00 WIB - selesai",
      venue: "Gereja Paroki St. Gregorius Agung Oeleta",
      address: "Oeleta, Kota Kupang",
      mapUrl: "https://maps.app.goo.gl/Lizi1yNfQDGyqqXA7",
      image: assetPath("/assets/bg2.png")
    },
    {
      title: "Resepsi",
      date: "Jumat, 26 Juni 2026",
      time: "18.00 WITA - selesai",
      venue: "Subasuka Paradise",
      address: "Jl. Terusan Timor Raya No.126, Klp. Lima, Kota Kupang",
      mapUrl: "https://maps.app.goo.gl/Pm9YNXRVp7oNwc8M7",
      image: assetPath("/assets/bg3.png")
    }
  ] satisfies WeddingEvent[],
  gallery: [
    assetPath("/assets/gallery-1.jpeg"),
    assetPath("/assets/gallery-2.jpeg"),
    assetPath("/assets/gallery-3.jpeg"),
    assetPath("/assets/gallery-4.jpeg"),
    assetPath("/assets/gallery-5.jpeg"),
    assetPath("/assets/gallery-6.jpeg"),
    assetPath("/assets/gallery-7.jpeg"),
    assetPath("/assets/gallery-8.jpeg"),
    assetPath("/assets/gallery-9.jpeg"),
    assetPath("/assets/gallery-10.jpeg"),
    assetPath("/assets/gallery-11.jpeg"),
    assetPath("/assets/gallery-12.jpeg"),
    assetPath("/assets/gallery-13.jpeg"),
    assetPath("/assets/gallery-14.jpeg"),
    assetPath("/assets/gallery-15.jpeg"),
    assetPath("/assets/gallery-16.jpeg"),
    assetPath("/assets/gallery-17.jpeg"),
    assetPath("/assets/gallery-18.jpeg"),
    assetPath("/assets/gallery-19.jpeg"),
    assetPath("/assets/gallery-20.jpeg")
  ],
  stories: [
    {
      year: "2019",
      title: "Pertemuan Pertama",
      description: "Sebuah pertemuan sederhana yang perlahan menjadi percakapan panjang dan penuh doa."
    },
    {
      year: "2022",
      title: "Bertumbuh Bersama",
      description: "Kasih kami bertumbuh melalui jarak, waktu, keluarga, dan keberanian untuk saling memilih."
    },
    {
      year: "2026",
      title: "Menuju Sakramen",
      description: "Dengan hati penuh syukur, kami melangkah menuju janji suci di hadapan Tuhan."
    }
  ] satisfies TimelineStory[],
  wishes: [
    {
      name: "Keluarga Besar",
      attendance: "Hadir",
      message: "Semoga Tuhan memberkati perjalanan rumah tangga Yudha dan Alda."
    },
    {
      name: "Sahabat",
      attendance: "Hadir",
      message: "Bahagia selalu, saling menguatkan, dan penuh kasih sepanjang hidup."
    }
  ] satisfies Wish[],
  gift: {
    bank: "Bank Mandiri",
    account: "1234567890",
    name: "Arnalda Janssencia Lopes"
  }
};
