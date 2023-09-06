import { promises as fs } from 'fs';

export default async function Home() {
  const photos = await fs.readdir('./public/images');
  return (
    <main>
      <ul className="grid grid-cols-4">
        {photos.map(photo => {
          return (
            <li key={photo}>
              <img
                src={`/images/${photo}`}
                alt={photo}
                loading="lazy"
              />
            </li>
          )
        })}
      </ul>
    </main>
  )
}
