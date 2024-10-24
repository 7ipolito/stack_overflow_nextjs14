import Question from "@/components/forms/Question";
import { getUserByID } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  // const { userId } = auth();
  const userId = "clerk12345";
  if (!userId) redirect("/sign-in");
  const mongoUser = await getUserByID({ userId });

  console.log(mongoUser);
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask Question</h1>
      <div>
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};
export default Page;
