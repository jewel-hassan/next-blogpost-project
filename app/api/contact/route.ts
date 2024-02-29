import { connectToMongo } from "@/libs/mongo.lib";
import ContactModel from "@/models/contact.model";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const {  name, subtitle, description } = await request.json()
        await connectToMongo()
        await ContactModel.create({ name, subtitle, description })
        await mongoose.connection.close()
        return NextResponse.json({ message: "Message sent successfully" }, { status: 201 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}

export async function GET(request: NextRequest) {
    try {
        await connectToMongo()
        console.log("dbconnected")
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}