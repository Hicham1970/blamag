import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// http://localhost:3000/api/posts  
export const GET = async (req) => {
    const {searchParams} = new URL(req.url);

    const page = parseInt(searchParams.get("page")) || 1;
    const cat = searchParams.get("cat");

    const POST_PER_PAGE = 2; 

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && { catSlug: cat }), // Conditionally filter by category
        },
    };

    try {
        // Run two queries in a transaction: one to get the posts, one to get the total count
        const [posts, count] = await prisma.$transaction([
            prisma.Post.findMany(query),
            prisma.Post.count({ where: query.where }),
        ]);
        return NextResponse.json({ posts, count }, { status: 200 });
    } catch (error) {
        console.log(error);
        // Use NextResponse.json for cleaner error responses
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
    }
 }