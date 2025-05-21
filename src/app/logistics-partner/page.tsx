"use client";

import { useState } from "react";

export default function LogisticsPartnerSignupPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-purple-700 px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">
                Logistics Partner Registration
              </h1>
              <p className="text-purple-100">
                Join our network of trusted transportation providers
              </p>
            </div>
            {/* <img
              src="https://via.placeholder.com/60x60?text=B³"
              alt="Logo"
              className="h-12 w-12"
            /> */}
          </div>

          {/* Steps Progress */}
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center text-sm">
            {["Company Info", "Fleet Details", "Account Setup"].map(
              (label, index) => {
                const current = index + 1;
                return (
                  <div className="flex items-center w-full" key={label}>
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center font-bold ${
                          step >= current
                            ? "bg-purple-600 text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {current}
                      </div>
                      <span
                        className={`mt-1 ${
                          step >= current
                            ? "text-purple-600 font-medium"
                            : "text-gray-500"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                    {current !== 3 && (
                      <div className="flex-1 h-1 mx-2 bg-gray-200">
                        <div className="h-1 bg-purple-600 w-full" />
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>

          {/* Form Body */}
          <form className="p-6 space-y-6">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Company Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Legal Company Name",
                    "Company Registration Number",
                    "VAT Number",
                    "Years in Operation",
                    "Primary Contact Person",
                    "Contact Number",
                  ].map((label, idx) => (
                    <div key={idx}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {label}*
                      </label>
                      <input
                        type={
                          label.includes("Number") || label.includes("Years")
                            ? "text"
                            : "text"
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-purple-500"
                        required
                      />
                    </div>
                  ))}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Address*
                    </label>
                    <textarea
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Fleet Information
                </h2>
                <div className="space-y-6">
                  {/* Vehicle Types */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Types in Fleet*
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        "Refrigerated",
                        "Dry Van",
                        "Flatbed",
                        "Tanker",
                        "Side Curtain",
                        "Container",
                        "Heavy Duty",
                      ].map((type) => (
                        <label
                          key={type}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            className="rounded text-purple-600"
                          />{" "}
                          <span>{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Other Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      ["Total Fleet Size*", "number"],
                      ["GPS Tracking Coverage*", "select"],
                      ["Temperature Monitoring*", "select"],
                    ].map(([label, type]) => (
                      <div key={label}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {label}
                        </label>
                        {type === "select" ? (
                          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                            <option value="">Select</option>
                            <option>All</option>
                            <option>Most</option>
                            <option>Some</option>
                            <option>None</option>
                          </select>
                        ) : (
                          <input
                            type="number"
                            min={1}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            required
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Coverage */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Coverage*
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["Local", "Provincial", "National", "Cross-Border"].map(
                        (scope) => (
                          <label
                            key={scope}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              className="rounded text-purple-600"
                            />{" "}
                            <span>{scope}</span>
                          </label>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Account Setup
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    ["Create Username*", "text"],
                    ["Email Address*", "email"],
                    ["Password*", "password"],
                    ["Confirm Password*", "password"],
                  ].map(([label, type]) => (
                    <div key={label}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                      </label>
                      <input
                        type={type}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                  ))}
                </div>

                {/* Agreements */}
                <div className="space-y-3 mt-4">
                  <label className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      className="mt-1 rounded text-purple-600"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I certify that all information provided is accurate*
                    </span>
                  </label>
                  <label className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      className="mt-1 rounded text-purple-600"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the{" "}
                      <a href="#" className="text-purple-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-purple-600 hover:underline">
                        Privacy Policy
                      </a>
                      *
                    </span>
                  </label>
                  <label className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      className="mt-1 rounded text-purple-600"
                    />
                    <span className="text-sm text-gray-700">
                      I want to receive updates and notifications
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-gray-200">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Previous
                </button>
              ) : (
                <div />
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-6 py-2 rounded-md text-white bg-purple-600 hover:bg-purple-700"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-6 py-2 rounded-md text-white bg-purple-600 hover:bg-purple-700"
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Login Prompt */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="font-medium text-purple-600 hover:underline">
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
