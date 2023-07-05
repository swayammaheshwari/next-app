export const GET = async (request:any) => {
  try {
    
    return new Response(JSON.stringify("testing"));
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};

export const POST = async (request:any) => {
  const data = await request.json();
  console.log(data)
 
  try {
      
      return new Response("status")
  } catch (error) {
      return new Response("Failed to create a new prompt", { status: 500 });
  }
}
