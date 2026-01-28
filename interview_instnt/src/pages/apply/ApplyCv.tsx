import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

export function ApplyCv() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setCvFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSelectFile = () => {
    fileInputRef.current?.click();
  };

  const handleContinue = () => {
    navigate(`/apply/review?code=${code}`);
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
                onClick={handleContinue}
                disabled={!cvFile}
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
                <div className="flex items-center justify-between p-3 border rounded bg-green-50 border-green-500">
                  <span className="text-sm">Driving Licence</span>
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

                <div className="flex items-center justify-between p-3 border rounded bg-green-50 border-green-500">
                  <span className="text-sm font-medium">Work Permit</span>
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
              </div>

              <Button
                onClick={handleContinue}
                disabled={!cvFile}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white mt-6 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue
              </Button>
            </Card>
          </div>

          {/* Middle - CV Upload */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Add your CV</h2>
              <p className="text-sm text-gray-600 mb-6">
                To complete this application please upload your CV. We share
                your CV only with the companies you apply to.
              </p>

              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                  dragActive
                    ? "border-orange-400 bg-orange-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                {!cvFile ? (
                  <>
                    <Button
                      onClick={handleSelectFile}
                      className="bg-orange-400 hover:bg-orange-500 text-white mb-4"
                    >
                      Select file
                    </Button>
                    <p className="text-sm text-gray-500">
                      We recommend using PDF, JPEG or PNG files.
                    </p>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm font-medium">{cvFile.name}</span>
                    </div>
                    <Button
                      onClick={handleSelectFile}
                      variant="outline"
                      className="border-gray-300"
                    >
                      Change file
                    </Button>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </Card>
          </div>

          {/* Right - Congratulations */}
          <div className="lg:col-span-1">
            <Card className="p-8 bg-white text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-500"
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
              <h2 className="text-xl font-semibold mb-2">Congratulations!</h2>
              <p className="text-sm text-gray-600">
                You have completed your application for {jobData.title}
              </p>
            </Card>

            <button
              onClick={() => navigate(`/apply/video?code=${code}`)}
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
