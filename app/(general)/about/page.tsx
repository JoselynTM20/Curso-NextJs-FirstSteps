import type { Metadata } from "next";


//solo cuando es estatico se usa así
export const metadata: Metadata = {
 title: 'About Page',
 description: 'This is the about page',
};


export default function AboutPage(){
    return(
        <span className="text-5xl ">About Page</span>
    )
}