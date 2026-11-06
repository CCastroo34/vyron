export const config = { runtime: "edge" };

export default async function handler() {
  const url = process.env.FILE_URL || "NO EXISTE";
  return new Response("Termina en: " + url.slice(-30));
}
