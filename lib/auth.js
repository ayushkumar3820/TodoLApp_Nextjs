import User from "@/model/userModel";
import { cookies } from "next/headers";

export default async function getLoggedInUser() {
    const cookieStore=await cookies();

    const userId=cookieStore.get("userId")?.value;
    if(!userId){
        return new Response({error:"Eroorr"},{status:401})
    }

    const user=await User.findById(userId);
    if(!user){
        return Response.json({error:"pls login"},{status:404})
    }

    return user;
    
}