"use client"

import type React from "react"
import { useState } from "react"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [role, setRole] = useState("")
  const [fleetSize, setFleetSize] = useState("")
  const [challenges, setChallenges] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          company,
          role,
          fleetSize,
          challenges,
          source: "hero",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to request demo")
      }

      setIsSubmitted(true)
      setEmail("")
      setCompany("")
      setRole("")
      setFleetSize("")
      setChallenges("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 backdrop-blur-sm bg-opacity-95">
          <h3 className="text-green-800 font-semibold mb-2">Request received! 🎉</h3>
          <p className="text-green-700">
            Thanks for your interest! We'll be in touch soon to schedule your personalized demo.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your work email"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white backdrop-blur-sm bg-white bg-opacity-90 transition-all duration-300 focus:scale-[1.02]"
          required
        />
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company Name"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white backdrop-blur-sm bg-white bg-opacity-90 transition-all duration-300 focus:scale-[1.02]"
          required
        />
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role/Position"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white backdrop-blur-sm bg-white bg-opacity-90 transition-all duration-300 focus:scale-[1.02]"
          required
        />
        <select
          value={fleetSize}
          onChange={(e) => setFleetSize(e.target.value)}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white backdrop-blur-sm bg-white bg-opacity-90 transition-all duration-300 focus:scale-[1.02]"
          required
        >
          <option value="">Select Fleet Size</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
          <option value="201+">201+</option>
        </select>
        <textarea
          value={challenges}
          onChange={(e) => setChallenges(e.target.value)}
          placeholder="Current compliance challenges"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white backdrop-blur-sm bg-white bg-opacity-90 transition-all duration-300 focus:scale-[1.02]"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-white text-black px-6 py-3 hover:bg-gray-100 whitespace-nowrap font-semibold disabled:opacity-70 transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Request Demo"
          )}
        </button>
      </form>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <p className="text-sm text-gray-200 mt-3">Get a personalized demo of our platform. No spam. Ever.</p>
    </div>
  )
}
