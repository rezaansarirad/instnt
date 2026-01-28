import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card } from "../../components/ui/card";

export function ApplyDetails() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [requirements, setRequirements] = useState({
    drivingLicense: null as File | null,
    workPermit: null as File | null,
  });

  const [permissions, setPermissions] = useState({
    camera: false,
    microphone: false,
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

  const handlePersonalDetailsNext = () => {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone
    ) {
      setCurrentStep(2);
    }
  };

  const handleRequirementsNext = () => {
    if (requirements.drivingLicense && requirements.workPermit) {
      setCurrentStep(3);
    }
  };

  const requestPermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setPermissions({ camera: true, microphone: true });
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.error("Permission denied:", error);
    }
  };

  const handleFileUpload = (
    type: "drivingLicense" | "workPermit",
    file: File | null,
  ) => {
    setRequirements({ ...requirements, [type]: file });
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
        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4">
              {/* Step 1 */}
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= 1
                      ? "bg-orange-400 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  1
                </div>
                <span className="ml-2 text-sm font-medium">
                  Personal Details
                </span>
              </div>

              <div className="w-16 h-0.5 bg-gray-300"></div>

              {/* Step 2 */}
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= 2
                      ? "bg-orange-400 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  2
                </div>
                <span className="ml-2 text-sm font-medium">
                  Job Requirements
                </span>
              </div>

              <div className="w-16 h-0.5 bg-gray-300"></div>

              {/* Step 3 */}
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= 3
                      ? "bg-orange-400 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  3
                </div>
                <span className="ml-2 text-sm font-medium">
                  Video Interview
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Job Info (Always Visible) */}
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
            </Card>
          </div>

          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="lg:col-span-2">
              <Card className="p-6 bg-white">
                <h2 className="text-xl font-semibold mb-2">Personal details</h2>
                <p className="text-sm text-gray-600 mb-6">
                  We only share your details to the companies you apply to, so
                  they can reply to your application.
                </p>

                <div className="space-y-4">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="text-sm text-gray-700"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="mt-1"
                      placeholder="Busra"
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="text-sm text-gray-700">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="mt-1"
                      placeholder="Tuncel"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1"
                      placeholder="tryinstnt@gmail.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm text-gray-700">
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-1"
                      placeholder="+90 555 123 4567"
                    />
                  </div>

                  <Button
                    onClick={handlePersonalDetailsNext}
                    disabled={
                      !formData.firstName ||
                      !formData.lastName ||
                      !formData.email ||
                      !formData.phone
                    }
                    className="w-full bg-orange-400 hover:bg-orange-500 text-white disabled:bg-gray-300"
                  >
                    Continue
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* Step 2: Job Requirements */}
          {currentStep === 2 && (
            <div className="lg:col-span-2">
              <Card className="p-6 bg-white">
                <h2 className="text-xl font-semibold mb-2">Job requirements</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Please upload the required documents to proceed with your
                  application.
                </p>

                <div className="space-y-4">
                  <div>
                    <Label className="text-sm text-gray-700 mb-2 block">
                      Driving Licence
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                      <input
                        type="file"
                        id="drivingLicense"
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) =>
                          handleFileUpload(
                            "drivingLicense",
                            e.target.files?.[0] || null,
                          )
                        }
                      />
                      <label
                        htmlFor="drivingLicense"
                        className="cursor-pointer"
                      >
                        {requirements.drivingLicense ? (
                          <div className="flex items-center justify-center text-green-600">
                            <svg
                              className="w-5 h-5 mr-2"
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
                            {requirements.drivingLicense.name}
                          </div>
                        ) : (
                          <div>
                            <svg
                              className="w-8 h-8 mx-auto text-gray-400 mb-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            <p className="text-sm text-gray-600">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              PDF, JPG or PNG (max 10MB)
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm text-gray-700 mb-2 block">
                      Work Permit
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                      <input
                        type="file"
                        id="workPermit"
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) =>
                          handleFileUpload(
                            "workPermit",
                            e.target.files?.[0] || null,
                          )
                        }
                      />
                      <label htmlFor="workPermit" className="cursor-pointer">
                        {requirements.workPermit ? (
                          <div className="flex items-center justify-center text-green-600">
                            <svg
                              className="w-5 h-5 mr-2"
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
                            {requirements.workPermit.name}
                          </div>
                        ) : (
                          <div>
                            <svg
                              className="w-8 h-8 mx-auto text-gray-400 mb-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            <p className="text-sm text-gray-600">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              PDF, JPG or PNG (max 10MB)
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => setCurrentStep(1)}
                      variant="outline"
                      className="w-full"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleRequirementsNext}
                      disabled={
                        !requirements.drivingLicense || !requirements.workPermit
                      }
                      className="w-full bg-orange-400 hover:bg-orange-500 text-white disabled:bg-gray-300"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Step 3: Video Interview */}
          {currentStep === 3 && (
            <div className="lg:col-span-2">
              <Card className="p-6 bg-white">
                <h2 className="text-xl font-semibold mb-2">Video interview</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Ready to record your video interview? Relax, make your
                  communication skills shine and good luck!
                </p>

                {!permissions.camera || !permissions.microphone ? (
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900 mb-2">
                        Camera and Microphone Access Required
                      </h3>
                      <p className="text-sm text-blue-700 mb-4">
                        To continue with the video interview, please grant
                        access to your camera and microphone.
                      </p>
                      <Button
                        onClick={requestPermissions}
                        className="w-full bg-orange-400 hover:bg-orange-500 text-white"
                      >
                        Grant Permissions
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center text-green-800">
                        <svg
                          className="w-5 h-5 mr-2"
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
                        Permissions granted
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          Number of questions
                        </span>
                        <span className="font-medium">7</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Expected duration</span>
                        <span className="font-medium">7 min</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                      <h3 className="font-semibold mb-3">
                        Interview Questions
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="font-medium mr-2">1.</span>
                          Tell us about yourself and your experience
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">2.</span>
                          Why do you want to work for our company?
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">3.</span>
                          What are your greatest strengths?
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">4.</span>
                          Describe a challenging situation you faced
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">5.</span>
                          Where do you see yourself in 5 years?
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">6.</span>
                          How do you handle stress and pressure?
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">7.</span>
                          Why should we hire you?
                        </li>
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        onClick={() => setCurrentStep(2)}
                        variant="outline"
                        className="w-full"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={() => navigate(`/apply/video?code=${code}`)}
                        className="w-full bg-orange-400 hover:bg-orange-500 text-white"
                      >
                        Start Interview
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      Note: some questions may have a limited number of
                      attempts.
                    </p>
                  </div>
                )}
              </Card>
            </div>
          )}
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
