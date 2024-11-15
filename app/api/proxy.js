export default async function handler(req, res) {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'Missing URL parameter' });
    }

    try {
        const response = await fetch(decodeURIComponent(url));
        const contentType = response.headers.get('content-type');

        res.setHeader('Content-Type', contentType);
        response.body.pipe(res); // Streams the response back to the client
    } catch (error) {
        console.error('Error fetching media:', error);
        res.status(500).json({ error: 'Failed to fetch media' });
    }
}