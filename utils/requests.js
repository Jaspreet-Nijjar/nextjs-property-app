const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
  try {
    // If domain is not available yet

    if (!apiDomain) {
      return [];
    }

    const res = await fetch('http://localhost:3000/api/properties');

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { fetchProperties };
