import GrapthDisplayComponent from "@/src/models/GrapthDisplay/GrapthDisplayComponent";
import { getDataForGrapth } from "@/src/services/swapi.service";

export default async function Dashboard({ params }: { params: { slug: string } }) {
  //Async server-side function to get data
  const data = await getDataForGrapth(params.slug);

  return (
    <>
      <GrapthDisplayComponent nodes={data.starWarsNodes} edges={data.starWarsEdges} />
    </>
  );
}
