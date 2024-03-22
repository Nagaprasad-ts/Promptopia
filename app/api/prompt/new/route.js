import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save(); // Save the prompt to the database
    return new Response(JSON.stringify(newPrompt), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to crate a New Prompt", {
      status: 500,
    });
  }
};
