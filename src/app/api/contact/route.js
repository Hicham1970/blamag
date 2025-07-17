import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";



// CREATE A CONTACT
export const POST = async (req) => {
    const session = await getAuthSession();

    if (!session) {
        return NextResponse.json(
            { message: "Not authenticated !" },
            { status: 401 }
        );
    }

    try {
        const body = await req.json();
        const contact = await prisma.Contact.create({
            data: {
                name: body.name,
                email: body.email,
                message: body.message,
                userEmail: session.user.email,
            },
            include: {
                user: true, // This now works because of the schema change
            },
        })

        return NextResponse.json(contact, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { message: "Something went wrong while creating a contact!" },
            { status: 500 }
        );
    }
};