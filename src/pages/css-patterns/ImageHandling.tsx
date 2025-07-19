import React from 'react';

export default function ImageHandling() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Image Handling Patterns</h1>

      {/* Object-fit examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Object-fit Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cover */}
          <div className="space-y-2">
            <h3 className="font-medium">object-fit: cover</h3>
            <div className="h-48 w-full bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/800/600"
                alt="Cover example"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-400">
              Fills the container while maintaining aspect ratio, may crop image
            </p>
          </div>

          {/* Contain */}
          <div className="space-y-2">
            <h3 className="font-medium">object-fit: contain</h3>
            <div className="h-48 w-full bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/800/600"
                alt="Contain example"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-400">
              Shows entire image while maintaining aspect ratio
            </p>
          </div>

          {/* Fill */}
          <div className="space-y-2">
            <h3 className="font-medium">object-fit: fill</h3>
            <div className="h-48 w-full bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/800/600"
                alt="Fill example"
                className="w-full h-full object-fill"
              />
            </div>
            <p className="text-sm text-gray-400">Stretches to fill container, may distort image</p>
          </div>
        </div>
      </section>

      {/* Background Image examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Background Image Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Background Cover */}
          <div className="space-y-2">
            <h3 className="font-medium">background-size: cover</h3>
            <div
              className="h-48 w-full bg-gray-800 rounded-lg"
              style={{
                backgroundImage: 'url(https://picsum.photos/800/600)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <p className="text-sm text-gray-400">Covers entire container, maintains aspect ratio</p>
          </div>

          {/* Background Pattern */}
          <div className="space-y-2">
            <h3 className="font-medium">background-repeat: repeat</h3>
            <div
              className="h-48 w-full bg-gray-800 rounded-lg"
              style={{
                backgroundImage: 'url(https://picsum.photos/100/100)',
                backgroundRepeat: 'repeat',
                backgroundSize: '50px',
              }}
            />
            <p className="text-sm text-gray-400">Creates a repeating pattern</p>
          </div>
        </div>
      </section>

      {/* Aspect Ratio examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Aspect Ratio Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Modern aspect-ratio */}
          <div className="space-y-2">
            <h3 className="font-medium">aspect-ratio: 16/9</h3>
            <div className="w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/800/600"
                alt="Aspect ratio example"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-400">
              Modern aspect-ratio property (supported in modern browsers)
            </p>
          </div>

          {/* Padding trick */}
          <div className="space-y-2">
            <h3 className="font-medium">Padding-bottom trick</h3>
            <div
              className="relative w-full rounded-lg overflow-hidden"
              style={{ paddingBottom: '56.25%' }}
            >
              <img
                src="https://picsum.photos/800/600"
                alt="Padding aspect ratio example"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-400">
              Legacy padding-bottom technique (works in all browsers)
            </p>
          </div>
        </div>
      </section>

      {/* Responsive Image examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Responsive Images</h2>
        <div className="space-y-2">
          <h3 className="font-medium">srcset and sizes</h3>
          <img
            src="https://picsum.photos/800/600"
            srcSet="https://picsum.photos/400/300 400w, https://picsum.photos/800/600 800w, https://picsum.photos/1200/900 1200w"
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
            alt="Responsive image example"
            className="w-full rounded-lg"
          />
          <p className="text-sm text-gray-400">
            Loads different image sizes based on viewport width
          </p>
        </div>
      </section>
    </div>
  );
}
