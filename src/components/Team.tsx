import { User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      name: "Max Dannenbaum",
      role: "Project Lead",
      image: "/placeholder.svg"
    },
    {
      name: "Constantin Beever",
      role: "Role TBD",
      image: "/placeholder.svg"
    },
    {
      name: "Emmanuela Mununkum",
      role: "Role TBD",
      image: "/placeholder.svg"
    },
    {
      name: "Fabian Flocken",
      role: "PR",
      image: "/lovable-uploads/f9be8d56-56fb-454c-8c4d-4d0215d9c0aa.png"
    },
    {
      name: "Jessica Blehm",
      role: "Role TBD",
      image: "/placeholder.svg"
    },
    {
      name: "Nicolas Seul",
      role: "Role TBD",
      image: "/placeholder.svg"
    },
    {
      name: "Patrick Janke",
      role: "Role TBD",
      image: "/placeholder.svg"
    }
  ];

  return <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated team behind the Reframe project, working together to make vision care accessible in Ghana.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={member.image} alt={member.name} className="object-center object-cover" />
                  <AvatarFallback className="bg-gray-200">
                    <User className="h-12 w-12 text-gray-400" />
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">
                {member.role}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};

export default Team;
