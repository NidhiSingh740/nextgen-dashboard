# Next-Gen Learning Dashboard Prototype

A frontend dashboard built to practice building high-performance, dark-mode user interfaces. The application syncs with a live Supabase PostgreSQL database to fetch active courses and implements fluid animations with spring physics.

## 🛠️ The Tech Stack

- **Framework:** Next.js (App Router)
- **Database:** Supabase (PostgreSQL)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

---

## 📐 Implementation & Architecture

### Server vs. Client Components Split
To keep the bundle size small and handle data fetching efficiently, I split the architecture into server and client files:
- **Server Component (`src/app/page.tsx`)**: Handles fetching the raw data from Supabase securely on the backend. This keeps the database query and initialization logic completely hidden from the browser.
- **Client Components (`Sidebar.tsx`, `CourseCard.tsx`, `ActivityTile.tsx`, `HeroTile.tsx`)**: Used for components that need client-side interactivity, state hooks (`useState`, `useEffect`), or custom Framer Motion animations.

### Performance & Animation Strategy
- **Preventing Layout Shifts (CLS):** To avoid triggering heavy browser repaints, all animations and hover interactions rely strictly on hardware-accelerated CSS properties like `transform` (scale/translate) and `opacity`.
- **Staggered Entrance:** The bento grid items do not pop onto the screen all at once; they use a staggered delay to slide up and fade in sequentially when the page loads.
- **Spring Physics:** Sidebar navigation and grid cards use custom spring dynamics (`stiffness: 300`, `damping: 20`) to make the interface feel responsive and natural rather than linear.

---

## ⚡ Challenges Faced & Fixes

### 1. Fixing React Hydration Mismatches
- **The Problem:** The `ActivityTile` contribution map initially generated its random grid on render using `Math.random()`. This caused a mismatch because the markup compiled on the server didn't match the client browser, which triggered hydration errors and broke the surrounding layout.
- **The Solution:** I wrapped the random grid generator inside a `useEffect` hook. This ensures the component mounts with a stable fallback structure first, and the random layout compiles safely on the client side afterward.

### 2. Next.js Data Caching & Supabase RLS Policies
- **The Problem:** After manually inserting mock rows into PostgreSQL, the new cards wouldn't render because Next.js was heavily caching the initial empty state. Additionally, Supabase's default Row Level Security (RLS) rules were blocking public reads.
- **The Solution:** I added `export const dynamic = "force-dynamic"` at the root of the page to force fresh data fetches on refresh, and disabled RLS/added a public select policy in the Supabase editor to allow the app to read the table.

---
