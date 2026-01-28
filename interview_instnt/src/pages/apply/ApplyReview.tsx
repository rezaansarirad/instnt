import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

export function ApplyReview() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");

  const [jobData] = useState({
    title: "Sales Representative",
    company: "TBC",
    salary: "$200",
    location: "Istanbul",
    cvRequired: "Yes",
  });

  const [applicationData] = useState({
    personalDetails: {
      name: "Busra Tuncel",
      email: "instntrial@gmail.com",
    },
    cv: "Busra Tuncel CV.pdf",
    interview: [
      "What do you know about our company?",
      "What are your short- to mid-term career goals?",
      "Why are you interested in this company and this role?",
      "At what point do you stop working with a potential client?",
      "How comfortable are you with making cold calls?",
      "Tell me about a mistake you've made in sales and what you've learned from that mistake.",
      "What do you like the least about sales?",
    ],
    requirements: ["Driving Licence", "Work Permit"],
  });

  useEffect(() => {
    if (!code) {
      navigate("/");
    }
  }, [code, navigate]);

  const handleSubmit = () => {
    // Submit application logic here
    alert("Application submitted successfully!");
    navigate("/");
  };

  const handleEdit = (section: string) => {
    if (section === "personal") {
      navigate(`/apply/details?code=${code}`);
    } else if (section === "cv") {
      navigate(`/apply/cv?code=${code}`);
    } else if (section === "interview") {
      navigate(`/apply/video?code=${code}`);
    }
  };

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
                onClick={handleSubmit}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white"
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
                {applicationData.requirements.map((req, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded bg-green-50 border-green-500"
                  >
                    <span className="text-sm">{req}</span>
                    <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
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
                    </div>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white mt-6"
              >
                Continue
              </Button>
            </Card>
          </div>

          {/* Middle & Right - Review Application */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white">
              <h2 className="text-2xl font-semibold mb-2">
                Review your application
              </h2>
              <p className="text-sm text-gray-600 mb-8">
                Check that everything looks good before submitting your
                application for {jobData.title}.
              </p>

              {/* Personal Details */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Personal details</h3>
                  <button
                    onClick={() => handleEdit("personal")}
                    className="text-sm text-gray-500 hover:text-gray-700 underline"
                  >
                    Edit
                  </button>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
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
                    <span>{applicationData.personalDetails.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
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
                    <span>{applicationData.personalDetails.email}</span>
                  </div>
                </div>
              </div>

              {/* CV */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">CV</h3>
                  <button
                    onClick={() => handleEdit("cv")}
                    className="text-sm text-gray-500 hover:text-gray-700 underline"
                  >
                    Change
                  </button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    className="w-4 h-4 text-green-500"
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
                  <span>{applicationData.cv}</span>
                </div>
              </div>

              {/* Interview */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Interview</h3>
                  <button
                    onClick={() => handleEdit("interview")}
                    className="text-sm text-gray-500 hover:text-gray-700 underline"
                  >
                    Review
                  </button>
                </div>
                <div className="space-y-2 text-sm">
                  {applicationData.interview.map((question, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
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
                      <span className="text-gray-700">{question}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4">Requirements</h3>
                <div className="space-y-2 text-sm">
                  {applicationData.requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-green-500"
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
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white text-lg py-6"
              >
                Submit application
              </Button>
            </Card>

            <button
              onClick={() => navigate(`/apply/cv?code=${code}`)}
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
