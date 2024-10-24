"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

export async function getUserByID(params: any) {
  try {
    connectToDatabase();
    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log(error);
  }
}
