import { User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      name: "Max Dannenbaum",
      role: "Project Lead",
      image: "/lovable-uploads/max.jpeg"
    },
    {
      name: "Constantin Beever",
      role: "Role TBD",
      image: ""
    },
    {
      name: "Emmanuela Mununkum",
      role: "Role TBD",
      image: ""
    },
    {
      name: "Fabian Flocken",
      role: "PR",
      image: "/lovable-uploads/f9be8d56-56fb-454c-8c4d-4d0215d9c0aa.png"
    },
    {
      name: "Jessica Blehm",
      role: "Role TBD",
      image: ""
    },
    {
      name: "Nicolas Seul",
      role: "Role TBD",
      image: ""
    },
    {
      name: "Patrick Janke",
      role: "Role TBD",
      image: ""
    }
  ];

  // Hintergrund auf 'reframe-beige' gesetzt für den Start
  return (
      <section className="py-20 px-4 bg-reframe-beige font-inter">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-reframe-terracotta mb-6 font-nunito">
              Our Team
            </h2>
            <p className="text-xl text-reframe-darktext max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated team behind the Reframe project, working together to make vision care accessible in Ghana.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
                <div key={index} className="bg-white border border-reframe-beigedark rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:border-reframe-highlight">
                  <div className="mb-4 flex justify-center">
                    <Avatar className="w-24 h-24 border-2 border-reframe-highlight">
                      <AvatarImage src={member.image} alt={member.name} className="object-center object-cover" />
                      <AvatarFallback className="bg-reframe-beigedark">
                        <User className="h-12 w-12 text-reframe-green" />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-semibold text-reframe-darktext mb-2 font-nunito">
                    {member.name}
                  </h3>
                  <p className="text-reframe-green font-medium">
                    {member.role}
                  </p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Team;