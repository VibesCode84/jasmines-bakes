export default function JasmineBakesWebsite() {
  const featuredItems = [
    {
      name: "Brownies",
      price: "£1.50 each",
      subscriberPrice: "£1.20 subscriber",
      quantity: "Strips",
      description: "Rich, fudgy chocolate brownies with a soft centre and deep cocoa flavour.",
      emoji: "🍫",
    },
    {
      name: "Brookies",
      price: "£2.50 each",
      subscriberPrice: "£2.20 subscriber",
      quantity: "Single",
      description: "A delicious brownie-cookie combination for anyone who wants the best of both.",
      emoji: "🍪",
    },
    {
      name: "Pizza",
      price: "£5 each",
      subscriberPrice: "Please enquire",
      quantity: "1 medium pizza",
      description: "A warm, savoury option that helps Jasmine's Bakes feel like a true cafe menu.",
      emoji: "🍕",
    },
  ];

  const cookiesAndTraybakes = [
    {
      name: "Classic Chocolate Chip Cookies",
      price: "75p each",
      subscriberPrice: "60p subscriber",
      quantity: "Single",
      notes: "Freshly baked cookies packed with chocolate chips.",
      emoji: "🍪",
      allergens: "Contains dairy",
    },
    {
      name: "Brownies",
      price: "£1.50 each",
      subscriberPrice: "£1.20 subscriber",
      quantity: "Strips",
      notes: "Rich chocolate brownies with a fudgy finish.",
      emoji: "🍫",
      allergens: "Contains dairy",
    },
    {
      name: "Brownies with Topping",
      price: "£2 each",
      subscriberPrice: "£1.70 subscriber",
      quantity: "Strips",
      notes: "Brownies finished with extra toppings for added indulgence.",
      emoji: "🍫",
      allergens: "Contains dairy",
    },
    {
      name: "Brookies",
      price: "£2.50 each",
      subscriberPrice: "£2.20 subscriber",
      quantity: "Single",
      notes: "A brownie-cookie hybrid with plenty of flavour and texture.",
      emoji: "🍪",
      allergens: "Contains dairy",
    },
    {
      name: "Brookies with Topping",
      price: "£3 each",
      subscriberPrice: "£2.70 subscriber",
      quantity: "Single",
      notes: "Brookies topped for an extra-special treat.",
      emoji: "🍪",
      allergens: "Contains dairy",
    },
    {
      name: "Mini Biscuits",
      price: "£2.50 for 5",
      subscriberPrice: "£2.20 subscriber",
      quantity: "Pack of 5",
      notes: "Ideal for gift boxes, party favours and little sweet moments.",
      emoji: "🥠",
      allergens: "Please ask about allergens",
    },
    {
      name: "Non-Iced Biscuits",
      price: "£2 for 5",
      subscriberPrice: "£1.50 subscriber",
      quantity: "Pack of 5",
      notes: "Simple biscuits with a classic homemade finish.",
      emoji: "🍪",
      allergens: "Contains dairy",
    },
    {
      name: "Iced Biscuits with Sprinkles",
      price: "£2.50 for 5",
      subscriberPrice: "£2 subscriber",
      quantity: "Pack of 5",
      notes: "Decorated biscuits finished with icing and sprinkles.",
      emoji: "✨",
      allergens: "Contains dairy",
    },
  ];

  const cakesAndSlices = [
    {
      name: "Victoria Sponge",
      price: "£2 per slice",
      subscriberPrice: "£1.70 subscriber",
      quantity: "Slice",
      notes: "A classic sponge with a timeless homemade feel.",
      emoji: "🍰",
      allergens: "Contains dairy",
    },
    {
      name: "Chocolate Cake with Icing",
      price: "£2 per slice",
      subscriberPrice: "£1.70 subscriber",
      quantity: "Slice",
      notes: "Soft chocolate sponge finished with icing.",
      emoji: "🎂",
      allergens: "Contains dairy",
    },
    {
      name: "Vanilla Cake with Icing",
      price: "£2 per slice",
      subscriberPrice: "£1.70 subscriber",
      quantity: "Slice",
      notes: "A light vanilla sponge topped with smooth icing.",
      emoji: "🎂",
      allergens: "Contains dairy",
    },
    {
      name: "Red Velvet with Icing",
      price: "£2 per slice",
      subscriberPrice: "£1.70 subscriber",
      quantity: "Slice",
      notes: "Classic red velvet with a soft crumb and iced finish.",
      emoji: "❤️",
      allergens: "Contains dairy",
    },
    {
      name: "Carrot Cake with Icing",
      price: "£2.50 per slice",
      subscriberPrice: "£2.20 subscriber",
      quantity: "Slice",
      notes: "Moist carrot cake with a rich iced topping.",
      emoji: "🥕",
      allergens: "Contains dairy, nuts",
    },
    {
      name: "Vanilla Cheesecake",
      price: "£2 per slice",
      subscriberPrice: "£1.80 subscriber",
      quantity: "Slice",
      notes: "Creamy vanilla cheesecake with a smooth finish.",
      emoji: "🍰",
      allergens: "Contains dairy",
    },
    {
      name: "Biscoff Cheesecake",
      price: "£1.50 each",
      subscriberPrice: "Please enquire",
      quantity: "Single",
      notes: "Creamy cheesecake with a Biscoff-inspired flavour.",
      emoji: "🍰",
      allergens: "Contains dairy",
    },
    {
      name: "Bakewell Tart",
      price: "£3 per slice",
      subscriberPrice: "£2.60 subscriber",
      quantity: "Slice",
      notes: "A classic tart with a rich, sweet flavour.",
      emoji: "🥧",
      allergens: "Contains dairy, nuts",
    },
  ];

  const drinksAndExtras = [
    {
      name: "Cupcakes",
      price: "£1 each",
      subscriberPrice: "80p subscriber",
      quantity: "Single",
      notes: "Available in cake-inspired flavours.",
      emoji: "🧁",
      allergens: "Contains dairy, nuts depending on flavour",
    },
    {
      name: "Brookies Bar",
      price: "£1 each",
      subscriberPrice: "80p subscriber",
      quantity: "Bar",
      notes: "A chunkier brookie-style bar with a satisfying bite.",
      emoji: "🍪",
      allergens: "Please ask about allergens",
    },
    {
      name: "Eggless Option",
      price: "25p each",
      subscriberPrice: "20p subscriber",
      quantity: "Single",
      notes: "Please enquire for current availability.",
      emoji: "🌿",
      allergens: "Please ask before ordering",
    },
    {
      name: "Breakfast Tea",
      price: "£1 each",
      subscriberPrice: "75p subscriber",
      quantity: "Cup",
      notes: "A warm breakfast tea served hot.",
      emoji: "🫖",
      allergens: "Contains dairy",
    },
    {
      name: "English Tea",
      price: "25p each",
      subscriberPrice: "Please enquire",
      quantity: "Cup",
      notes: "A simple hot tea option.",
      emoji: "🍵",
      allergens: "Contains dairy",
    },
    {
      name: "Coffee",
      price: "25p each",
      subscriberPrice: "Please enquire",
      quantity: "Cup",
      notes: "Freshly served hot coffee.",
      emoji: "☕",
      allergens: "Contains dairy",
    },
    {
      name: "Hot Chocolate",
      price: "25p each",
      subscriberPrice: "Please enquire",
      quantity: "Cup",
      notes: "Warm, comforting hot chocolate.",
      emoji: "🍫",
      allergens: "Contains dairy",
    },
  ];

  const savouryMenu = [
    {
      name: "Pizza",
      price: "£5 each",
      subscriberPrice: "Please enquire",
      quantity: "1 medium pizza",
      notes: "A warm, satisfying pizza option.",
      emoji: "🍕",
      allergens: "Contains dairy",
    },
    {
      name: "Tomato Pasta",
      price: "£3 each",
      subscriberPrice: "Please enquire",
      quantity: "1 serving",
      notes: "Comforting tomato pasta served hot.",
      emoji: "🍝",
      allergens: "Contains dairy",
    },
    {
      name: "Flat Bread",
      price: "£3 each",
      subscriberPrice: "Please enquire",
      quantity: "2 pieces",
      notes: "Fresh flat bread served as a savoury option.",
      emoji: "🫓",
      allergens: "Contains dairy",
    },
  ];

  const highlights = [
    "Beautifully presented homemade bakes",
    "Subscriber prices available on selected items",
    "Sweet treats, savoury dishes and hot drinks",
    "Perfect for gifts, parties and celebrations",
  ];

  const orderingNotes = [
    "Up to 2 orders per day during school holidays",
    "Up to 2 orders per week during school weeks",
  ];

  const MenuCard = ({ item }) => (
    <div className="group rounded-[2rem] bg-white/90 p-6 shadow-xl ring-1 ring-white/70 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 via-sky-50 to-stone-100 text-3xl shadow-sm">
          {item.emoji}
        </div>
        <div className="text-right">
          <div className="rounded-full bg-pink-50 px-4 py-2 text-sm font-extrabold text-pink-500 shadow-sm">
            {item.price}
          </div>
          <div className="mt-2 text-xs font-bold uppercase tracking-wide text-sky-500">
            {item.subscriberPrice}
          </div>
        </div>
      </div>
      <h3 className="mt-5 text-xl font-black text-stone-700">{item.name}</h3>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-stone-400">{item.quantity}</div>
      <p className="mt-3 text-sm leading-7 text-stone-600">{item.notes}</p>
      <div className="mt-5 inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">
        {item.allergens}
      </div>
    </div>
  );

  const SectionHeader = ({ eyebrow, title, description, colorClass }) => (
    <div className="mb-8 text-center">
      <div className={`inline-block rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.22em] ${colorClass}`}>
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-stone-700 md:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-600 md:text-base">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-sky-50 to-stone-50 text-stone-700">
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-3xl font-black tracking-tight text-pink-400">Jasmine's Bakes</div>
            <div className="text-sm text-stone-500">Jasmine's Bakes is a versatile cafe that serves heart warming dishes and piping hot drinks.</div>
          </div>
          <nav className="hidden gap-6 text-sm font-semibold md:flex">
            <a href="#about" className="transition hover:text-pink-400">About</a>
            <a href="#featured" className="transition hover:text-sky-500">Featured</a>
            <a href="#menu" className="transition hover:text-pink-400">Menu</a>
            <a href="#order" className="transition hover:text-sky-500">Order</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -left-10 top-8 h-48 w-48 rounded-full bg-pink-200 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-200 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-stone-200 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-block w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-600 shadow-sm">
              Premium homemade menu
            </span>
            <h1 className="text-5xl font-black leading-tight tracking-tight text-stone-700 md:text-6xl">
              Beautiful bakes, heart-warming dishes and piping hot drinks.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
              Jasmine's Bakes is a versatile cafe offering homemade cakes, traybakes, biscuits, savoury dishes and hot drinks. The menu is designed to feel polished, welcoming and ideal for everyday treats, gifts and special occasions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#menu" className="rounded-2xl bg-pink-300 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5">
                View Menu
              </a>
              <a href="#order" className="rounded-2xl bg-sky-200 px-6 py-3 text-sm font-bold text-stone-700 shadow-lg shadow-sky-100 transition hover:-translate-y-0.5">
                Order Now
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl bg-white/85 p-4 text-sm font-medium shadow-sm ring-1 ring-stone-100">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid w-full max-w-md gap-4 rounded-[2rem] bg-white/80 p-5 shadow-2xl ring-1 ring-white/70 backdrop-blur">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-pink-100 via-sky-100 to-stone-100 p-8 text-center shadow-inner">
                <div className="text-7xl">🧁</div>
                <div className="mt-4 text-3xl font-black text-pink-400">Jasmine's Bakes</div>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  A refined menu of homemade bakes, savoury dishes and hot drinks.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['🍪', '🍕', '☕'].map((icon) => (
                  <div key={icon} className="rounded-2xl bg-stone-50 p-5 text-center text-3xl shadow-sm">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-stone-100">
            <SectionHeader
              eyebrow="About"
              title="A polished and welcoming cafe-style brand"
              description="Jasmine's Bakes combines a warm, homemade feel with a clean, premium presentation. The brand is ideal for customers looking for sweet treats, simple savoury dishes, hot drinks and a clear, friendly ordering experience."
              colorClass="bg-pink-100 text-pink-500"
            />
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-pink-100 via-white to-sky-100 p-8 shadow-xl ring-1 ring-white">
            <h3 className="text-2xl font-black text-stone-700">Why customers will love it</h3>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-stone-600">
              <li>• Clear pricing and subscriber offers</li>
              <li>• Sweet treats, savoury options and hot drinks</li>
              <li>• Attractive presentation with a soft premium style</li>
              <li>• Easy to adapt for events, pop-ups or social orders</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader
          eyebrow="Featured"
          title="Popular choices"
          description="A few standout menu favourites that give the brand an inviting cafe feel and help guide new customers towards popular options."
          colorClass="bg-sky-100 text-sky-500"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredItems.map((item) => (
            <div key={item.name} className="rounded-[2rem] bg-white p-7 shadow-xl ring-1 ring-stone-100 transition hover:-translate-y-1">
              <div className="text-5xl">{item.emoji}</div>
              <h3 className="mt-5 text-2xl font-black text-stone-700">{item.name}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-pink-50 px-4 py-2 text-sm font-bold text-pink-500">{item.price}</span>
                <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-sky-500">{item.subscriberPrice}</span>
                <span className="rounded-full bg-stone-100 px-4 py-2 text-sm font-bold text-stone-600">{item.quantity}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader
          eyebrow="Menu"
          title="Jasmine's Menu"
          description="Explore the full menu, with standard pricing, subscriber pricing and clear quantity information for each item."
          colorClass="bg-pink-100 text-pink-500"
        />

        <div className="space-y-14">
          <div>
            <div className="mb-6">
              <div className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-black text-pink-500">Cookies & Traybakes</div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {cookiesAndTraybakes.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <div className="inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-black text-sky-500">Cakes & Cheesecakes</div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {cakesAndSlices.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <div className="inline-block rounded-full bg-stone-200 px-4 py-2 text-sm font-black text-stone-700">Cupcakes & Drinks</div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {drinksAndExtras.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <div className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-black text-pink-500">Savoury Menu</div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {savouryMenu.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-gradient-to-r from-pink-200 via-white to-sky-200 p-8 shadow-xl ring-1 ring-white">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-500">Subscriber pricing</p>
              <h2 className="mt-3 text-3xl font-black text-stone-700">Rewarding loyal customers</h2>
              <p className="mt-4 text-base leading-8 text-stone-600">
                Subscriber prices can be used as part of a loyalty offer, regular order plan or special membership system. It gives Jasmine's Bakes a more professional pricing structure while encouraging repeat orders.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/80 p-5 shadow-sm">
                <div className="text-sm font-bold text-stone-500">Standard menu</div>
                <div className="mt-2 text-lg font-black text-stone-700">Clear everyday prices</div>
              </div>
              <div className="rounded-2xl bg-white/80 p-5 shadow-sm">
                <div className="text-sm font-bold text-stone-500">Subscriber menu</div>
                <div className="mt-2 text-lg font-black text-stone-700">Better value for regulars</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-pink-200 via-white to-sky-200 p-8 shadow-xl ring-1 ring-white">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-500">Order</p>
            <h2 className="mt-3 text-3xl font-black text-stone-700">Place an order or make an enquiry</h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-stone-600">
              Get in touch for availability, flavour choices, quantities and order details. Jasmine's Bakes currently shares updates and content on YouTube.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/80 p-5 shadow-sm">
                <div className="text-sm font-bold text-stone-500">YouTube</div>
                <div className="mt-2 text-lg font-black text-stone-700">@JasmineKarunananthan</div>
              </div>
              <div className="rounded-2xl bg-white/80 p-5 shadow-sm">
                <div className="text-sm font-bold text-stone-500">Ordering notes</div>
                <div className="mt-2 text-sm font-semibold leading-7 text-stone-700">
                  {orderingNotes.map((note) => (
                    <div key={note}>{note}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-stone-100">
            <h3 className="text-2xl font-black text-stone-700">Send an enquiry</h3>
            <div className="mt-6 space-y-4">
              <input className="w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-pink-300" placeholder="Your name" />
              <input className="w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-sky-300" placeholder="Email or phone" />
              <input className="w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-pink-300" placeholder="What would you like to order?" />
              <textarea className="min-h-[120px] w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-sky-300" placeholder="Tell us about quantities, flavours, preferred date and any special requests" />
              <button className="w-full rounded-2xl bg-stone-700 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5">
                Send enquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/70 bg-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-bold text-pink-400">Jasmine's Bakes</span> · Homemade bakes, savoury dishes and hot drinks
          </div>
          <div>Baby pink · baby blue · nude</div>
        </div>
      </footer>
    </div>
  );
}
