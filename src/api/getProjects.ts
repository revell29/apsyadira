import { getProjects } from "../utils/api";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.json(await getProjects());
};
