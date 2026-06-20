export const dynamic = "force-dynamic";

import React from "react";
import { supabase } from "../lib/supabase";
import Sidebar from "../components/Sidebar";
import BentoGrid from "../components/BentoGrid";
import HeroTile from "../components/HeroTile";
import ActivityTile from "../components/ActivityTile";
import CourseCard from "../components/CourseCard";
import { Course } from "../types/database.type";

async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (data as Course[]) || [];
}

export default async function Page() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 antialiased flex">
      <Sidebar />
      <div className="flex-1 lg:pl-64 transition-[padding] duration-300 ease-in-out min-w-0 max-lg:pt-16 max-sm:pb-16">
        <div className="max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
          <BentoGrid>
            <HeroTile />
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
            <ActivityTile />
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}