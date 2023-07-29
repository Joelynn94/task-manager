// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface Subtask {
  title: string;
  isCompleted: boolean;
}

interface Task {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
}

interface Column {
  name: string;
  tasks: Task[];
}

interface Board {
  name: string;
  columns: Column[];
}

interface Data {
  boards: Board[];
  error: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    // Get the absolute path to data.json
    const dataPath = path.join(process.cwd(), 'pages', 'api', 'data.json');

    // Read the contents of data.json synchronously
    const jsonData = fs.readFileSync(dataPath, 'utf-8');

    // Parse the JSON data
    const data: Data = JSON.parse(jsonData);

    // Respond with the data
    res.status(200).json(data);
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({ boards: [], error: 'Error reading data' });
  }
}
