import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// http://localhost:3000/api/categories 
export const GET = async () => {

    try {
        const categories = await prisma.Category.findMany();
        return new NextResponse(JSON.stringify(categories,{status:200}));
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({message:"Something went wrong!"}, { status: 500 }));
    }
 }