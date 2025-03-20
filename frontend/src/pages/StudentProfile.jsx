import { useEffect, useState } from "react";
import axios from "axios";

const StudentProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:8000/api/profile", {
          headers: { Authorization: token },
        });
        setProfile(res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Student Profile</h1>
        {profile && (
          <div className="space-y-4">
            <p className="text-gray-600"><strong>Name:</strong> {profile.name}</p>
            <p className="text-gray-600"><strong>Email:</strong> {profile.email}</p>
            <p className="text-gray-600"><strong>Role:</strong> {profile.role}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentProfile;