'use client';

import { useEffect, useState } from 'react';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { addDoc, collection, Timestamp } from 'firebase/firestore';

export default function AdminPanel() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [client, setClient] = useState('');
  const [description, setDescription] = useState('');
  const [materialInput, setMaterialInput] = useState('');
  const [materials, setMaterials] = useState<string[]>([]);
  const [images, setImages] = useState<FileList | null>(null);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/admin/login');
      } else {
        setUser(user);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleAddMaterial = () => {
    if (materialInput.trim() !== '') {
      setMaterials([...materials, materialInput.trim()]);
      setMaterialInput('');
    }
  };

  const handleRemoveMaterial = (index: number) => {
    const newList = [...materials];
    newList.splice(index, 1);
    setMaterials(newList);
  };

  const uploadImageToCloudinary = async (image: File): Promise<string> => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onloadend = async () => {
        const base64 = reader.result;

        try {
          const res = await fetch('/api/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ file: base64 }),
          });

          const data = await res.json();
          if (!res.ok) throw new Error(data.message);
          resolve(data.url);
        } catch (err) {
          reject(err);
        }
      };

      reader.onerror = () => reject('Error leyendo el archivo');
      reader.readAsDataURL(image);
    });
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !client || !description || !images || images.length === 0 || materials.length === 0) {
      alert('Todos los campos son obligatorios');
      return;
    }

    setMensaje('Subiendo imágenes...');
    const urls: string[] = [];

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const url = await uploadImageToCloudinary(image);
      urls.push(url);
    }

    await addDoc(collection(db, 'proyectos'), {
      title,
      client,
      description,
      materials,
      images: urls,
      creado: Timestamp.now(),
    });

    setMensaje('✅ Proyecto subido con éxito');
    setTitle('');
    setClient('');
    setDescription('');
    setMaterials([]);
    setImages(null);
  };

  if (loading) return <p className="p-4">Cargando...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Subir nuevo proyecto</h1>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="text"
          placeholder="Título del proyecto"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Cliente"
          className="w-full border p-2 rounded"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <div>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Agregar material"
              className="flex-1 border p-2 rounded"
              value={materialInput}
              onChange={(e) => setMaterialInput(e.target.value)}
            />
            <button
              type="button"
              onClick={handleAddMaterial}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Agregar
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {materials.map((mat, idx) => (
              <span
                key={idx}
                className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full flex items-center gap-1"
              >
                {mat}
                <button
                  type="button"
                  onClick={() => handleRemoveMaterial(idx)}
                  className="text-red-500"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <input type="file" multiple accept="image/*" onChange={(e) => setImages(e.target.files)} required />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Subir Proyecto
        </button>
      </form>

      {mensaje && <p className="mt-4 text-green-600">{mensaje}</p>}
    </div>
  );
}
