"use client";
import React, { useState } from "react";
import Image from "next/image";
import bgImage from "@/Images/bgImage.jpg";

const BMIForm: React.FC = () => {
  const [weight, setWeight] = useState<string>(""); // Initialize as an empty string
  const [height, setHeight] = useState<string>(""); // Initialize as an empty string
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("");

  const calculateBMI = () => {
    const weightNum = parseFloat(weight); // Convert weight to a number
    const heightNum = parseFloat(height); // Convert height to a number

    if (heightNum > 0 && weightNum > 0) {
      const heightInMeters = heightNum / 100; // Convert height to meters
      const bmiValue = weightNum / (heightInMeters * heightInMeters);
      setBmi(bmiValue);

      // Determine BMI category
      if (bmiValue < 18.5) {
        setStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setStatus("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setStatus("Overweight");
      } else {
        setStatus("Obese");
      }
    }
  };

  const idealWeightRange = () => {
    const heightNum = parseFloat(height); // Convert height to a number
    if (heightNum > 0) {
      const heightInMeters = heightNum / 100;
      const minWeight = 18.5 * (heightInMeters * heightInMeters);
      const maxWeight = 24.9 * (heightInMeters * heightInMeters);
      return `${minWeight.toFixed(1)}kg - ${maxWeight.toFixed(1)}kg`;
    }
    return "";
  };

  return (
    <section className="relative w-full h-screen">
      <Image
        src={bgImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center px-4">
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 max-w-md w-full space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700">
            BMI Calculator
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)} // Update as a string
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Height (cm)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)} // Update as a string
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={calculateBMI}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition duration-200"
            >
              Calculate BMI
            </button>
          </div>
          {bmi !== null && (
            <div className="text-center text-lg font-medium text-gray-800 space-y-2">
              <p>
                Your BMI is:{" "}
                <span className="font-bold text-blue-600">{bmi.toFixed(2)}</span>
              </p>
              <p>
                You are:{" "}
                <span className="font-bold text-blue-600">{status}</span>
              </p>
              <p>
                Your ideal weight range is:{" "}
                <span className="font-bold text-blue-600">
                  {idealWeightRange()}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BMIForm;