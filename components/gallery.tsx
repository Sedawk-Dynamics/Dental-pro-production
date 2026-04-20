'use client'

export function Gallery() {
  const images = [
    {
      src: '/image/smile.png',
      alt: 'Before and after smile transformation',
      title: 'Smile Transformation',
    },
    {
      src: '/image/teeth-white.png',
      alt: 'Professional teeth whitening results',
      title: 'Whitening Results',
    },
    {
      src: '/image/ao.jpg',
      alt: 'Dental implant treatment',
      title: 'Implant Treatment',
    },
    {
      src: '/braces-aligners.jpg',
      alt: 'Orthodontic alignment results',
      title: 'Alignment Success',
    },
    {
      src: '/clinic-interior.jpg',
      alt: 'Modern dental clinic',
      title: 'Our Clinic',
    },
    {
      src: '/image/7.webp',
      alt: 'Advanced root canal procedure',
      title: 'Clinic Location',
    },
  ]

  return (
    <section id="gallery" className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Gallery of Beautiful Smiles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the transformations we've achieved for our patients. Your beautiful smile is just one appointment away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-primary-foreground">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
