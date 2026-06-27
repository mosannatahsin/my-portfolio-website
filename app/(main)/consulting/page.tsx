"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, Video, MessageSquare, Check, ArrowRight, Shield } from "lucide-react";

const packages = [
  {
    name: "Strategy Call",
    duration: "30 Minutes",
    price: 0,
    description: "Free initial consultation to discuss your security needs and explore how I can help.",
    features: [
      "Security posture overview",
      "High-level recommendations",
      "Service alignment discussion",
      "Next steps planning",
    ],
    popular: false,
  },
  {
    name: "Security Assessment",
    duration: "60 Minutes",
    price: 250,
    description: "Deep-dive session into your current security setup with actionable recommendations.",
    features: [
      "Comprehensive security review",
      "Vulnerability prioritization",
      "Risk mitigation strategy",
      "Written summary report",
      "30-day follow-up email",
    ],
    popular: true,
  },
  {
    name: "Enterprise Advisory",
    duration: "90 Minutes",
    price: 500,
    description: "Strategic advisory session for complex security challenges and architecture decisions.",
    features: [
      "Full architecture review",
      "Compliance roadmap",
      "Team training recommendations",
      "Detailed action plan",
      "60-day follow-up support",
      "Priority email support",
    ],
    popular: false,
  },
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", 
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

export default function ConsultingPage() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [meetingType, setMeetingType] = useState<"video" | "chat">("video");

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4 block">
            Book a Session
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Schedule a <span className="gradient-text">Consultation</span>
          </h1>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Choose a consultation package that fits your needs and book a time that works for you.
          </p>
        </motion.div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPackage(index)}
              className={`relative glass-card p-8 rounded-2xl cursor-pointer transition-all ${
                selectedPackage === index
                  ? "ring-2 ring-accent-blue bg-white/10"
                  : "hover:bg-white/5"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent-blue to-accent-purple text-background text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="font-display font-semibold text-xl mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-foreground">
                  {pkg.price === 0 ? "Free" : `$${pkg.price}`}
                </span>
                {pkg.price > 0 && <span className="text-foreground-muted">/session</span>}
              </div>
              <p className="text-sm text-foreground-muted mb-6">{pkg.description}</p>

              <div className="flex items-center gap-2 text-sm text-foreground-muted mb-6">
                <Clock className="w-4 h-4" />
                {pkg.duration}
              </div>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground-muted">
                    <Check className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium text-sm transition-all ${
                  selectedPackage === index
                    ? "bg-gradient-to-r from-accent-blue to-accent-purple text-background"
                    : "border border-border text-foreground hover:bg-white/5"
                }`}
              >
                {selectedPackage === index ? "Selected" : "Select Package"}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Booking Form */}
        {selectedPackage !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-10 rounded-2xl"
          >
            <h2 className="font-display font-semibold text-2xl mb-6">Schedule Your Session</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Meeting Type */}
              <div>
                <label className="text-sm font-medium text-foreground-muted mb-3 block">
                  Meeting Type
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setMeetingType("video")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-all ${
                      meetingType === "video"
                        ? "border-accent-blue bg-accent-blue/10 text-accent-blue"
                        : "border-border text-foreground-muted hover:bg-white/5"
                    }`}
                  >
                    <Video className="w-4 h-4" />
                    Video Call
                  </button>
                  <button
                    onClick={() => setMeetingType("chat")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-all ${
                      meetingType === "chat"
                        ? "border-accent-blue bg-accent-blue/10 text-accent-blue"
                        : "border-border text-foreground-muted hover:bg-white/5"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Text Chat
                  </button>
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="text-sm font-medium text-foreground-muted mb-3 block">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border text-foreground focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/50"
                />
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8"
              >
                <label className="text-sm font-medium text-foreground-muted mb-3 block">
                  Available Times
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 rounded-lg border text-sm font-medium transition-all ${
                        selectedTime === time
                          ? "border-accent-blue bg-accent-blue/10 text-accent-blue"
                          : "border-border text-foreground-muted hover:bg-white/5"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Notes */}
            <div className="mt-8">
              <label className="text-sm font-medium text-foreground-muted mb-3 block">
                Additional Notes (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Describe your security concerns or topics you'd like to discuss..."
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border text-foreground placeholder:text-foreground-muted/50 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/50 resize-none"
              />
            </div>

            {/* Submit */}
            <div className="mt-8 flex items-center justify-between">
              <div className="text-sm text-foreground-muted">
                Selected: <span className="text-foreground font-medium">{packages[selectedPackage].name}</span>
                {selectedTime && (
                  <span> at <span className="text-foreground font-medium">{selectedTime}</span></span>
                )}
              </div>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-background font-semibold rounded-xl hover:opacity-90 transition-all">
                <Shield className="w-5 h-5" />
                Confirm Booking
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
