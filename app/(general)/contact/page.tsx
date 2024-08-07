import type { Metadata } from "next";
import Image from 'next/image';

//type solo se usa para el tipado o la interfas

export const metadata: Metadata= {
 title: 'Contact Page',
 description: 'This is the contact page',
};
export default function ContactPage(){
    return(
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}