export const config = { runtime: "edge" };

export default async function handler() {
  const res = await fetch(process.env.FILE_URL, { redirect: "follow" });

  return new Response(res.body, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": 'attachment; filename="TeamWatch_Setup2.4.0.zip"',
      "Cache-Control": "no-store",
    },
  });
}
