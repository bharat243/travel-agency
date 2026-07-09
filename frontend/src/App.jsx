import { useState } from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Fleet from "./Fleet"
import WhyChooseUs from "./WhyChooseUs"
import HowItWorks from "./HowItWorks"
import Footer from "./Footer"
import BookingModal from "./BookingModal"
import ExperienceSection from "./ExperienceSection"
import { PHONE_NUMBER } from "./data"
import "./App.css"

export default function App() {
  const [selectedCar, setSelectedCar] = useState(null)
  const [toast, setToast] = useState("")

  const openWhatsApp = (message) => {
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(""), 2500)
  }

  const handleGeneralInquire = () => {
    const message =
      "Hi, I would like to inquire about your car rental service. Please share the available cars, pricing, and booking details."
    openWhatsApp(message)
  }

  const handleModalSubmit = (formData) => {
    const formattedDate = new Date(formData.travelDate).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    const message = `Hi, my name is ${formData.name}. I would like to book the ${formData.carName} for my trip.\n\n• Phone: ${formData.phone}\n• Trip Type: ${formData.tripType}\n• Pickup: ${formData.fromLocation}\n• Drop: ${formData.toLocation}\n• Date: ${formattedDate}\n• Time: ${formData.pickupTime}\n• Passengers: ${formData.passengers}`

    setSelectedCar(null)
    showToast("Opening WhatsApp...")
    setTimeout(() => openWhatsApp(message), 500)
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero onInquire={handleGeneralInquire} />
        <Fleet onBook={(car) => setSelectedCar(car)} />
        <WhyChooseUs />
        <HowItWorks onInquire={handleGeneralInquire} />
        <ExperienceSection />
      </main>
      <Footer />

      {selectedCar && (
        <BookingModal
          carName={selectedCar.name}
          onClose={() => setSelectedCar(null)}
          onSubmit={handleModalSubmit}
        />
      )}

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[120] -translate-x-1/2 rounded-2xl bg-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-2xl">
          {toast}
        </div>
      )}
    </div>
  )
}