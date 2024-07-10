import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Restaurant from "../../lib/resturantsModel";

export async function GET(req: any, res: any) {
        const connectionStr = "mongodb://abhirajchaudhary029:Abhi@29012000@cluster0.rbhqt3e.mongodb.net/";

    await mongoose.connect(connectionStr);

    const data = await Restaurant.find({});
//   console.log(data);
    if (req.method === 'GET') {
        return NextResponse.json({ name: "abhiraj" });
    } 
}
