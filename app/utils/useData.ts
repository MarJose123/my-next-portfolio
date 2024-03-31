/*
 * Implemented by JND
 * Copyright (c) 2024.
 */

import {promises as fs} from 'fs';

export default async function useData() {
    const file = await fs.readFile(process.cwd() + '/app/payload.json', 'utf8');
    return JSON.parse(file);
}
