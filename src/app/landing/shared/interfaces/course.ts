export interface Course {
    href: string,
    category: string,
    name: string,
    image: string,
    price: number,
    numberOfClasses: number,
    studentGroupSize?: number,
    rating: number
}
