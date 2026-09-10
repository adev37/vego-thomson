# Hanuman Healthcare — MERN Clone

Yeh project "Hanuman Healthcare" website ka clone hai, MERN stack (MongoDB, Express, React,
Node) me banaya gaya hai. Splash/intro screen pe click karte hi wo **slide-up animation**
se upar chala jaata hai aur Home page reveal hota hai — jaisa original screenshots me hai.

## Structure

```
hanuman-healthcare/
├── client/          # React frontend
│   └── src/
│       ├── components/   Splash, Navbar, Hero, Footer, Icons
│       ├── data/          categories.js (4 verticals ka data — yahin se edit karo)
│       └── pages/         Landing, About, OurServices, SendQuery, ContactUs
└── server/          # Express + MongoDB backend
    ├── models/       Query.js, Contact.js
    └── routes/       query.js, contact.js
```

## Kya kaam karta hai

- **Splash screen** (`/`): logo, motto, 4 verticals ke boxes, "Click Here Enter Website".
  Click karne par `.splash--leaving` class lagti hai jo CSS transition se poore screen ko
  `translateY(-100%)` kar deti hai (0.9s), neeche already-mounted Home page reveal hota hai.
  Ek baar enter karne ke baad `sessionStorage` me flag save hota hai, dobara `/` pe aane par
  splash nahi dikhega (tab tak jab tak browser tab band na ho).
- **Home page**: Navbar (Home/About/Our Services/Send Query/Contact Us + social icons),
  hero section jisme 4 verticals ke beech prev/next arrows se switch kar sakte ho, aur neeche
  wali colored bar jisme icons pe click karke bhi vertical switch hoti hai — jaise original
  me tha.
- **Send Query** aur **Contact Us** forms MongoDB me save hote hain Express API ke through.

## Setup

### 1. Backend

```bash
cd server
cp .env.example .env      # apna MongoDB URI daalo agar Atlas use kar rahe ho
npm install
npm run dev                # ya: npm start
```

Server `http://localhost:5000` par chalega. Local MongoDB chahiye (`mongod` running) ya
MongoDB Atlas ka connection string `.env` me daal do.

### 2. Frontend

```bash
cd client
npm install
npm start
```

React app `http://localhost:3000` par khulega. `package.json` me `"proxy": "http://localhost:5000"`
already set hai, isliye `/api/...` calls automatically backend tak pahunch jaayengi.

## Customize karna ho to

- **Text/colors/icons per vertical**: `client/src/data/categories.js` — isi ek file se
  Splash boxes, bottom bar aur Hero slider sab update ho jaate hain.
- **Real photos**: abhi hero image section me color-gradient + icon hai (asli photo files
  is environment me download nahi ho paayi). `client/src/components/Hero.js` me
  `.hero__image` div ke andar apni image daal do (`background-image` ya `<img>`).
- **Colors**: `client/src/index.css` ke top pe `:root` variables (`--maroon`, `--gold` etc).

## Deploy

- Client: `npm run build` (client folder me) → static files kisi bhi static host
  (Netlify/Vercel/Nginx) par daal do.
- Server: kisi Node host (Render/Railway/EC2) par `npm start`, `MONGODB_URI` env var set
  karke.
