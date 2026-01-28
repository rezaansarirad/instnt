import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export function ApplyMobileApp() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendLink = () => {
    // Send SMS with app download link
    alert(`Link sent to ${phoneNumber}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - Apply through browser */}
          <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">
                Apply for Sales Representative
              </h2>
              <p className="text-sm text-gray-600">
                Record your video interview directly through your smartphone or
                your desktop browser.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex gap-4 mb-4">
                <div className="flex-1 border-2 border-gray-200 rounded-lg p-4 text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gray-600"
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
                  <h3 className="text-sm font-medium mb-1">
                    Apply with mobile app
                  </h3>
                  <p className="text-xs text-gray-500">
                    Get the Instnt Video Interviews app for Android or IOS
                  </p>
                </div>

                <div className="flex-1 border-4 border-purple-600 rounded-lg p-4 text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-sm font-medium mb-1">
                    Continue in browser
                  </h3>
                  <p className="text-xs text-gray-500">
                    Optimised for Chrome and Firefox
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-center text-gray-500 mb-4">
              By continuing you accept the{" "}
              <a href="#" className="text-purple-600 underline">
                Instnt Terms
              </a>{" "}
              and{" "}
              <a href="#" className="text-purple-600 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Right - Mobile App */}
          <div className="bg-white rounded-lg p-8 border-2 border-purple-600">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-purple-600"
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
                  <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-2 text-center">
              Apply using the Instnt app
            </h2>
            <p className="text-sm text-gray-600 mb-6 text-center">
              We will send you a message with a link to download the Instnt
              Video Interviews app.
            </p>

            <div className="mb-6">
              <Label htmlFor="phone" className="text-sm mb-2 block">
                Phone number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+905342654355"
                className="mb-4"
              />
              <Button
                onClick={handleSendLink}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white"
              >
                Send me a link
              </Button>
            </div>

            <div className="flex justify-center gap-3 mb-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on App Store"
                  className="h-10"
                />
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
            </div>

            <button className="w-full text-sm text-gray-500 hover:text-gray-700 flex items-center justify-center">
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

        {/* Logo */}
        <div className="text-center mt-8">
          <span className="text-2xl font-light text-gray-400">instnt</span>
        </div>

        <div className="mt-6 text-center">
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600">
            Need help?
          </a>
        </div>
      </div>
    </div>
  );
}
