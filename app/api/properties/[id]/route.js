import Property from '../../../../models/Property';
import connectDB from '../../../../config/database';

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);

    if (!property) return new Response('Property not found', { status: 400 });

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.error('Error in GET /api/properties:', error);
    return new Response('Something went wrong', { status: 500 });
  }
};
