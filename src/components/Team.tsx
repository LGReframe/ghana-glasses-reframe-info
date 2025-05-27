
import { User } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "Project Lead",
      image: "/placeholder.svg"
    },
    {
      name: "Team Member 2",
      role: "Business Development",
      image: "/placeholder.svg"
    },
    {
      name: "Team Member 3",
      role: "Marketing & Outreach",
      image: "/placeholder.svg"
    },
    {
      name: "Team Member 4",
      role: "Operations",
      image: "/placeholder.svg"
    },
    {
      name: "Team Member 5",
      role: "Finance",
      image: "/placeholder.svg"
    },
    {
      name: "Team Member 6",
      role: "Research & Development",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
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
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-4">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">
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
