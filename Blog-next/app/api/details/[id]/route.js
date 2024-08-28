import connectDB from '../../../../utils/connector';
import Posts from '../../../../models/Postmodel';

export async function GET(req, { params }) {
  try {
    await connectDB();
    let ImageID = params.id;
    let data = await Posts.findOne({ ImageID });

    if (!data) {
      return new Response(JSON.stringify({ message: "Post not found" }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
 
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
