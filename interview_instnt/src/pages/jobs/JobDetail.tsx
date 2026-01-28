import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  ChevronLeft,
  Edit,
  Users,
  XCircle,
  Download,
  Upload,
  Calendar,
  MapPin,
  Globe,
  FileText,
  CheckCircle2,
  ThumbsUp,
  Clock,
  Video,
  Link as LinkIcon,
  Hash,
  Copy,
  Check,
  Loader2,
  AlertCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface JobData {
  id: string;
  title: string;
  company: string;
  language: string;
  location: string;
  cvRequired: boolean;
  availableUntil: string | null;
  requirements: string[];
  questions: Question[];
  candidates: number;
  daysLeft: number;
  magicLink: string;
  jobCode: string;
  introVideo: string | null;
  createdAt: string;
}

interface Question {
  id: string;
  question: string;
  likes?: number;
  duration: string;
  unlimitedTakes?: boolean;
}

const JobDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();

  const [jobData, setJobData] = useState<JobData | null>(null);
  const [loading, setLoading] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [showCloseDialog, setShowCloseDialog] = useState(false);
  const [showExtendDialog, setShowExtendDialog] = useState(false);
  const [uploadingVideo, setUploadingVideo] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isExtending, setIsExtending] = useState(false);

  useEffect(() => {
    fetchJobData();
  }, [id]);

  const fetchJobData = async () => {
    setLoading(true);
    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockData: JobData = {
        id: id || "1",
        title: "Sales Representative",
        company: "TBC",
        language: "English",
        location: "Istanbul",
        cvRequired: true,
        availableUntil: null,
        requirements: ["Driving Licence", "Work Permit"],
        questions: [
          {
            id: "1",
            question: "What do you know about our company?",
            likes: 1,
            duration: "30sec",
          },
          {
            id: "2",
            question: "What are your short- to mid-term career goals?",
            likes: 1,
            duration: "45sec",
          },
          {
            id: "3",
            question: "Why are you interested in this company and this role?",
            likes: 3,
            duration: "60sec",
          },
          {
            id: "4",
            question:
              "At what point do you stop working with a potential client?",
            likes: 1,
            duration: "45sec",
          },
          {
            id: "5",
            question: "How comfortable are you with making cold calls?",
            duration: "30sec",
            unlimitedTakes: true,
          },
          {
            id: "6",
            question:
              "Tell me about a mistake you've made in sales and what you've learned from that mistake.",
            duration: "60sec",
            unlimitedTakes: true,
          },
          {
            id: "7",
            question: "What do you like the least about sales?",
            likes: 1,
            duration: "45sec",
          },
        ],
        candidates: 0,
        daysLeft: 28,
        magicLink: "https://link.violo.com/326391",
        jobCode: "326391",
        introVideo: null,
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      };

      setJobData(mockData);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load job details. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string, type: "link" | "code") => {
    try {
      await navigator.clipboard.writeText(text);

      if (type === "link") {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } else {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      }

      toast({
        title: "Copied!",
        description: `${
          type === "link" ? "Magic link" : "Job code"
        } copied to clipboard`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleCloseJob = async () => {
    setIsClosing(true);
    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Job Closed",
        description: "The job posting has been successfully closed.",
      });

      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to close job. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsClosing(false);
      setShowCloseDialog(false);
    }
  };

  const handleExtendJob = async () => {
    setIsExtending(true);
    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (jobData) {
        setJobData({
          ...jobData,
          daysLeft: jobData.daysLeft + 28,
        });
      }

      toast({
        title: "Job Extended",
        description: "The job posting has been extended for 4 weeks.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to extend job. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsExtending(false);
      setShowExtendDialog(false);
    }
  };

  const handleVideoUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("video/")) {
      toast({
        title: "Invalid File",
        description: "Please upload a video file.",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 100 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Video file must be less than 100MB.",
        variant: "destructive",
      });
      return;
    }

    setUploadingVideo(true);

    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (jobData) {
        setJobData({
          ...jobData,
          introVideo: URL.createObjectURL(file),
        });
      }

      toast({
        title: "Video Uploaded",
        description: "Intro video has been successfully uploaded.",
      });
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "Failed to upload video. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploadingVideo(false);
    }
  };

  const handleExportCandidates = async () => {
    try {
      // TODO: Replace with actual API call
      toast({
        title: "Exporting...",
        description: "Preparing candidate data for export.",
      });

      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Export Complete",
        description: "Candidate data has been exported successfully.",
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "Failed to export candidates. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleImportCandidates = () => {
    toast({
      title: "Import Candidates",
      description: "Import functionality coming soon.",
    });
  };

  const handleManageTeam = () => {
    navigate(`/jobs/${id}/team`);
  };

  const handleEditDetails = () => {
    navigate(`/jobs/${id}/edit`);
  };

  const getTimeSincePosted = (createdAt: string) => {
    const now = new Date();
    const posted = new Date(createdAt);
    const diffDays = Math.floor(
      (now.getTime() - posted.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (diffDays === 0) return "Posted today";
    if (diffDays === 1) return "Posted 1 day ago";
    return `Posted ${diffDays} days ago`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <main className="max-w-6xl mx-auto px-4 py-6 md:py-10 md:px-8">
          <Skeleton className="h-4 w-32 mb-8" />

          <div className="mb-8">
            <Skeleton className="h-10 w-3/4 max-w-lg mb-4" />
            <div className="flex gap-4 mb-6">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-32" />
            </div>

            <div className="flex flex-wrap gap-3">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-28" />
              <div className="flex gap-3 ml-auto">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 md:p-8 shadow-sm border border-indigo-100 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex gap-8 md:gap-16">
                <div className="text-center">
                  <Skeleton className="h-10 w-16 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <div className="text-center">
                  <Skeleton className="h-10 w-16 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
              <Skeleton className="h-12 w-64" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-5">
                <div className="flex-1">
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-40" />
                </div>
                <Skeleton className="h-8 w-16" />
              </div>
              <div className="space-y-5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Skeleton className="h-5 w-5 rounded-full mt-0.5" />
                    <div className="flex-1">
                      <Skeleton className="h-3 w-20 mb-2" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-5">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-8 w-16" />
              </div>
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <Skeleton key={i} className="h-12 w-full rounded-lg" />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 mb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-40" />
              </div>
              <Skeleton className="h-8 w-16" />
            </div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-20 w-full rounded-lg" />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-56" />
              </div>
              <Skeleton className="h-8 w-16" />
            </div>
            <Skeleton className="h-48 w-full rounded-lg" />
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 md:p-8 shadow-sm border border-indigo-100">
            <Skeleton className="h-6 w-40 mb-2" />
            <Skeleton className="h-4 w-96 mb-6" />
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <Skeleton className="h-5 w-32 mb-3" />
                <div className="flex gap-3">
                  <Skeleton className="h-10 flex-1" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <Skeleton className="h-5 w-32 mb-3" />
                <div className="flex gap-3">
                  <Skeleton className="h-10 flex-1" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!jobData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Job Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The job you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <main className="max-w-6xl mx-auto px-4 py-6 md:py-10 md:px-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="group flex items-center gap-1 text-gray-600 hover:text-primary mb-8 transition-colors font-medium"
          >
            <ChevronLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to all jobs
          </button>

          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 break-words">
                  {jobData.title} at {jobData.company}
                </h1>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {getTimeSincePosted(jobData.createdAt)}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {jobData.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                className="gap-2 hover:bg-gray-50 transition-colors"
                onClick={handleManageTeam}
              >
                <Users size={16} />
                Manage team
              </Button>
              <Button
                variant="outline"
                className="gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
                onClick={() => setShowCloseDialog(true)}
              >
                <XCircle size={16} />
                Close job
              </Button>
              <div className="flex gap-3 ml-auto">
                <Button
                  variant="outline"
                  className="gap-2 hover:bg-gray-50 transition-colors"
                  onClick={handleImportCandidates}
                >
                  <Upload size={16} />
                  Import
                </Button>
                <Button
                  variant="outline"
                  className="gap-2 hover:bg-gray-50 transition-colors"
                  onClick={handleExportCandidates}
                >
                  <Download size={16} />
                  Export
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 md:p-8 shadow-sm border border-indigo-100 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex gap-8 md:gap-16">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {jobData.candidates}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-1">
                    Candidates
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-br from-orange-500 to-red-500 bg-clip-text text-transparent">
                    {jobData.daysLeft}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-1">
                    Days left
                  </div>
                </div>
              </div>
              <Button
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-md hover:shadow-lg transition-all px-6 py-6 text-base font-semibold"
                onClick={() => setShowExtendDialog(true)}
              >
                <Calendar size={18} className="mr-2" />
                Extend for 4 weeks ($99.00)
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <FileText size={20} className="text-indigo-600" />
                    Details
                  </h2>
                  <p className="text-sm text-gray-500">Job description</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors"
                  onClick={handleEditDetails}
                >
                  <Edit size={16} className="mr-1" />
                  Edit
                </Button>
              </div>
              <div className="grid gap-5">
                <div className="flex items-start gap-3">
                  <Globe size={18} className="text-gray-400 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 uppercase font-semibold">
                      Language
                    </span>
                    <p className="text-gray-900 font-semibold mt-0.5">
                      {jobData.language}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gray-400 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 uppercase font-semibold">
                      Location
                    </span>
                    <p className="text-gray-900 font-semibold mt-0.5">
                      {jobData.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText size={18} className="text-gray-400 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 uppercase font-semibold">
                      CV Required
                    </span>
                    <p className="text-gray-900 font-semibold mt-0.5">
                      {jobData.cvRequired ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar
                    size={18}
                    className={
                      jobData.availableUntil ? "text-gray-400" : "text-red-400"
                    }
                  />
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 uppercase font-semibold">
                      Available Until
                    </span>
                    <p
                      className={`font-semibold mt-0.5 ${
                        jobData.availableUntil
                          ? "text-gray-900"
                          : "text-red-600"
                      }`}
                    >
                      {jobData.availableUntil || "No"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-5">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Requirements
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors"
                  onClick={handleEditDetails}
                >
                  <Edit size={16} className="mr-1" />
                  Edit
                </Button>
              </div>
              <ul className="space-y-3">
                {jobData.requirements.map((req, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-900 bg-green-50 rounded-lg px-4 py-3 border border-green-100"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-green-600 flex-shrink-0"
                    />
                    <span className="font-medium">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 mb-8 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Video size={20} className="text-purple-600" />
                  Interview Questions
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {jobData.questions.length} questions configured
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors"
                onClick={handleEditDetails}
              >
                <Edit size={16} className="mr-1" />
                Edit
              </Button>
            </div>
            <div className="space-y-3">
              {jobData.questions.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-gray-50 hover:bg-indigo-50/50 rounded-lg p-4 border border-gray-200 hover:border-indigo-200 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="bg-indigo-100 text-indigo-700 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-900 font-medium leading-relaxed flex-1">
                        {item.question}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      {item.likes && (
                        <span className="flex items-center gap-1 bg-white px-2.5 py-1.5 rounded-md border border-gray-200">
                          <ThumbsUp size={12} className="text-blue-500" />
                          <span className="font-semibold">{item.likes}</span>
                        </span>
                      )}
                      {item.unlimitedTakes && (
                        <span className="bg-purple-100 text-purple-700 px-2.5 py-1.5 rounded-md font-medium">
                          Unlimited takes
                        </span>
                      )}
                      <span className="flex items-center gap-1 bg-white px-2.5 py-1.5 rounded-md border border-gray-200 font-medium">
                        <Clock size={12} className="text-orange-500" />
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Video size={20} className="text-pink-600" />
                  Intro Video
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Upload a video introduction for candidates
                </p>
              </div>
              {jobData.introVideo && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors"
                  onClick={() =>
                    document.getElementById("video-upload")?.click()
                  }
                >
                  <Edit size={16} className="mr-1" />
                  Change
                </Button>
              )}
            </div>

            {jobData.introVideo ? (
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <video
                  controls
                  className="w-full rounded-lg max-h-96"
                  src={jobData.introVideo}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                {uploadingVideo ? (
                  <>
                    <Loader2 className="w-12 h-12 animate-spin text-indigo-600 mx-auto mb-3" />
                    <p className="text-gray-600 font-medium">
                      Uploading video...
                    </p>
                  </>
                ) : (
                  <>
                    <Video size={48} className="text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500 font-medium">
                      No intro video uploaded
                    </p>
                    <Button
                      className="mt-4 bg-indigo-600 hover:bg-indigo-700"
                      onClick={() =>
                        document.getElementById("video-upload")?.click()
                      }
                    >
                      <Upload size={16} className="mr-2" />
                      Upload Video
                    </Button>
                  </>
                )}
              </div>
            )}

            <input
              id="video-upload"
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleVideoUpload}
            />
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 md:p-8 shadow-sm border border-indigo-100">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                How to Apply
              </h3>
              <p className="text-gray-600">
                Candidates can apply to this job using a magic link or a job
                code
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <LinkIcon size={18} className="text-indigo-600" />
                  <h4 className="font-semibold text-gray-900">Magic Link</h4>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    value={jobData.magicLink}
                    readOnly
                    className="flex-1 bg-gray-50 border-gray-300 font-mono text-sm"
                  />
                  <Button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-md transition-all whitespace-nowrap"
                    onClick={() => copyToClipboard(jobData.magicLink, "link")}
                  >
                    {copiedLink ? (
                      <>
                        <Check size={16} className="mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} className="mr-2" />
                        Copy Link
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  On desktop this link opens the violo web app. On mobile it
                  leads the candidate to download the violo Video Interviews app
                  and automatically displays this job.
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Hash size={18} className="text-purple-600" />
                  <h4 className="font-semibold text-gray-900">Job Code</h4>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    value={jobData.jobCode}
                    readOnly
                    className="flex-1 bg-gray-50 border-gray-300 font-mono text-xl font-bold text-center sm:text-left"
                  />
                  <Button
                    className="bg-purple-600 hover:bg-purple-700 text-white shadow-sm hover:shadow-md transition-all whitespace-nowrap"
                    onClick={() => copyToClipboard(jobData.jobCode, "code")}
                  >
                    {copiedCode ? (
                      <>
                        <Check size={16} className="mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} className="mr-2" />
                        Copy Code
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  This job code can be manually entered into the violo Video
                  Interviews app to access this job. The app can be downloaded
                  from the App Store or Google Play store.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Close Job Confirmation Dialog */}
      <AlertDialog open={showCloseDialog} onOpenChange={setShowCloseDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Close this job posting?</AlertDialogTitle>
            <AlertDialogDescription>
              This will close the job posting and prevent new candidates from
              applying. Existing candidate data will be preserved. This action
              can be reversed by reopening the job.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isClosing}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleCloseJob}
              disabled={isClosing}
              className="bg-red-600 hover:bg-red-700"
            >
              {isClosing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Closing...
                </>
              ) : (
                "Close Job"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Extend Job Confirmation Dialog */}
      <Dialog open={showExtendDialog} onOpenChange={setShowExtendDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Extend Job Posting</DialogTitle>
            <DialogDescription>
              Extend this job posting for an additional 4 weeks for $99.00.
            </DialogDescription>
          </DialogHeader>

          <div className="py-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 font-medium">
                  Current expiry:
                </span>
                <span className="text-gray-900 font-bold">
                  {jobData.daysLeft} days
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">
                  After extension:
                </span>
                <span className="text-indigo-600 font-bold">
                  {jobData.daysLeft + 28} days
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-indigo-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    $99.00
                  </span>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowExtendDialog(false)}
              disabled={isExtending}
            >
              Cancel
            </Button>
            <Button
              onClick={handleExtendJob}
              disabled={isExtending}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
            >
              {isExtending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4 mr-2" />
                  Confirm & Pay
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JobDetail;
