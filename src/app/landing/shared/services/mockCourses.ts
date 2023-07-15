import { Course, CoursesByTechnology } from "../interfaces/course";

const web: Course[] = [
  {
    category: "Fullstack",
    name: "Fullstack Modern Javascript",
    href: '#',
    image: "assets/img/card1.jpg",
    price: 20,
    numberOfClasses: 12,
    studentGroupSize: 120,
    rating: 4.5
  },
  {
    category: "Frontend",
    name: "Design System with React",
    href: '#',
    image: "assets/img/card2.jpg",
    price: 20,
    numberOfClasses: 12,
    rating: 4.5
  },
  {
    category: "UI/UX Design",
    name: "Design Banner with Figma",
    href: '#',
    image: "assets/img/card3.jpg",
    price: 11,
    numberOfClasses: 12,
    rating: 4.5
  },
  {
    category: "Graphic Design",
    name: "Graphic design with Figma",
    href: '#',
    image: "assets/img/card4.jpg",
    price: 20,
    numberOfClasses: 12,
    rating: 4.5
  }
]

function copyAndShuffle(courses: Course[]){
  const randomSign = () => Math.random() - 0.5
  return [...courses].sort(randomSign)
}


export const mockCourses: CoursesByTechnology = {
  "Web": web,
  "Mobile": copyAndShuffle(web),
  "Data": copyAndShuffle(web),
  "Cloud": copyAndShuffle(web)
} 