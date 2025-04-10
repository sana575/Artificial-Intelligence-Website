'use client';

import React from "react";
import courseData from "../data/Ai_courses.json";
import { BackgroundGradient } from "./ui/backround-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = (courseData as Course[]).filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900 text-white">
      <div>
        <div className="py-10 text-center">
          <h1 className="text-base text-teal-600 font-semibold">
            FEATURED COURSES
          </h1>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient>
                <div>test</div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">text</div>
    </div>
  );
}export default FeaturedCourses;
