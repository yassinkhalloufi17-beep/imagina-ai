
export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return Response.json(
        { error: "Écris une description." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "Clé API manquante sur Vercel." },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-image-1",
          prompt,
          size: "1024x1024",
          n: 1,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: result.error?.message || "Erreur OpenAI." },
        { status: response.status }
      );
    }

    const imageUrl =
      "data:image/png;base64," + result.data[0].b64_json;

    return Response.json({ imageUrl });
  } catch {
    return Response.json(
      { error: "Erreur du serveur de génération." },
      { status: 500 }
    );
  }
      }
