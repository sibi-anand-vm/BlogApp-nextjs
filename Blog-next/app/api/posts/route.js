import connectDB from '../../../utils/connector'
import Posts from '../../../models/Postmodel'
export async function GET() {
    try{
        await connectDB();
        let data=await Posts.find({});
        return Response.json(data)
    }
    catch(error){
return Response.json({"message":{error}})
    }
}