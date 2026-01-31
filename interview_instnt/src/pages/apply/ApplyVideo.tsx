import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import logoWhite from "@/assets/icons/violo_logo_white.png";

export function ApplyVideo() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(
    null,
  );
  const [showPermissionDialog, setShowPermissionDialog] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const questions = [
    {
      id: 1,
      text: "What's the most exotic place you'd like to visit?",
      time: 30,
      task: 1,
    },
    {
      id: 2,
      text: "What do you like the least about sales?",
      time: 45,
      task: 1,
    },
    {
      id: 3,
      text: "Describe a challenging situation you overcame at work.",
      time: 60,
      task: 2,
    },
    {
      id: 4,
      text: "What motivates you in your professional life?",
      time: 45,
      task: 2,
    },
    {
      id: 5,
      text: "How do you handle conflicts with team members?",
      time: 60,
      task: 3,
    },
    {
      id: 6,
      text: "What are your long-term career goals?",
      time: 45,
      task: 3,
    },
    {
      id: 7,
      text: "Why should we hire you for this position?",
      time: 60,
      task: 3,
    },
  ];

  const totalQuestions = questions.length;

  useEffect(() => {
    if (!code) {
      navigate("/");
    }
  }, [code, navigate]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraPermission(true);
      setShowPermissionDialog(false);
    } catch (error) {
      console.error("Error accessing camera:", error);
      setCameraPermission(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const handleAllowCamera = () => {
    startCamera();
  };

  const handleBlockCamera = () => {
    setShowPermissionDialog(false);
    setCameraPermission(false);
  };

  const startRecording = async () => {
    try {
      // Ensure camera is running
      if (!videoRef.current?.srcObject) {
        await startCamera();
      }

      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.start();
        setIsRecording(true);
        setRecordingTime(0);

        timerRef.current = setInterval(() => {
          setRecordingTime((prev) => prev + 1);
        }, 1000);

        mediaRecorder.ondataavailable = (event) => {
          // Handle recorded data
          console.log("Recording data available:", event.data);
        };
      }
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setHasRecorded(true);

      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setHasRecorded(false);
      setRecordingTime(0);
    } else {
      navigate(`/apply/review?code=${code}`);
    }
  };

  const handleFinish = () => {
    navigate(`/apply/review?code=${code}`);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  if (showPermissionDialog && cameraPermission === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
          <h2 className="text-lg font-semibold mb-4">
            interview.violo.com says
          </h2>
          <p className="mb-6 text-gray-700">
            For this question you have just one chance to record it. Good luck!
          </p>
          <div className="flex gap-3 justify-end">
            <Button
              variant="outline"
              onClick={handleBlockCamera}
              className="px-6"
            >
              Block
            </Button>
            <Button
              onClick={handleAllowCamera}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6"
            >
              OK
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (cameraPermission === false) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-xl font-semibold mb-4">Camera Access Denied</h2>
          <p className="text-gray-600 mb-6">
            Please allow camera and microphone access to continue with the video
            interview.
          </p>
          <Button
            onClick={startCamera}
            className="bg-orange-400 hover:bg-orange-500"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <img src={logoWhite} alt="Violo" className="h-8" />
          <div className="text-white text-sm">
            Question {currentQuestion} - {questions[currentQuestion - 1]?.time}{" "}
            sec. max - Task {questions[currentQuestion - 1]?.task}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-4xl w-full">
          {/* Question */}
          <div className="bg-gray-800 text-white p-6 rounded-t-lg text-center">
            <h2 className="text-xl font-medium">
              {questions[currentQuestion - 1]?.text}
            </h2>
          </div>

          {/* Video Area */}
          <div className="bg-gray-700 aspect-video relative rounded-b-lg overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              muted
              className="w-full h-full object-cover"
            />

            {/* Recording Indicator */}
            {isRecording && (
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-medium">REC</span>
              </div>
            )}

            {/* Timer */}
            {isRecording && (
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-xl font-mono">
                {formatTime(recordingTime)}
              </div>
            )}

            {/* Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
              {!isRecording && !hasRecorded && (
                <Button
                  onClick={startRecording}
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-6 rounded-full text-lg"
                >
                  Start recording
                </Button>
              )}

              {isRecording && (
                <Button
                  onClick={stopRecording}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg"
                >
                  Done
                </Button>
              )}

              {hasRecorded && (
                <>
                  <Button
                    onClick={() => {
                      setHasRecorded(false);
                      setRecordingTime(0);
                    }}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-6 rounded-full"
                  >
                    Re-record
                  </Button>
                  <Button
                    onClick={handleNext}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full flex items-center gap-2"
                  >
                    {currentQuestion < totalQuestions ? (
                      <>
                        Next
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Play
                      </>
                    )}
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={() => navigate(`/apply/details?code=${code}`)}
              className="text-gray-400 hover:text-gray-300 text-sm"
            >
              ← Back
            </button>

            {hasRecorded && currentQuestion === totalQuestions && (
              <Button
                onClick={handleFinish}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8"
              >
                Finish interview
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <a href="#" className="text-xs text-gray-400 hover:text-gray-300">
            Need help?
          </a>
        </div>
      </div>
    </div>
  );
}
