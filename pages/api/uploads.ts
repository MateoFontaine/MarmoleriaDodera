import type { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { file } = req.body;

  if (!file) {
    return res.status(400).json({ message: 'No se recibió imagen' });
  }

  try {
    const uploadResponse = await cloudinary.uploader.upload(file, {
      folder: 'marmoleria/proyectos',
    });

    return res.status(200).json({ url: uploadResponse.secure_url });
  } catch (error: any) {
    console.error('Cloudinary error:', error.message);
    return res.status(500).json({ message: 'Error al subir imagen a Cloudinary' });
  }
}

