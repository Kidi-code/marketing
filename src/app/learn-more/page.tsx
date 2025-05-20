// app/learn-more/page.tsx
"use client";

import { Mic2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LearnMorePage() {
  return (
    <main className="px-6 py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <Globe size={32} /> 🌾 About Us – BENTICK³ CONNECT Agriculture{" "}
          <Mic2 size={32} />
        </h1>

        <p className="text-lg leading-relaxed">
          In South Africa, agriculture is more than an economic sector—it's a
          lifeline. It provides jobs, food security, and raw materials for
          countless industries. Yet, despite its importance, thousands of new
          and small-scale farmers face systemic challenges that hinder their
          ability to access the market, scale their operations, and become
          competitive players in the supply chain. These challenges include lack
          of infrastructure, delayed payments, dependency on intermediaries,
          limited access to modern tools, and scarce market insights.
        </p>

        <p className="text-lg leading-relaxed">
          BENTICK³ CONNECT was founded with a bold vision: to create an
          inclusive and digitally enabled agricultural ecosystem that connects
          emerging farmers, local retailers, and farming equipment manufacturers
          through a single, transparent platform. Using blockchain technology in
          agriculture, we ensure secure, real-time transactions and traceable
          product journeys from farm to shelf. This empowers farmers to gain
          direct market access, ensures retailers source locally and ethically,
          and gives manufacturers a platform to support farmer growth with the
          latest tools and machinery.
        </p>

        <p className="text-lg leading-relaxed">
          Our platform isn’t just a marketplace — it’s a movement for
          sustainable transformation. We work to uplift the backbone of South
          Africa’s food system by:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Providing transparent supply chains powered by blockchain.</li>
          <li>
            Creating smart contracts that ensure fair pricing and instant
            payments.
          </li>
          <li>
            Offering farmers access to real-time market analytics and insights.
          </li>
          <li>
            Connecting them with retailers and buyers seeking local, traceable
            produce.
          </li>
          <li>
            Linking them to suppliers of farming inputs and equipment, essential
            for scaling production.
          </li>
        </ul>

        <p className="text-lg leading-relaxed">
          By integrating agricultural suppliers, farmers, and buyers into one
          seamless platform, BENTICK³ CONNECT reduces inefficiencies, supports
          rural development, and fosters a resilient food ecosystem. Through our
          approach, we reduce dependency on imports, support local sourcing, and
          contribute meaningfully to national food security and economic growth.
        </p>

        <p className="text-lg leading-relaxed">
          Whether you’re a farmer needing a platform to grow your business, a
          retailer looking to support local agriculture, or a supplier wanting
          to reach South Africa’s new generation of agricultural
          producers—BENTICK³ CONNECT is where innovation meets transformation.
        </p>

        <p className="italic font-semibold text-green-800">
          Tagline: Harvesting trust, cultivating change.
        </p>

        <h2 className="text-2xl font-bold mt-10">
          🔗 How It Works – Step-by-Step on the BENTICK³ CONNECT Agriculture
          Platform
        </h2>

        <div className="space-y-6 text-lg">
          <p>
            <strong>1. Farmer Registration & Profile Setup:</strong> Emerging
            farmers begin by registering on the platform and creating a verified
            digital profile. This includes uploading farm certifications,
            outlining the types of produce they grow (vegetables, fruit,
            livestock, dairy, or processed goods), and specifying location,
            capacity, and harvesting cycles.
          </p>

          <p>
            <strong>2. Product Listing and Marketplace Access:</strong> Once
            registered, farmers can list their products with images, pricing,
            harvest timelines, and certifications. Retailers, processors, and
            bulk buyers can then browse and place direct orders.
          </p>

          <p>
            <strong>3. Secure Transactions via Smart Contracts:</strong> Each
            transaction is governed by a blockchain-based smart contract, which
            triggers automatic payments to farmers once produce is delivered and
            verified. This eliminates long payment delays and ensures that
            farmers are always compensated fairly and on time.
          </p>

          <p>
            <strong>4. Traceability from Farm to Shelf:</strong> Every step—from
            harvest to delivery—is recorded on the blockchain. This provides
            full traceability, allowing both retailers and end consumers to
            track the product’s journey and guarantees compliance with food
            safety and ethical sourcing standards.
          </p>

          <p>
            <strong>5. Access to Equipment and Agricultural Inputs:</strong>{" "}
            Farmers can also connect with verified farming equipment
            manufacturers and suppliers directly through the platform. This
            allows them to purchase or rent tools, irrigation systems,
            machinery, fertilizers, and other essentials to boost productivity.
          </p>

          <p>
            <strong>6. Real-Time Market Analytics and Insights:</strong> Using
            AI and real-time data collection, farmers get access to market
            analytics showing what products are in demand, pricing trends across
            different regions, and retailer preferences.
          </p>

          <p>
            <strong>7. Delivery Coordination and Support Services:</strong>{" "}
            BENTICK³ CONNECT also provides logistics support by coordinating
            with third-party delivery providers or cooperatives. We help ensure
            products reach the buyer efficiently and on time, with proof of
            delivery tied to the smart contract for automated payment release.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10">🌿 Why It Matters</h2>

        <p className="text-lg leading-relaxed">
          By digitizing and decentralizing the agricultural value chain,
          BENTICK³ CONNECT does more than improve logistics—it builds an
          ecosystem of trust. Every stakeholder, from farmers to retailers to
          equipment suppliers, gains visibility, efficiency, and fairness
          through our blockchain platform.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Farmers gain market access, better income, and control over their
            operations.
          </li>
          <li>
            Retailers gain local, ethically sourced produce with traceability.
          </li>
          <li>
            Manufacturers gain a direct line to their end users—South Africa’s
            emerging agricultural force.
          </li>
        </ul>

        <Link href="/">
          <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white">
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
