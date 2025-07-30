import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  console.log("Newsletter component mounted");
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", email); // Debug-Ausgabe

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      console.log("Server response:", data);

      if (!res.ok) throw new Error(data.message || "Unknown error");

      setIsSubscribed(true);
      setEmail('');
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });

    } catch (error: unknown) {
      console.error("Subscription error:", error);
      const msg = error instanceof Error ? error.message : "Unexpected error";
      toast({
        title: "Error",
        description: msg,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
          <p className="text-gray-600">
            You're now subscribed to our newsletter. Stay tuned for updates on our mission to improve vision care in Ghana.
          </p>
        </div>
    );
  }

  return (
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl">
        <div className="text-center mb-6">
          <Mail className="h-12 w-12 text-amber-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Stay Updated</h3>
          <p className="text-gray-600">
            Subscribe to our newsletter and get the latest updates on our mission to make vision care accessible in Ghana.
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              disabled={isLoading}
          />
          <button
              type="submit"
              disabled={isLoading}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
  );
};

export default Newsletter;
