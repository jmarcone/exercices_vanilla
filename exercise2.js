import { writeFile } from 'node:fs/promises';

try {
    await writeFile("test.html", "hello")
} catch (e) {
    console.error(e.message);
}