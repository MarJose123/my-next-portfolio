/*
 * Implemented by JND
 * Copyright (c) 2024.
 */
import { NextResponse } from "next/server";
import fsPromises from "fs/promises";
import path from "node:path";

const dataFilePath = path.join(process.cwd(), "/src/pages/payload.json");

export default async function GET() {
  const jsonData = await fsPromises.readFile(dataFilePath, "utf-8");
  const objectData = JSON.parse(jsonData);

  return NextResponse.json(objectData, { status: 200 });
}
