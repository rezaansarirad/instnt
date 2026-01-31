import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { CheckCircle2, Edit3, ChevronLeft } from "lucide-react";

import logo from "@/assets/icons/violo_logo.png";

export function ApplyReview() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");

  const [jobData] = useState({
    title: "Sales Representative",
    company: "TBC",
    salary: "$200",
    location: "Istanbul",
  });

  const [applicationData] = useState({
    personalDetails: {
      firstName: "Busra",
      lastName: "Tuncel",
      email: "violorial@gmail.com",
      phone: "+90 555 123 4567",
    },
    documents: {
      cv: "Busra_Tuncel_CV.pdf",
      drivingLicense: "Driving_License.pdf",
      workPermit: "Work_Permit.pdf",
    },
    videoAnswers: [
      "What do you know about our company?",
      "What are your short- to mid-term career goals?",
      "Why are you interested in this company and this role?",
      "At what point do you stop working with a potential client?",
      "How comfortable are you with making cold calls?",
      "Tell me about a mistake you've made in sales and what you've learned from that mistake.",
      "What do you like the least about sales?",
    ],
  });

  useEffect(() => {
    if (!code) {
      navigate("/apply");
    }
  }, [code, navigate]);

  const handleSubmit = () => {
    alert("Application submitted successfully!");
    navigate("/apply");
  };

  const handleBack = () => {
    navigate(`/apply/video?code=${code}`);
  };

  const handleEditPersonal = () => {
    navigate(`/apply/details?code=${code}`);
  };

  const handleEditVideo = () => {
    navigate(`/apply/video?code=${code}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-background">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-6 sm:mb-10">
          <img src={logo} alt="Violo" className="h-8 mx-auto" />
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Review your application
            </h1>
            <p className="text-sm text-gray-600 mb-8">
              Check that everything looks good before submitting your
              application for {jobData.title}.
            </p>

            {/* Personal Details Section */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">
                  Personal details
                </h3>
                <button
                  onClick={handleEditPersonal}
                  className="text-sm text-orange-600 hover:text-orange-700 flex items-center gap-1 transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  Edit
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {applicationData.personalDetails.firstName}{" "}
                      {applicationData.personalDetails.lastName}
                    </p>
                    <p className="text-xs text-gray-500">Full name</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {applicationData.personalDetails.email}
                    </p>
                    <p className="text-xs text-gray-500">Email address</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {applicationData.personalDetails.phone}
                    </p>
                    <p className="text-xs text-gray-500">Phone number</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Documents</h3>
                <button
                  onClick={handleEditPersonal}
                  className="text-sm text-orange-600 hover:text-orange-700 flex items-center gap-1 transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  Edit
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {applicationData.documents.cv}
                    </p>
                    <p className="text-xs text-gray-500">CV / Resume</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {applicationData.documents.drivingLicense}
                    </p>
                    <p className="text-xs text-gray-500">Driving License</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {applicationData.documents.workPermit}
                    </p>
                    <p className="text-xs text-gray-500">Work Permit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Interview Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Video interview</h3>
                <button
                  onClick={handleEditVideo}
                  className="text-sm text-orange-600 hover:text-orange-700 flex items-center gap-1 transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  Review
                </button>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {applicationData.videoAnswers.length} questions answered
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      All video responses recorded successfully
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {applicationData.videoAnswers.map((question, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm">
                    <span className="text-orange-600 font-semibold shrink-0 w-5">
                      {index + 1}.
                    </span>
                    <span className="text-gray-700">{question}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleSubmit}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white text-base sm:text-lg py-5 sm:py-6"
              >
                Submit application
              </Button>

              <button
                onClick={handleBack}
                className="w-full text-sm text-gray-500 hover:text-gray-700 flex items-center justify-center gap-2 py-2 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to video interview
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Need help?
          </a>
        </div>
      </div>
    </div>
  );
}
