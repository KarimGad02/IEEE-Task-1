//defining the database object
export interface Movie{
    id:number;
    title:string;
    author:string;
    releasedate: number;
}
//creating instances of the database object
export const movies: Movie[] = [
    {
        id: 1,
        title: "Harry Potter",
        author: "JK Rowling",
        releasedate: 2002 ,
    },
    {
        id: 2,
        title: "Best Movie Ever Made",
        author: "Karim Gad",
        releasedate: 2024
    },
    {
        id: 3,
        title: "Best Movie Ever Made 2",
        author: "Karim Gad",
        releasedate: 2024
    }
] 