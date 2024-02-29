import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
    title: 'Contact',
    description: 'Page to contact',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {

    return <section className="min-h-screen flex justify-center items-center">{children}</section>
}