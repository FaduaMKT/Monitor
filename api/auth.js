export default function handler(req, res) {
    console.log("Solicitud recibida en /api/auth"); // Debug

    const passwordFromEnv = process.env.PASSWORD;
    const { password } = req.body;

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    if (password === passwordFromEnv) {
        return res.status(200).json({ success: true });
    } else {
        return res.status(200).json({ success: false });
    }
}
