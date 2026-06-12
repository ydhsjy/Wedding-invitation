import { assetPath } from "@/lib/utils";

export type Couple = {
  role: string;
  name: string;
  nickname: string;
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

export type GiftAccount = {
  bank: string;
  account: string;
  name: string;
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
    desktop: assetPath("/assets/optimized/Desktop.webp"),
    hero: assetPath("/assets/kanan%20awal.jpeg"),
    sectionDivider: assetPath("/assets/bg%20section.jpeg"),
    marriageDivider: assetPath("/assets/bg%20mariage.jpeg"),
    quote: assetPath("/assets/bg1.jpeg"),
    quoteFrame: assetPath("/assets/bg%20frame.png"),
    quoteSecondFrame: assetPath("/assets/bg%20quote.png"),
    countdown: assetPath("/assets/bg%20quote.png"),
    marriageQuote: assetPath("/assets/Tes1.jpg"),
    closing: assetPath("/assets/Ending.jpg")
  },
  couples: [
    {
      role: "Mempelai Wanita",
      name: "Arnalda Janssencia Lopes",
      nickname: "Alda",
      parents: "Putri kedua dari Bapak Cristovao Lopes & Ibu Josefa Adolfina Thani",
      image: assetPath("/assets/Bride.jpeg"),
      background: assetPath("/assets/bg%20bride.jpg")
    },
    {
      role: "Mempelai Pria",
      name: "Albertus Yudha Sanjaya",
      nickname: "Yudha",
      parents: "Putra kedua dari Bapak Budiharso & Ibu Waldetrudis",
      image: assetPath("/assets/optimized/Groom.webp"),
      background: assetPath("/assets/bg%20groom.jpg")
    }
  ] satisfies Couple[],
  events: [
    {
      title: "Pemberkatan",
      date: "Jumat, 26 Juni 2026",
      time: "10.00 WITA - selesai",
      venue: "Gereja Paroki St. Gregorius Agung Oeleta",
      address: "Oeleta, Kota Kupang",
      mapUrl: "https://maps.app.goo.gl/Lizi1yNfQDGyqqXA7",
      image: assetPath("/assets/bg%20pemberkatan.png")
    },
    {
      title: "Resepsi",
      date: "Jumat, 26 Juni 2026",
      time: "18.00 WITA - selesai",
      venue: "Subasuka Paradise",
      address: "Jl. Terusan Timor Raya No.126, Klp. Lima, Kota Kupang",
      mapUrl: "https://maps.app.goo.gl/Pm9YNXRVp7oNwc8M7",
      image: assetPath("/assets/bg%20resepsi.png")
    }
  ] satisfies WeddingEvent[],
  gallery: [
    assetPath("/assets/optimized/gallery-1.webp"),
    assetPath("/assets/optimized/gallery-2.webp"),
    assetPath("/assets/optimized/gallery-3.webp"),
    assetPath("/assets/optimized/gallery-4.webp"),
    assetPath("/assets/optimized/gallery-5.webp"),
    assetPath("/assets/optimized/gallery-6.webp"),
    assetPath("/assets/optimized/gallery-7.webp"),
    assetPath("/assets/optimized/gallery-8.webp"),
    assetPath("/assets/optimized/gallery-9.webp"),
    assetPath("/assets/optimized/gallery-10.webp"),
    assetPath("/assets/optimized/gallery-11.webp"),
    assetPath("/assets/optimized/gallery-12.webp"),
    assetPath("/assets/optimized/gallery-13.webp"),
    assetPath("/assets/optimized/gallery-14.webp"),
    assetPath("/assets/optimized/gallery-15.webp"),
    assetPath("/assets/optimized/gallery-16.webp"),
    assetPath("/assets/optimized/gallery-17.webp"),
    assetPath("/assets/optimized/gallery-18.webp"),
    assetPath("/assets/optimized/gallery-19.webp"),
    assetPath("/assets/optimized/gallery-20.webp"),
    assetPath("/assets/optimized/gallery-21.webp"),
    assetPath("/assets/optimized/gallery-22.webp"),
    assetPath("/assets/optimized/gallery-23.webp"),
    assetPath("/assets/optimized/gallery-24.webp"),
    assetPath("/assets/optimized/gallery-25.webp"),
    assetPath("/assets/optimized/gallery-26.webp"),
    assetPath("/assets/optimized/gallery-27.webp"),
    assetPath("/assets/optimized/gallery-28.webp"),
    assetPath("/assets/optimized/gallery-29.webp"),
    assetPath("/assets/optimized/gallery-30.webp")
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
  wishes: [] satisfies Wish[],
  gift: {
    bank: "Bank Mandiri",
    logo: assetPath("/assets/BMRI.png"),
    address:
      "BTN Korem Oeleta blok F.19, RT.008/RW.003, Kel. Penkase Oeleta, Kec. Alak, Kota Kupang, NTT.",
    accounts: [
      {
        bank: "Bank Mandiri",
        account: "1810001149096",
        name: "Arnalda Janssencia Lopes"
      },
      {
        bank: "Bank Mandiri",
        account: "1810000568700",
        name: "Albertus Yudha Sanjaya"
      }
    ] satisfies GiftAccount[]
  }
};
