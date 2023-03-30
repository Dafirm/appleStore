// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient, groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

const clientConfig = {
  projectId: "6inmic3m",
  dataset: "production",
  useCdn: false,
};

const client = createClient(clientConfig);

const query = groq`*[_type == "category"] {
_id,
  ...
}`;

type Data = {
  categories: Category[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories = await sanityClient.fetch(query);
  console.log(categories);
  res.status(200).json({ categories });
}
