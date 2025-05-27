
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Glasses, Users, MapPin } from "lucide-react";

const ApplyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Glasses className="h-6 w-6" />
                    <span>Application Form</span>
                  </CardTitle>
                  <CardDescription>
                    Please provide your information so we can contact you about the Reframe project.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="Enter your email address" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location in Ghana *
                    </label>
                    <Input placeholder="City, Region" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your vision needs
                    </label>
                    <Textarea 
                      placeholder="Please describe any vision difficulties you're experiencing with reading or close-up work..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Comments
                    </label>
                    <Textarea 
                      placeholder="Any additional information you'd like to share..."
                      className="min-h-[80px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-gray-700 hover:bg-gray-800">
                    Submit Application
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-8 w-8 text-gray-600" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Community Impact</h3>
                      <p className="text-sm text-gray-600">Helping communities together</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Our goal is to make vision correction accessible and affordable for everyone in Ghana.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="h-8 w-8 text-gray-600" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Local Focus</h3>
                      <p className="text-sm text-gray-600">Starting in Ghana</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    We're beginning our project in Ghana with plans to expand our impact across the region.
                  </p>
                </CardContent>
              </Card>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-3">Next Steps</h3>
                <div className="space-y-2 text-sm text-gray-300">
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
