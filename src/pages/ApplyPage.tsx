import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Glasses, Users, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ApplyPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [visionDescription, setVisionDescription] = useState("");
  const [comments, setComments] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!firstName || !lastName || !email || !location || !accepted) {
      toast({
        title: "Missing Fields",
        description: "Please fill out all required fields and accept the terms.",
        variant: "destructive",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      const res = await fetch("/.netlify/functions/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          location,
          visionDescription,
          comments,
          acceptedTerms: accepted,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast({
          title: "Application Sent",
          description: data.message || "Please confirm via the email we just sent you.",
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setLocation("");
        setVisionDescription("");
        setComments("");
        setAccepted(false);
      } else {
        toast({
          title: "Error",
          description: data.error || "Something went wrong. Try again later.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast({
        title: "Error",
        description: "Could not send application. Try again later.",
        variant: "destructive",
      });
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <Navigation />

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Apply for Reading Glasses
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Register your interest to receive affordable reading glasses through our Reframe project.
                Fill out the form below and we'll get back to you with more information.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-amber-200 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                    <CardTitle className="flex items-center space-x-2">
                      <Glasses className="h-6 w-6 text-amber-700" />
                      <span>Application Form</span>
                    </CardTitle>
                    <CardDescription>
                      Please provide your information so we can contact you about the Reframe project.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" className="border-amber-200 focus:border-amber-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" className="border-amber-200 focus:border-amber-500" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" className="border-amber-200 focus:border-amber-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" className="border-amber-200 focus:border-amber-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location in Ghana *
                      </label>
                      <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City, Region" className="border-amber-200 focus:border-amber-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your vision needs
                      </label>
                      <Textarea value={visionDescription} onChange={(e) => setVisionDescription(e.target.value)} placeholder="Please describe any vision difficulties you're experiencing with reading or close-up work..." className="min-h-[120px] border-amber-200 focus:border-amber-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Comments
                      </label>
                      <Textarea value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Any additional information you'd like to share..." className="min-h-[80px] border-amber-200 focus:border-amber-500" />
                    </div>

                    <div className="flex items-start space-x-2">
                      <input
                          type="checkbox"
                          required
                          checked={accepted}
                          onChange={(e) => setAccepted(e.target.checked)}
                          className="mt-1"
                      />
                      <label className="text-sm text-gray-600">
                        I agree that Enactus Lüneburg e.V. may store and process the personal information provided in this form (including my name, email, and location) for the exclusive purpose of contacting me, assessing my eligibility for the glasses program, and sending relevant information or offers. I confirm that I have read and agree to the <a href="https://www.enactus-reframe.org/privacy" target="_blank" className="text-amber-600 hover:text-amber-700 underline font-semibold">Privacy Policy</a> regarding this data processing. <span className="text-red-500">*</span>
                      </label>
                    </div>

                    <Button onClick={handleSubmit} className="w-full bg-amber-600 hover:bg-amber-700">
                      Submit Application
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-green-200">
                  <CardContent className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Users className="h-8 w-8 text-green-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Community Impact</h3>
                        <p className="text-sm text-green-700">Helping communities together</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Our goal is to make vision correction accessible and affordable for everyone in Ghana.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-teal-200">
                  <CardContent className="p-6 bg-gradient-to-br from-teal-50 to-blue-50">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-8 w-8 text-teal-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Local Focus</h3>
                        <p className="text-sm text-teal-700">Starting in Ghana</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      We're beginning our project in Ghana with plans to expand our impact across the region.
                    </p>
                  </CardContent>
                </Card>

                <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-xl p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Next Steps</h3>
                  <div className="space-y-2 text-sm text-orange-100">
                    <p>1. Submit your application</p>
                    <p>2. We'll review your information</p>
                    <p>3. Our team will contact you</p>
                    <p>4. Receive information about availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
};

export default ApplyPage;
