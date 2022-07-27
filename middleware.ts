export const config = { matcher: "/" };

export async function middleware() {
  const text = await fetch("https://example.com", {
    method: "POST",
    body: "",
  }).catch((error) => {
    console.error(error);
    throw error;
  });

  console.log(text);
}
