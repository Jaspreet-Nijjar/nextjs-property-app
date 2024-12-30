'use client';

import { useRouter, useParams } from 'next/navigation';

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams(); //params.id

  return (
    <div>
      <h1>Property Page</h1>
      <p>{id}</p>
    </div>
  );
};

export default PropertyPage;
