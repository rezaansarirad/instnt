import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card } from "../../components/ui/card";
import {
  Building2,
  DollarSign,
  MapPin,
  FileText,
  User,
  Mail,
  Phone,
  Upload,
  CheckCircle2,
  Camera,
  Mic,
  AlertCircle,
} from "lucide-react";

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
    cv: null as File | null,
  });

  const [dragActive, setDragActive] = useState({
    drivingLicense: false,
    workPermit: false,
    cv: false,
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
    if (
      requirements.drivingLicense &&
      requirements.workPermit &&
      requirements.cv
    ) {
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
    type: "drivingLicense" | "workPermit" | "cv",
    file: File | null,
  ) => {
    if (file) {
      const validTypes = [
        "application/pdf",
        "image/jpeg",
        "image/jpg",
        "image/png",
      ];
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (!validTypes.includes(file.type)) {
        alert("Please upload a PDF, JPG, or PNG file");
        return;
      }

      if (file.size > maxSize) {
        alert("File size must be less than 10MB");
        return;
      }

      setRequirements({ ...requirements, [type]: file });
    }
  };

  const handleDrag = (
    e: React.DragEvent,
    type: "drivingLicense" | "workPermit" | "cv",
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive({ ...dragActive, [type]: true });
    } else if (e.type === "dragleave") {
      setDragActive({ ...dragActive, [type]: false });
    }
  };

  const handleDrop = (
    e: React.DragEvent,
    type: "drivingLicense" | "workPermit" | "cv",
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive({ ...dragActive, [type]: false });

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(type, e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-orange-50/20 to-gray-50">
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-light tracking-tight text-gray-900">
              violo
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              Step {currentStep} of 3
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-center">
            <div className="flex items-center w-full max-w-3xl">
              {/* Step 1 */}
              <div className="flex flex-col items-center flex-1">
                <div className="relative">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep >= 1
                        ? "bg-linear-to-br from-orange-400 to-orange-500 text-white shadow-lg shadow-orange-200 scale-110"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > 1 ? (
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <span className="font-semibold text-sm sm:text-base">
                        1
                      </span>
                    )}
                  </div>
                </div>
                <span
                  className={`mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-center px-1 ${
                    currentStep >= 1 ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  Personal Details
                </span>
              </div>

              <div
                className={`flex-1 h-1 mx-1 sm:mx-2 rounded-full transition-all duration-500 ${
                  currentStep >= 2
                    ? "bg-linear-to-r from-orange-400 to-orange-500"
                    : "bg-gray-200"
                }`}
              ></div>

              {/* Step 2 */}
              <div className="flex flex-col items-center flex-1">
                <div className="relative">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep >= 2
                        ? "bg-linear-to-br from-orange-400 to-orange-500 text-white shadow-lg shadow-orange-200 scale-110"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > 2 ? (
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <span className="font-semibold text-sm sm:text-base">
                        2
                      </span>
                    )}
                  </div>
                </div>
                <span
                  className={`mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-center px-1 ${
                    currentStep >= 2 ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  Requirements
                </span>
              </div>

              <div
                className={`flex-1 h-1 mx-1 sm:mx-2 rounded-full transition-all duration-500 ${
                  currentStep >= 3
                    ? "bg-linear-to-r from-orange-400 to-orange-500"
                    : "bg-gray-200"
                }`}
              ></div>

              {/* Step 3 */}
              <div className="flex flex-col items-center flex-1">
                <div className="relative">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep >= 3
                        ? "bg-linear-to-br from-orange-400 to-orange-500 text-white shadow-lg shadow-orange-200 scale-110"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <span className="font-semibold text-sm sm:text-base">
                      3
                    </span>
                  </div>
                </div>
                <span
                  className={`mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-center px-1 ${
                    currentStep >= 3 ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  Video Interview
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {/* Enhanced Left Sidebar - Job Info */}
          <div className="lg:col-span-1">
            <Card className="p-5 sm:p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
              <div className="mb-5 sm:mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-orange-400 to-orange-500 mb-3 sm:mb-4">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                  {jobData.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">Job Details</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Building2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-0.5">Company</p>
                    <p className="font-medium text-gray-900 truncate">
                      {jobData.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <DollarSign className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-0.5">Salary</p>
                    <p className="font-medium text-gray-900">
                      {jobData.salary}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-0.5">Location</p>
                    <p className="font-medium text-gray-900">
                      {jobData.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <FileText className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-0.5">CV Required</p>
                    <p className="font-medium text-gray-900">
                      {jobData.cvRequired}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Step 1: Enhanced Personal Details */}
          {currentStep === 1 && (
            <div className="lg:col-span-2 animate-in fade-in duration-500">
              <Card className="p-5 sm:p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                    Personal details
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 flex items-start">
                    <AlertCircle className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-blue-500" />
                    <span>
                      We only share your details to the companies you apply to,
                      so they can reply to your application.
                    </span>
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium text-gray-700 flex items-center"
                      >
                        <User className="w-4 h-4 mr-2 text-gray-400" />
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        placeholder="Busra"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium text-gray-700 flex items-center"
                      >
                        <User className="w-4 h-4 mr-2 text-gray-400" />
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        placeholder="Tuncel"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 flex items-center"
                    >
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      placeholder="tryviolo@gmail.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700 flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
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
                    className="w-full h-12 bg-linear-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-medium shadow-lg shadow-orange-200 disabled:from-gray-300 disabled:to-gray-300 disabled:shadow-none transition-all duration-200"
                  >
                    Continue
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* Step 2: Enhanced Job Requirements */}
          {currentStep === 2 && (
            <div className="lg:col-span-2 animate-in fade-in duration-500">
              <Card className="p-5 sm:p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                    Job requirements
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 flex items-start">
                    <AlertCircle className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-blue-500" />
                    <span>
                      Please upload the required documents to proceed with your
                      application.
                    </span>
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-700 flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-gray-400" />
                      Driving Licence
                    </Label>
                    <div
                      onDragEnter={(e) => handleDrag(e, "drivingLicense")}
                      onDragLeave={(e) => handleDrag(e, "drivingLicense")}
                      onDragOver={(e) => handleDrag(e, "drivingLicense")}
                      onDrop={(e) => handleDrop(e, "drivingLicense")}
                      className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center transition-all duration-200 ${
                        requirements.drivingLicense
                          ? "border-green-300 bg-green-50"
                          : dragActive.drivingLicense
                          ? "border-orange-500 bg-orange-100 scale-105"
                          : "border-gray-300 hover:border-orange-400 hover:bg-orange-50/50"
                      }`}
                    >
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
                        className="cursor-pointer block"
                      >
                        {requirements.drivingLicense ? (
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center mb-2 sm:mb-3">
                              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                            </div>
                            <p className="font-medium text-green-700 mb-1 text-sm sm:text-base break-all px-2">
                              {requirements.drivingLicense.name}
                            </p>
                            <p className="text-xs text-green-600">
                              File uploaded successfully
                            </p>
                          </div>
                        ) : (
                          <div>
                            <div
                              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-colors ${
                                dragActive.drivingLicense
                                  ? "bg-orange-200"
                                  : "bg-gray-100"
                              }`}
                            >
                              <Upload
                                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                                  dragActive.drivingLicense
                                    ? "text-orange-600"
                                    : "text-gray-400"
                                }`}
                              />
                            </div>
                            <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
                              md{" "}
                              {dragActive.drivingLicense
                                ? "Drop your file here"
                                : "Click to upload or drag and drop"}
                            </p>
                            <p className="text-xs text-gray-500">
                              PDF, JPG or PNG (max 10MB)
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-700 flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-gray-400" />
                      Work Permit
                    </Label>
                    <div
                      onDragEnter={(e) => handleDrag(e, "workPermit")}
                      onDragLeave={(e) => handleDrag(e, "workPermit")}
                      onDragOver={(e) => handleDrag(e, "workPermit")}
                      onDrop={(e) => handleDrop(e, "workPermit")}
                      className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center transition-all duration-200 ${
                        requirements.workPermit
                          ? "border-green-300 bg-green-50"
                          : dragActive.workPermit
                          ? "border-orange-500 bg-orange-100 scale-105"
                          : "border-gray-300 hover:border-orange-400 hover:bg-orange-50/50"
                      }`}
                    >
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
                      <label
                        htmlFor="workPermit"
                        className="cursor-pointer block"
                      >
                        {requirements.workPermit ? (
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center mb-2 sm:mb-3">
                              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                            </div>
                            <p className="font-medium text-green-700 mb-1 text-sm sm:text-base break-all px-2">
                              {requirements.workPermit.name}
                            </p>
                            <p className="text-xs text-green-600">
                              File uploaded successfully
                            </p>
                          </div>
                        ) : (
                          <div>
                            <div
                              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-colors ${
                                dragActive.workPermit
                                  ? "bg-orange-200"
                                  : "bg-gray-100"
                              }`}
                            >
                              <Upload
                                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                                  dragActive.workPermit
                                    ? "text-orange-600"
                                    : "text-gray-400"
                                }`}
                              />
                            </div>
                            <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
                              {dragActive.workPermit
                                ? "Drop your file here"
                                : "Click to upload or drag and drop"}
                            </p>
                            <p className="text-xs text-gray-500">
                              PDF, JPG or PNG (max 10MB)
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-700 flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-gray-400" />
                      CV / Resume
                    </Label>
                    <div
                      onDragEnter={(e) => handleDrag(e, "cv")}
                      onDragLeave={(e) => handleDrag(e, "cv")}
                      onDragOver={(e) => handleDrag(e, "cv")}
                      onDrop={(e) => handleDrop(e, "cv")}
                      className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center transition-all duration-200 ${
                        requirements.cv
                          ? "border-green-300 bg-green-50"
                          : dragActive.cv
                          ? "border-orange-500 bg-orange-100 scale-105"
                          : "border-gray-300 hover:border-orange-400 hover:bg-orange-50/50"
                      }`}
                    >
                      <input
                        type="file"
                        id="cv"
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) =>
                          handleFileUpload("cv", e.target.files?.[0] || null)
                        }
                      />
                      <label htmlFor="cv" className="cursor-pointer block">
                        {requirements.cv ? (
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center mb-2 sm:mb-3">
                              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                            </div>
                            <p className="font-medium text-green-700 mb-1 text-sm sm:text-base break-all px-2">
                              {requirements.cv.name}
                            </p>
                            <p className="text-xs text-green-600">
                              File uploaded successfully
                            </p>
                          </div>
                        ) : (
                          <div>
                            <div
                              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-colors ${
                                dragActive.cv ? "bg-orange-200" : "bg-gray-100"
                              }`}
                            >
                              <Upload
                                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                                  dragActive.cv
                                    ? "text-orange-600"
                                    : "text-gray-400"
                                }`}
                              />
                            </div>
                            <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
                              {dragActive.cv
                                ? "Drop your file here"
                                : "Click to upload or drag and drop"}
                            </p>
                            <p className="text-xs text-gray-500">
                              PDF, JPG or PNG (max 10MB)
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                    <Button
                      onClick={() => setCurrentStep(1)}
                      variant="outline"
                      className="w-full sm:flex-1 h-11 sm:h-12 border-gray-300 hover:bg-gray-50"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleRequirementsNext}
                      disabled={
                        !requirements.drivingLicense ||
                        !requirements.workPermit ||
                        !requirements.cv
                      }
                      className="w-full sm:flex-1 h-11 sm:h-12 bg-linear-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-medium shadow-lg shadow-orange-200 disabled:from-gray-300 disabled:to-gray-300 disabled:shadow-none transition-all duration-200"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Step 3: Enhanced Video Interview */}
          {currentStep === 3 && (
            <div className="lg:col-span-2 animate-in fade-in duration-500">
              <Card className="p-5 sm:p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                    Video interview
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 flex items-start">
                    <AlertCircle className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-blue-500" />
                    <span>
                      Ready to record your video interview? Relax, make your
                      communication skills shine and good luck!
                    </span>
                  </p>
                </div>

                {!permissions.camera || !permissions.microphone ? (
                  <div className="space-y-5 sm:space-y-6">
                    <div className="bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-4 sm:p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>
                        <div className="ml-3 sm:ml-4 flex-1 min-w-0">
                          <h3 className="font-semibold text-blue-900 mb-1 text-sm sm:text-base">
                            Camera and Microphone Access Required
                          </h3>
                          <p className="text-xs sm:text-sm text-blue-700">
                            To continue with the video interview, please grant
                            access to your camera and microphone.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                        <div className="flex items-center text-xs sm:text-sm text-blue-800">
                          <Camera className="w-4 h-4 mr-2 shrink-0" />
                          <span>Camera access for video recording</span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-blue-800">
                          <Mic className="w-4 h-4 mr-2 shrink-0" />
                          <span>Microphone access for audio recording</span>
                        </div>
                      </div>

                      <Button
                        onClick={requestPermissions}
                        className="w-full h-11 sm:h-12 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium shadow-lg shadow-blue-200"
                      >
                        Grant Permissions
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 sm:space-y-6">
                    <div className="bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 sm:p-5">
                      <div className="flex items-center">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <p className="font-medium text-green-900 text-sm sm:text-base">
                            Permissions granted
                          </p>
                          <p className="text-xs sm:text-sm text-green-700">
                            Your camera and microphone are ready
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 sm:p-5 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">
                          7
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Number of questions
                        </p>
                      </div>
                      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 sm:p-5 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">
                          7 min
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Expected duration
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6">
                      <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                        <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-orange-500" />
                        Interview Questions
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {[
                          "Tell us about yourself and your experience",
                          "Why do you want to work for our company?",
                          "What are your greatest strengths?",
                          "Describe a challenging situation you faced",
                          "Where do you see yourself in 5 years?",
                          "How do you handle stress and pressure?",
                          "Why should we hire you?",
                        ].map((question, index) => (
                          <li
                            key={index}
                            className="flex items-start p-2 sm:p-3 rounded-lg hover:bg-white transition-colors"
                          >
                            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-100 text-orange-600 text-xs sm:text-sm font-semibold shrink-0 mr-2 sm:mr-3 mt-0.5">
                              {index + 1}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-700 flex-1">
                              {question}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                      <Button
                        onClick={() => setCurrentStep(2)}
                        variant="outline"
                        className="w-full sm:flex-1 h-11 sm:h-12 border-gray-300 hover:bg-gray-50"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={() => navigate(`/apply/video?code=${code}`)}
                        className="w-full sm:flex-1 h-11 sm:h-12 bg-linear-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-medium shadow-lg shadow-orange-200 transition-all duration-200"
                      >
                        Start Interview
                      </Button>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4">
                      <p className="text-xs text-amber-800 text-center flex items-center justify-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-2 shrink-0" />
                        <span>
                          Note: some questions may have a limited number of
                          attempts.
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="mt-10 sm:mt-16 pb-6 sm:pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-500 hover:text-orange-600 transition-colors duration-200 flex items-center group"
            >
              <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 group-hover:text-orange-600" />
              Need help?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
