import { connectToMongo } from "@/libs/mongo.lib";
import ContactModel from "@/models/contact.model";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export default async (req: NextRequest, res: NextResponse) => {
    try {
        //await connectToMongo();
        console.log('ContactModel', ContactModel);
    } catch (e) {
        console.error(e);
    }
}