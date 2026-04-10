'use client'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-2">
              <span className="text-sm font-medium text-primary">Welcome to Dental Pro</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Premium Dental Care for a{' '}
              <span className="text-accent">Confident Smile</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Experience expert dental care with cutting-edge technology and compassionate service. Our team of certified dentists is dedicated to your oral health and perfect smile.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-200 transform hover:scale-105">
                <a href="#contact">Book Appointment</a>
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary/5 transition-all duration-200">
                <a href="#services">View Services</a>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">2500+</p>
                <p className="text-sm text-muted-foreground">Happy Smiles</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 blur-2xl opacity-75"></div>
            <img
              src="/image/Hero-image.webp"
              alt="Professional dental care"
              className="relative rounded-2xl shadow-2xl object-cover w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
