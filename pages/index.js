import Head from 'next/head'
import Navbar from "../components/navbar";
import ReviewCard from "../components/review-card";
import LessonCard from "../components/lesson-card";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className="lessons-div flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-x-3 md:space-x-32 sm:space-y-0 mt-20">
    <ReviewCard/>
    <LessonCard/>
    </div>
    </div>
  )
}
