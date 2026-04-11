🎬 WatchNext Movie Recommendation App

A modern movie recommendation landing page built with Next.js, TypeScript, and Tailwind CSS, featuring categorized movie sections.

---

🚀 Features

🏠 Landing Page

- Hero section with call-to-action
- Premium section with call-to-action
- Clean and responsive UI
- Component-based architecture

🎥 Movie Sections

- ✅ Recommended Movies
- 🔥 Popular Movies
- 📈 Trending Movies
- 🆕 Latest Movies

---

Premium Benefits:

- 📧 Personalized movie recommendations via email (planned)
- 🎬 Insights into upcoming movies
- 🚀 Early access to trailers & teasers (planned)
- 🔔 Notifications for movie releases (planned)

---

🧱 Project Structure

src/
 ├── app/
 │   └── page.tsx
 ├── components/
 │   ├── layout/
 │   │   ├── Navbar.tsx
 │   │   └── Footer.tsx
 │   ├── home/
 │   │   ├── Hero.tsx
 │   │   ├── PremiumCta.tsx
 │   │   ├── MovieCard.tsx
 │   │   ├── PopularMovies.tsx
 │   │   ├── TrendingMovies.tsx
 │   │   └── LatestMovies.tsx
 │   ├── premium/
 │   │   ├── PremiumBanner.tsx
 │   │   ├── PremiumFeatures.tsx
 ├── data/
 │   └── movies.ts
 ├── types/
 │   └── movies.ts

---

⚙️ Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

---

🧠 Key Concepts Used

- Component-based architecture
- Reusable UI patterns
- Type safety with TypeScript interfaces
- Separation of concerns (data, types, UI)

---

🛠️ Getting Started

1. Clone the repository

git clone <your-repo-url>
cd movie-reco

2. Install dependencies

npm install

3. Run the development server

npm run dev

---

🧪 Current Limitations

- Uses static/mock data (no real API yet)
- No authentication or payment integration
- No backend services (emails, notifications)

---

🔮 Future Improvements

- 🔌 Integrate movie API (e.g., TMDB)
- 🔐 Add authentication (NextAuth / Clerk)
- 💳 Implement subscription payments (Stripe)
- 📧 Email recommendation system
- 🔔 Real-time notifications
- 🎞️ Trailer and teaser integration

---

📌 Notes

This project is structured to scale into a production-ready application, with clear separation between UI, logic, and data layers.

---

👨‍💻 Author

Ebenezer Cheetham-West

---

⭐ Acknowledgements

Built as part of a learning journey into:

- Modern frontend architecture
- Scalable React patterns
- Real-world product design thinking

---
