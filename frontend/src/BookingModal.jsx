import { useEffect, useMemo, useRef, useState } from "react"
import { X, MapPin, CircleDot, Calendar, Clock, Users, MessageCircle } from "lucide-react"

export default function BookingModal({ carName, onClose, onSubmit }) {
  const modalRef = useRef(null)

  const today = useMemo(() => {
    const d = new Date()
    const yyyy = d.getFullYear()
    const mm = String(d.getMonth() + 1).padStart(2, "0")
    const dd = String(d.getDate()).padStart(2, "0")
    return `${yyyy}-${mm}-${dd}`
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    fromLocation: "",
    toLocation: "",
    travelDate: "",
    pickupTime: "",
    passengers: "",
    tripType: "Round Trip",
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEsc)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose()
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    let finalValue = value

    if (name === "phone") {
      finalValue = value.replace(/\D/g, "").slice(0, 10)
    }

    if (name === "passengers") {
      finalValue = value.replace(/\D/g, "").slice(0, 2)
    }

    setFormData((prev) => ({ ...prev, [name]: finalValue }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const setTripType = (value) => {
    setFormData((prev) => ({ ...prev, tripType: value }))
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Please enter your full name"
    if (!formData.phone.trim()) newErrors.phone = "Please enter phone number"
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits"
    }
    if (!formData.fromLocation.trim()) newErrors.fromLocation = "Please enter pickup location"
    if (!formData.toLocation.trim()) newErrors.toLocation = "Please enter destination"
    if (!formData.travelDate) newErrors.travelDate = "Please select travel date"
    if (!formData.pickupTime) newErrors.pickupTime = "Please select pickup time"
    if (!formData.passengers) newErrors.passengers = "Please enter passengers"
    if (formData.passengers && Number(formData.passengers) < 1) {
      newErrors.passengers = "Passengers must be at least 1"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (!validate()) return
    onSubmit({ carName, ...formData })
  }

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#141b2e] outline-none transition placeholder:text-[#aab0bf]"
  const inputClass = (field) =>
    `${inputBase} ${errors[field]
      ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
      : "border-[#e3dfd3] focus:border-gold focus:ring-4 focus:ring-[#f2a93b]/20"
    }`

  const labelClass =
    "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6b7280]"

  const ErrorText = ({ field }) =>
    errors[field] ? (
      <p className="mt-1.5 flex items-center gap-1.5 text-[11px] font-medium text-red-500">
        <span className="inline-block h-1 w-1 rounded-full bg-red-500" />
        {errors[field]}
      </p>
    ) : null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 px-4 py-6 backdrop-blur-md"
      onClick={handleOverlayClick}
    >
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(18px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <div
        ref={modalRef}
        style={{ animation: "modalIn 0.28s cubic-bezier(0.16, 1, 0.3, 1)" }}
        className="flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-[28px] bg-[#faf7ef] shadow-[0_50px_100px_-24px_rgba(0,0,0,0.75)] ring-1 ring-gold/20"
      >
        {/* Header */}
        <div className="relative shrink-0 overflow-hidden border-b-2 border-gold/70 bg-gradient-to-br from-[#0b1220] to-[#111b30] px-7 py-7 text-cream">
          <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
                Trip Booking Request
              </p>
              <h2 className="mt-1.5 font-display text-3xl font-bold uppercase leading-tight tracking-wide sm:text-4xl">
                {carName}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:rotate-90 hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-7 py-7">
          {/* Name + Phone */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={inputClass("name")}
              />
              <ErrorText field="name" />
            </div>

            <div>
              <label className={labelClass}>Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className={inputClass("phone")}
              />
              <ErrorText field="phone" />
            </div>
          </div>

          {/* Route */}
          <div className="mt-6 rounded-2xl border border-[#e3dfd3] bg-white/70 p-5 shadow-sm">
            <p className={labelClass}>Route</p>

            <div className="flex gap-4">
              <div className="flex flex-col items-center pt-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <CircleDot className="h-3.5 w-3.5" />
                </span>
                <span className="my-1 w-px flex-1 border-l-2 border-dashed border-[#d9cfb0]" />
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0b1220]/10 text-[#0b1220]">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4">
                <div>
                  <label className={labelClass}>Pickup / Home Location</label>
                  <input
                    name="fromLocation"
                    value={formData.fromLocation}
                    onChange={handleChange}
                    placeholder="e.g. Rewari"
                    className={inputClass("fromLocation")}
                  />
                  <ErrorText field="fromLocation" />
                </div>

                <div>
                  <label className={labelClass}>Destination Location</label>
                  <input
                    name="toLocation"
                    value={formData.toLocation}
                    onChange={handleChange}
                    placeholder="e.g. Delhi Airport"
                    className={inputClass("toLocation")}
                  />
                  <ErrorText field="toLocation" />
                </div>
              </div>
            </div>
          </div>

          {/* Date + Time */}
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass}>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  Travel Date
                </span>
              </label>

              <div className="relative">
                <input
                  type="date"
                  min={today}
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  className={`${inputClass("travelDate")} pr-12`}
                />
                <Calendar className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
              </div>

              <ErrorText field="travelDate" />
            </div>

            <div>
              <label className={labelClass}>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  Pickup Time
                </span>
              </label>

              <div className="relative">
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  step="60"
                  className={`${inputClass("pickupTime")} pr-12`}
                />
                <Clock className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
              </div>

              <ErrorText field="pickupTime" />
            </div>
          </div>

          {/* Passengers + Trip Type */}
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass}>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" />
                  Passengers
                </span>
              </label>
              <input
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                placeholder="e.g. 4"
                className={inputClass("passengers")}
              />
              <ErrorText field="passengers" />
            </div>

            {/* <div>
              <label className={labelClass}>Trip Type</label>
              <div className="flex rounded-xl border border-[#e3dfd3] bg-white p-1">
                {["One Way", "Round Trip"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTripType(option)}
                    className={`flex-1 rounded-lg py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition ${
                      formData.tripType === option
                        ? "bg-[#0b1220] text-gold shadow-sm"
                        : "text-[#6b7280] hover:text-[#0b1220]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Footer buttons */}
        <div className="shrink-0 border-t border-[#e3dfd3] bg-[#faf7ef]/95 px-7 py-5 backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-[#d9cfb0] px-6 py-3.5 text-sm font-semibold text-[#3a3f4b] transition hover:bg-white"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-primary-foreground shadow-[0_14px_34px_-10px_rgba(242,169,59,0.8)] transition hover:bg-gold-soft active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
              Send Booking Request
            </button>
          </div>

          {/* Fare Disclaimer */}
          <div className="mt-4 rounded-2xl border border-[#eadfbe] bg-[#fffaf0] px-4 py-4 shadow-sm">
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f6e7b8] text-[#7a5a12]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#4b3d18]">
                  Important Fare Note
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#f6e7b8] px-3 py-1 text-[11px] font-semibold text-[#6b5b2a]">
                    Driver allowance extra
                  </span>
                  <span className="rounded-full bg-[#f6e7b8] px-3 py-1 text-[11px] font-semibold text-[#6b5b2a]">
                    Night charges extra
                  </span>
                  <span className="rounded-full bg-[#f6e7b8] px-3 py-1 text-[11px] font-semibold text-[#6b5b2a]">
                    Toll / parking / state tax extra
                  </span>
                  <span className="rounded-full bg-[#f6e7b8] px-3 py-1 text-[11px] font-semibold text-[#6b5b2a]">
                    Under 200 km fare may vary
                  </span>
                </div>

                <p className="mt-3 text-[13px] leading-relaxed text-[#6b5b2a]">
                  Displayed fares are indicative starting prices and may vary depending on the route,
                  trip duration and travel requirements. For trips below{" "}
                  <span className="font-semibold text-[#4b3d18]">200 km</span>, the final fare may differ
                  from the standard per-kilometre rate. Once you submit your booking request, our team
                  will review the details and the owner will contact you shortly with the confirmed fare
                  and trip details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}