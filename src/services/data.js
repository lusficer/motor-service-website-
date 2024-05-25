const servicesData = [
  {
    id: 1,
    label: 'Brake',
    image: '/brake.png',
    description:
      "Ensure your vehicle's braking system is functioning optimally with our brake maintenance service. We inspect brake pads, rotors, and fluid levels to keep you safe on the road.",
    category: 'car',
    rating: 5,
    prices: [
      { brand: 'Toyota', price: 150, priceId: 'price_1PJtS701HTEsX8gX8J8ZXAkC' },
      { brand: 'Honda', price: 160, priceId: 'price_1PJtSK01HTEsX8gXEI2ccrcB' },
      { brand: 'Ford', price: 170, priceId: 'price_1PJtSb01HTEsX8gXzXGSUoID' },
      { brand: 'BMW', price: 180, priceId: 'price_1PJtSn01HTEsX8gXvlmmCKfQ' }
    ]
  },
  {
    id: 2,
    label: 'Oil Change',
    image: '/oil.png',
    description:
      'Keep your engine running smoothly with our oil change service. We replace old oil with high-quality lubricants and replace the oil filter for optimal engine performance.',
    category: 'car',
    rating: 5,
    prices: [
      { brand: 'Toyota', price: 70, priceId: 'price_1PJtPr01HTEsX8gX9QuQg8gm' },
      { brand: 'Honda', price: 75, priceId: 'price_1PJtQE01HTEsX8gXNlrrDXzG' },
      { brand: 'Ford', price: 80, priceId: 'price_1PJtQO01HTEsX8gXt3JfEcnu' },
      { brand: 'BMW', price: 100, priceId: 'price_1PJtPW01HTEsX8gXiZYv6rhT' }
    ]
  },
  {
    id: 3,
    label: 'Rack Housing',
    image: '/rack.png',
    description:
      "Maintain your vehicle's steering system with our rack housing service. We inspect and repair the rack and pinion assembly to ensure precise steering control.",
    category: 'car',
    rating: 5,
    prices: [
      { brand: 'Toyota', price: 300, priceId: 'price_1PJtUG01HTEsX8gXCFgHIJUz' },
      { brand: 'Honda', price: 320, priceId: 'price_1PJtUR01HTEsX8gXMo0uDwvo' },
      { brand: 'Ford', price: 350, priceId: 'price_1PJtUb01HTEsX8gX7QkjgWZ5' },
      { brand: 'BMW', price: 400, priceId: 'price_1PJtUo01HTEsX8gXizcj3Mp4' }
    ]
  },
  {
    label: 'Tire Maintenance',
    description:
      'Ensure your tires are in top condition with our tire maintenance service. We check tire pressure, tread depth, and alignment to improve fuel efficiency and safety.',
    category: 'tire',
    image: '/tire_maintance.png',

    rating: 5,
    prices: [
      { brand: 'Toyota', price: 60, priceId: 'price_1PJtX701HTEsX8gXdiBNd0Rj' },
      { brand: 'Honda', price: 65, priceId: 'price_1PJtXN01HTEsX8gXE8IzTVAW' },
      { brand: 'Ford', price: 70, priceId: 'price_1PJtXd01HTEsX8gXRd9hk1Ex' },
      { brand: 'BMW', price: 90, priceId: 'price_1PJtXt01HTEsX8gXfwusPrXX' }
    ]
  },
  {
    label: 'Tire Change/Balance',
    description:
      'Keep your vehicle balanced and stable with our tire change and balance service. We replace old tires with new ones and ensure proper balancing for a smooth ride.',
    category: 'tire',
    image: '/tire_change.png',

    rating: 5,
    prices: [
      { brand: 'Toyota', price: 100, priceId: 'price_1PJtib01HTEsX8gXX2xZygXG' },
      { brand: 'Honda', price: 110, priceId: 'price_1PJtj501HTEsX8gX8ndBuWO1' },
      { brand: 'Ford', price: 120, priceId: 'price_1PJtjF01HTEsX8gXe3v1beCN' },
      { brand: 'BMW', price: 150, priceId: 'price_1PJtjS01HTEsX8gX36b5kr41' }
    ]
  },
  {
    label: 'Battery Change',
    description:
      "Keep your vehicle's electrical system running smoothly with our battery change service. We replace old batteries with high-quality replacements to ensure reliable starting power.",
    category: 'car',
    image: '/battery.png',
    rating: 5,
    prices: [
      { brand: 'Toyota', price: 120, priceId: 'price_1PJtew01HTEsX8gXPnUBrm3Y' },
      { brand: 'Honda', price: 125, priceId: 'price_1PJtf801HTEsX8gXNZRsv76C' },
      { brand: 'Ford', price: 130, priceId: 'price_1PJtfT01HTEsX8gX2EwhidqG' },
      { brand: 'BMW', price: 160, priceId: 'price_1PJtfi01HTEsX8gXnZIl7YsW' }
    ]
  },
  {
    label: 'Windshield',
    description:
      'Maintain visibility and safety with our windshield service. We repair chips and cracks or replace damaged windshields to keep you safe on the road.',
    category: 'car',
    image: '/windshield.png',
    rating: 5,
    prices: [
      { brand: 'Toyota', price: 250, priceId: 'price_1PJtnI01HTEsX8gX27AuMwX4' },
      { brand: 'Honda', price: 260, priceId: 'price_1PJtnX01HTEsX8gXU38nry4m' },
      { brand: 'Ford', price: 270, priceId: 'price_1PJtnj01HTEsX8gXs01IgSyO' },
      { brand: 'BMW', price: 300, priceId: 'price_1PJto301HTEsX8gXJeU7AvGJ' }
    ]
  }
]

export default servicesData
