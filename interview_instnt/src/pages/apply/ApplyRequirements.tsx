import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

export function ApplyRequirements() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");

  const [requirements, setRequirements] = useState({
    drivingLicense: false,
    workPermit: false,
  });

  const [jobData] = useState({
    title: "Sales Representative",
    company: "TBC",
    salary: "$200",
    location: "Istanbul",
    cvRequired: "Yes",
  });

  useEffect(() => {
    if (!code) {
      navigate("/");
    }
  }, [code, navigate]);

  const handleContinue = () => {
    if (requirements.drivingLicense && requirements.workPermit) {
      navigate(`/apply/video?code=${code}`);
    }
  };

  const allRequirementsMet =
    requirements.drivingLicense && requirements.workPermit;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-light">instnt</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Job Info */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-gray-100">
              <h2 className="text-lg font-semibold mb-6 text-gray-700">
                {jobData.title}
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Company</span>
                  <span className="font-medium text-gray-900">
                    {jobData.company}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Salary</span>
                  <span className="font-medium text-gray-900">
                    {jobData.salary}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium text-gray-900">
                    {jobData.location}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">CV required</span>
                  <span className="font-medium text-gray-900">
                    {jobData.cvRequired}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleContinue}
                disabled={!allRequirementsMet}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue
              </Button>
            </Card>

            {/* Job Requirements */}
            <Card className="p-6 bg-white mt-6">
              <h3 className="font-semibold mb-4">Job requirements</h3>
              <p className="text-sm text-gray-600 mb-4">
                Before we start, please confirm you have all the requirements to
                apply for this job.
              </p>

              <div className="space-y-3">
                <div
                  onClick={() =>
                    setRequirements({
                      ...requirements,
                      drivingLicense: !requirements.drivingLicense,
                    })
                  }
                  className={`flex items-center justify-between p-3 border rounded cursor-pointer transition-colors ${
                    requirements.drivingLicense
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="text-sm">Driving Licence</span>
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center ${
                      requirements.drivingLicense
                        ? "bg-green-500"
                        : "bg-gray-200"
                    }`}
                  >
                    {requirements.drivingLicense && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                <div
                  onClick={() =>
                    setRequirements({
                      ...requirements,
                      workPermit: !requirements.workPermit,
                    })
                  }
                  className={`flex items-center justify-between p-3 border-2 rounded cursor-pointer transition-colors ${
                    requirements.workPermit
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="text-sm font-medium">Work Permit</span>
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center ${
                      requirements.workPermit ? "bg-green-500" : "bg-gray-200"
                    }`}
                  >
                    {requirements.workPermit && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              <Button
                onClick={handleContinue}
                disabled={!allRequirementsMet}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white mt-6 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue
              </Button>
            </Card>
          </div>

          {/* Middle - Personal Details (Read-only view) */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Personal details</h2>
              <p className="text-sm text-gray-600 mb-6">
                We only share your details to the companies you apply to, so
                they can reply to your application.
              </p>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-gray-600">First Name</span>
                  <p className="font-medium mt-1">Busra</p>
                </div>
                <div>
                  <span className="text-gray-600">Last Name</span>
                  <p className="font-medium mt-1">Tuncel</p>
                </div>
                <div>
                  <span className="text-gray-600">Email</span>
                  <p className="font-medium mt-1">tryinstnt@gmail.com</p>
                </div>
                <div>
                  <span className="text-gray-600">Phone number</span>
                  <p className="font-medium mt-1">-</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right - Video Interview */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Video interview</h2>
              <p className="text-sm text-gray-600 mb-6">
                Ready to record your video interview? Relax, make your
                communication skills shine and good luck!
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Number of questions</span>
                  <span className="font-medium">7</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Expected duration</span>
                  <span className="font-medium">7 min</span>
                </div>
              </div>

              <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white mb-4">
                Start interview
              </Button>

              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-700"
              >
                Try practice question
              </Button>

              <p className="text-xs text-gray-500 mt-4">
                Note: some questions may have a limited number of attempts.
              </p>
            </Card>

            <button
              onClick={() => navigate(`/apply/details?code=${code}`)}
              className="mt-6 text-sm text-gray-500 hover:text-gray-700 flex items-center"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pb-6">
        <div className="max-w-6xl mx-auto px-4">
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600">
            Need help?
          </a>
        </div>
      </div>
    </div>
  );
}
