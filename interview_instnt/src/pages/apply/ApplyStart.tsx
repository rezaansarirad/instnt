import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export function ApplyStart() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");
  const [jobData] = useState({
    title: "Sales Representative",
    company: "TBC",
    salary: "$200",
    location: "Istanbul",
  });

  const handleContinueInBrowser = () => {
    navigate(`/apply/details?code=${code}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-background">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-6 sm:mb-10">
          <span className="text-2xl sm:text-3xl font-light text-gray-900">
            Violo
          </span>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-4 sm:mb-2">
              Apply for {jobData.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                <span className="whitespace-nowrap">{jobData.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="whitespace-nowrap">{jobData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="whitespace-nowrap">{jobData.salary}</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 sm:px-5 py-3 sm:py-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Record your video interview directly through your smartphone
                    or desktop browser.
                  </p>
                  <p className="text-xs text-blue-700 mt-2">
                    <strong>Tip:</strong> Choose a quiet space with good
                    lighting and camera quality
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
              Choose Your Application Method
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
              <div className="relative group bg-white border-2 border-gray-200 rounded-lg p-5 sm:p-6 text-center cursor-not-allowed opacity-60">
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 18h.01"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">
                  Apply with mobile app
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                  Get the violo Video Interviews app for Android or iOS
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                    iOS
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                    Android
                  </span>
                </div>
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 py-1 bg-gray-800 text-white text-xs font-medium rounded">
                  Coming soon
                </div>
              </div>

              <div
                onClick={handleContinueInBrowser}
                className="group bg-white border-3 border-orange-400 rounded-lg p-5 sm:p-6 text-center hover:border-orange-500 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">
                  Continue in browser
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                  Optimised for Chrome and Firefox
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                    Chrome
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                    Firefox
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-center text-gray-500 leading-relaxed px-2">
              By continuing you accept the
              <a
                href="#"
                className="text-orange-600 hover:text-orange-700 underline mx-1"
              >
                violo Terms
              </a>
              and
              <a
                href="#"
                className="text-orange-600 hover:text-orange-700 underline mx-1"
              >
                Privacy Policy
              </a>
            </p>
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
